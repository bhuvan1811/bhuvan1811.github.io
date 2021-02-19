<?php
include 'db.php';
$f_name = $_GET['name'];
$email = $_GET['email'];
$theme= $_GET['theme'];


$to = "bhuvan.designoweb@gmail.com";
$subject = "Message from App Designer website";

$header = "From:ashma@designoweb@gmail.com   \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$message = "Your name: " . $f_name . "<br>" . "Your email : " . $email . "<br>" . "Theme: " . $theme;

$retval = mail($to, $subject, $message, $header);


if ($retval == true) {
    
    $data="Message sent successfully...";
// header('Location: '.$_SERVER['PHP_SELF']);  die;
} else {
    $data="Message could not be sent...";
//   header('Location: '.$_SERVER['PHP_SELF']);  die;
}
echo json_encode($data);
?>