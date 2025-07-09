<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Carrega .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Bloqueia requisições que não sejam JSON
$contentType = $_SERVER["CONTENT_TYPE"] ?? '';
if (stripos($contentType, 'application/json') === false) {
    http_response_code(400);
    echo json_encode(["error" => "Requisição inválida. Use application/json."]);
    exit;
}

// CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    http_response_code(204);
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // honeypot antispam
    if (!empty($data['website'])) {
        http_response_code(400);
        echo json_encode(["error" => "Bot detectado."]);
        exit;
    }

    // proteção contra envio muito rapido
    $startTime = intval($data['startTime'] ?? 0);
    if ((time() * 1000) - $startTime < 3000) {
        http_response_code(400);
        echo json_encode(["error" => "Envio suspeito detectado."]);
        exit;
    }

    // Campos com validação
    $nome = strip_tags(trim($data['nome'] ?? ''));
    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $telefone = preg_replace('/[^0-9]/', '', $data['telefone'] ?? '');
    $linkedin = htmlspecialchars($data['linkedin'] ?? '');
    $mensagem = htmlspecialchars($data['mensagem'] ?? '');

    if (empty($nome) || empty($email) || empty($mensagem)) {
        http_response_code(400);
        echo json_encode(["error" => "Preencha nome, email e mensagem."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "E-mail inválido."]);
        exit;
    }

    // contra flood por ip
    $ip = $_SERVER['REMOTE_ADDR'];
    $log = __DIR__ . '/../email/iplog.json';
    $iplog = file_exists($log) ? json_decode(file_get_contents($log), true) : [];

    $now = time();
    if (isset($iplog[$ip]) && $now - $iplog[$ip] < 60) {
        http_response_code(429);
        echo json_encode(["error" => "Aguarde 1 minuto antes de tentar novamente."]);
        exit;
    }
    $iplog[$ip] = $now;
    file_put_contents($log, json_encode($iplog));

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['GMAIL_USER'];
        $mail->Password = $_ENV['GMAIL_PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($_ENV['GMAIL_USER'], 'Portfolio - Formulário');
        $mail->addReplyTo($email, $nome);
        $mail->addAddress($_ENV['GMAIL_USER']);

        $mail->Subject = "Nova mensagem de contato";
        $mail->Body = 
            "Nome: $nome\n" .
            "Email: $email\n" .
            "Telefone: $telefone\n" .
            "LinkedIn: $linkedin\n\n" .
            "Mensagem:\n$mensagem";

        $mail->send();
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "error" => "Erro ao enviar: " . $mail->ErrorInfo,
            "exception" => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
}