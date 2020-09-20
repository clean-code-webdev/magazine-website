<?php

 if (isset($_POST['submit'])){

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    /*---------------------------------------- PLACE YOUR EMAIL ADDRESS HERE ----------------------------------------*/
    $mailTo = "youremail@domain.com";
    /*---------------------------------------------------------------------------------------------------------------*/
    $headers = "From: " . $mailFrom;
    $txt = "You have received an e-mail from: " . $name . "\r\n" . 
    "Message: " . "\r\n" . $message;

    mail($mailTo, $subject, $headers. $txt);

    header("Location: index.html");

}

?>