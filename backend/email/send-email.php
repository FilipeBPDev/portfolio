<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../vendor/autoload.php';
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
    $email = htmlspecialchars($data['email'] ?? '');
    $telefone = htmlspecialchars($data['telefone'] ?? '');
    $linkedin = htmlspecialchars($data['linkedin'] ?? '');
    $mensagem = htmlspecialchars($data['mensagem'] ?? '');

    if (empty($nome) || empty($email) || empty($mensagem)) {
        http_response_code(400);
        echo json_encode(["error" => "Preencha os campos obrigatórios."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuração SMTP - Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'filipebp29@gmail.com';
        $mail->Password = 'xptiojvbsvtbxvho';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // E-mail de envio e destino
        $mail->setFrom('filipebp29@gmail.com', 'Portfólio - Formulário');
        $mail->addReplyTo($email, $nome);
        $mail->addAddress('filipebp29@gmail.com');

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
