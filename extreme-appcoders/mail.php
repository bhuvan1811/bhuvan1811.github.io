<?php

$name = $_GET['fullName'];
$email = $_GET['email'];
$number = $_GET['contactNumber'];
$msg= $_GET['message'];


$to = "bhuvan.sharma1811@gmail.com";

$subject = "Message from Extreme Appcoders";

$header = "From:bhuvan.sharma1811@gmail.com   \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "Name: " . $name . "<br>" .  "Email : " . $email . "<br>" . "Contact Number :" . $number  . "<br>" ."Message : " .$msg;

$retval = mail($to, $subject, $message, $header);

if ($retval == true) {
    
    $data="Thanks for connecting with us. We will response soon.";
// header('Location: '.$_SERVER['PHP_SELF']);  die;
} else {
    $data="Message could not be sent...";
//   header('Location: '.$_SERVER['PHP_SELF']);  die;
}
echo json_encode($data);
?>