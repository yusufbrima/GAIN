<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function send_mail($to,$name,$subject,$body,$services){
	require 'vendor/PHPMailer/src/Exception.php';
	require 'vendor/PHPMailer/src/PHPMailer.php';
	require 'vendor/PHPMailer/src/SMTP.php';
	// Instantiation and passing `true` enables exceptions
	$mail = new PHPMailer(true);
	try {
	    //Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;  //DEBUG_SERVER|DEBUG_CLIENT/DEBUG_OFF                    // Enable verbose debug output
	    $mail->isSMTP();                                            // Send using SMTP
	    $mail->Host       = 'smtp.googlemail.com';                    // Set the SMTP server to send through
	    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
	    $mail->Username   = 'youremail@gmail.com';                     // SMTP username
	    $mail->Password   = 'password';                               // SMTP password
	    $mail->SMTPSecure = 'ssl'; //PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	    $mail->Port       = 456;

	    //Recipients
	    $mail->setFrom('youremail@gmail.com', 'GAIN');
	    $mail->addAddress($to, $name);     // Add a recipient
	    $mail->addReplyTo($body["client_email"], $body["client_name"]);
	    $mail->addCC('youremail2@gmail.com');
	    //$mail->addBCC('bcc@example.com');

	    // Attachments
	    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	    // Content
	    $services_body = '<ul>';
	    foreach ($services as $key => $value) {
	    	if($value!=""){
	    		$services_body .= '<li>' . $value .'</li>';
	    	}

	    }
	    $services_body .= '</ul>';
	    $mail->isHTML(true);                                  // Set email format to HTML
	    $mail->Subject = $subject;
	    $mail->Body    = '<html lang="en">
							<head>
							  <meta charset="UTF-8">
							  <meta name="viewport" content="width=device-width, initial-scale=1.0">
							  <meta http-equiv="X-UA-Compatible" content="ie=edge">
    						</head>
	    					<body>
	    						<div class="main">
							    <!-- photo / grid -->
	    					     <p>Dear Support, </p>
	    					     <p> Inquiry received from '.$body["client_name"].'
	    					     </p>
	    					     <p> Client Email '.$body["client_email"].'
	    					     </p>
	    					     <p> Ref '.$subject.'
	    					     </p>
	    					     <p>
	    						 '. $body["message"] .'
	    						</p>
	    						<p>
	    							Thank you,<br />
	    							GAIN Communications Team.
	    						</p>
	    						</div>
	    					</body>
	    					</html>
	    ';
	    $mail->AltBody = $body['message'];

	    $mail->send();
	    return true;
	} catch (Exception $e) {
		return false;
		//echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}
}


	if(isset($_POST) AND isset($_POST['submit'])){
		//var_dump($_POST);
		$body['client_email'] =  $_POST['email'];
		$body['client_name'] = $_POST['name'];
		$body['message'] = $_POST['body'];
		$subject = $_POST['subject'];

		$to = 'youremail@gmail.com';
		$name = 'Inquiry';
		if(send_mail($to,$name,$subject,$body,$service)){
			echo "Thank you for getting in touch, we will get back to you shortly";
		}else{
			'<span style="color:red">Sorry, error delivering your message. Please try again</span>';
		}


	}




?>
