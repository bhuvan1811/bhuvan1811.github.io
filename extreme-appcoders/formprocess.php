
<?php 
require('./function.php');
if(isset($_POST['submit'])){
    $data=$_POST;
    $html="<p>Name : ".$data['fullName2']."</p>";
    $html="<p>Contact No : ".$data['contactNumber2']."</p>";
    $html.="<p>Email Id : ".$data['email2']."</p>";
    $html.="<p>Skype Id : ".$data['skypeId2']."</p>";
    $html.="<p>Whatsapp No : ".$data['whatsappId2']."</p>";
    $html.="<p>Requirement</h3> : ".$data['message2']."</p>";
    $html.="<p>Technologies</h3> : ".$data['chooseTech']."</p>";
    $to='sbhuviii@gmail.com';
    $subject='Contact';
    sendMail($to,$subject,$html);
    // header("location:./thankyou.php");
}

?>