<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    $to = 'beugniesjimmy@gmail.com';
    $subject = 'Nouveau message de votre site portfolio';

    $mailheader = "From: ".$email."\r\n";
    $mailheader .= "Reply-To: ".$email."\r\n";
    $mailheader .= "Content-type: text/plain; charset=utf-8\r\n";

    $body = "Vous avez reçu un nouveau message de : $name\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $mailheader)) {
        echo "Message envoyé!";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
