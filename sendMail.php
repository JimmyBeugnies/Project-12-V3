<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'beugniesjimmy@gmail.com';
$subject = 'Nouveau message de votre site portfolio';

$mailheader = "From: ".$email."\r\n";
$mailheader .= "Reply-To: ".$email."\r\n";
$mailheader .= "Content-type: text/plain; charset=utf-8\r\n";

$body = "Vous avez reçu un nouveau message de : $name\n\n";
$body .= "Message:\n$message\n";

mail($to, $subject, $body, $mailheader) or die("Erreur !");
echo "Message envoyé!";
?>


<!-- Méthode $_Post = request HTTP ( url ) -->