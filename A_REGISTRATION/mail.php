<?php
    header('Content-Type: text/html; charset=UTF-8');

    mb_internal_encoding('UTF-8');
    mb_http_output('UTF-8');
    mb_http_input('UTF-8');
    mb_regex_encoding('UTF-8');


    $recipients = array(
      'tereschenko23041991@gmail.com',
      'admin@global-workers.eu'
    );

    $to = implode(',', $recipients);
    $subject = 'Resume request';
    $headers = array(
        'From' => 'admin@global-workers.eu',
        'Reply-To' => 'admin@global-workers.eu',
        'X-Mailer' => 'PHP/' . phpversion()
    );

			if($SERVER["REQUEST_METHOD"] == "POST"){
					mail($to, $subject, json_encode($_POST['user']), $headers);
			}
			else {
				echo "Welcome";
			}
?>
