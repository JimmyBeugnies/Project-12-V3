<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $contactType = $_POST['contactType'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'beugniesjimmy@gmail.com';
    $subject = 'Message de ' . $firstName;
    $emailBody = "Nom: $firstName\nType: $contactType\nEmail: $email\nTéléphone: $phone\nMessage: $message";

    $headers = 'From: ' . $email;

    mail($to, $subject, $emailBody, $headers);

    echo 'Votre message a été envoyé avec succès.';
}
?>
