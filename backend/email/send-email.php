<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

//traz variaveis do .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

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

    $nome = htmlspecialchars($data['nome'] ?? '');
    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $telefone = htmlspecialchars($data['telefone'] ?? '');
    $linkedin = htmlspecialchars($data['linkedin'] ?? '');
    $mensagem = htmlspecialchars($data['mensagem'] ?? '');

    if (empty($nome) || empty($email) || empty($mensagem)) {
        http_response_code(400);
        echo json_encode(["error" => "Preencha os campos obrigatórios."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "E-mail inválido."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuração SMTP - usando variáveis do .env
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['GMAIL_USER'];
        $mail->Password = $_ENV['GMAIL_PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // E-mail de envio e destino
        $mail->setFrom($_ENV['GMAIL_USER'], 'Portfolio - Formulario');
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
        echo json_encode(["error" => "Erro ao enviar: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
}