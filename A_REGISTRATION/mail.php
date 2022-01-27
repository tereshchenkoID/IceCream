<?php
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
				$headers .= "From:" . "admin@global-workers.eu";

    $recipients = array(
      "tereschenko23041991@gmail.com",
      "admin@global-workers.eu"
    );

    $to = implode(",", $recipients);

 		if($_SERVER["REQUEST_METHOD"] == "POST"){

						if($_POST["type"] == '1') {
         $file = 'people.txt';
         $current = file_get_contents($file);
         $current .= "[".$_POST['name']."] - ".$_POST["contact"]["email"];
         file_put_contents($file, $current);

									mail($to, "Resume request", json_encode($_POST), $headers);

									mail(
            $_POST["contact"]["email"],
            'Реєстрація',
            '<html>
               <body>
                  <table
                     cellpadding="0"
                     cellspacing="0"
                     align="center"
                     style="background-color:#f0f0f0;width:100%;max-width:620px;padding:0;margin:0 auto;border:none"
                  >
                     <tr>
                         <td style="padding:0 0">
                             <table
                                 cellpadding="0"
                                 cellspacing="0"
                                 style="width:100%;max-width:620px;border:none"
                             >
                                 <tr>
                                     <td style="vertical-align:top;text-align:left;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;font-size:1em;color:#666;background-color:#a3b7bf;">
                                         <table
                                             cellpadding="0"
                                             cellspacing="0"
                                             style="width:100%;border:none"
                                         >
                                             <tr>
                                                 <td style="vertical-align:top">
                                                     <a href="https://global-workers.eu/"
                                                        target="_blank"
                                                        style="display:block"
                                                     >
                                                         <img src="https://global-workers.eu/img/logo.png"
                                                              width="100"
                                                              height="100"
                                                              alt="Global Workers"
                                                              title="Global Workers"
                                                              style="display:block;border:none;width:150px;height:150px;margin:0 auto;"
                                                         >
                                                     </a>
                                                 </td>
                                             </tr>
                                         </table>
                                     </td>
                                 </tr>
                             </table>
                         </td>
                     </tr>
                      <tr>
                          <td style="vertical-align:top;text-align:left;padding:15px 20px;font-family:Arial,Helvetica,sans-serif;font-size:1em;color:#666">
                              <p style="width:100%;color:#000;font-size:1.5em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top">Вітаємо, '.$_POST['name'].'!</p>
                              <p style="width:100%;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 2">
                                  Ви успішно пройшли реєстрацію, Ваше резюме з`явиться на сайті як тільки пройде верифікацію
                              </p>
                              <p style="width:100%;margin:20px 0 0;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 2">
                                  З повагою,<br>
                                  Команда
                                  <a href="https://global-workers.eu/" style="color:#406580" target="_blank">global-workers.ua</a>
                              </p>
                          </td>
                      </tr>

                      <tr>
                          <td style="vertical-align:top;padding:15px 20px;border-top:solid 1px #666;text-align:left">
                             <p style="width:100%;margin:0;color:#666;font-family:Arial,Helvetica,sans-serif;font-size:0.8em;padding:0 0 15px 0;vertical-align:top;">
                                 <a href="https://global-workers.eu/" style="color:#406580" target="_blank">global-workers.eu</a>
                                 — сайт
                             </p>
                             <p style="width:100%;margin:0;color:#666;font-family:Arial,Helvetica,sans-serif;font-size:0.8em;padding:0 0 15px 0;vertical-align:top;">
                                 <a href="mailto:admin@global-workers.eu" style="color:#406580" target="_blank">admin@global-workers.eu</a>
                                 — з технічних питань
                             </p>
                          </td>
                      </tr>
                  </table>
               </body>
            </html>',
            $headers
         );
						}
						elseif($_POST["type"] == '2') {
									mail(
												$to,
												"Feedback",
												'<html>
               <body>
							           <table
							               cellpadding="0"
							               cellspacing="0"
							               align="center"
							               style="background-color:#f0f0f0;width:100%;max-width:620px;padding:0;margin:0 auto;border:none"
							           >
							               <tr>
							                   <td>
							                       <table
							                               cellpadding="0"
							                               cellspacing="0"
							                               style="width:100%;max-width:620px;border:none"
							                       >
							                           <tr>
							                               <td style="vertical-align:top;text-align:left;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;font-size:1em;color:#666;background-color:#a3b7bf;">
							                                   <table
							                                           cellpadding="0"
							                                           cellspacing="0"
							                                           style="width:100%;border:none"
							                                   >
							                                       <tr>
							                                           <td style="vertical-align:top">
							                                               <a href="https://global-workers.eu/"
							                                                  target="_blank"
							                                                  style="display:block"
							                                               >
							                                                   <img src="https://global-workers.eu/img/logo.png"
							                                                        width="100"
							                                                        height="100"
							                                                        alt="Global Workers"
							                                                        title="Global Workers"
							                                                        style="display:block;border:none;width:150px;height:150px;margin:0 auto;"
							                                                   >
							                                               </a>
							                                           </td>
							                                       </tr>
							                                   </table>
							                               </td>
							                           </tr>
							                       </table>
							                   </td>
							               </tr>
							               <tr>
							                   <td style="vertical-align:top;text-align:left;padding:15px 20px;font-family:Arial,Helvetica,sans-serif;font-size:1em;color:#666">
							                       <p style="width:100%;color:#f00;font-size:0.8em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">Name:</p>
							                       <p style="width:100%;margin: 0 0 25px 0;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">'.$_POST['name'].'</p>

							                       <p style="width:100%;color:#f00;font-size:0.8em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">Subject:</p>
							                       <p style="width:100%;margin: 0 0 25px 0;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">'.$_POST['subject'].'</p>

							                       <p style="width:100%;color:#f00;font-size:0.8em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">Email:</p>
							                       <p style="width:100%;margin: 0 0 25px 0;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">'.$_POST['email'].'</p>

							                       <p style="width:100%;color:#f00;font-size:0.8em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">Message:</p>
							                       <p style="width:100%;color:#666;font-size:1em;font-family:Arial,Helvetica,sans-serif;font-weight:normal;vertical-align:top;line-height: 1">'.$_POST['message'].'</p>
							                   </td>
							               </tr>
							               <tr>
							                   <td style="vertical-align:top;padding:15px 20px;border-top:solid 1px #666;text-align:left">
							                       <p style="width:100%;margin:0;color:#666;font-family:Arial,Helvetica,sans-serif;font-size:0.8em;padding:0 0 15px 0;vertical-align:top;">
							                           <a href="https://global-workers.eu/" style="color:#406580" target="_blank">global-workers.eu</a>
							                           — сайт
							                       </p>
							                       <p style="width:100%;margin:0;color:#666;font-family:Arial,Helvetica,sans-serif;font-size:0.8em;padding:0 0 15px 0;vertical-align:top;">
							                           <a href="mailto:admin@global-workers.eu" style="color:#406580" target="_blank">admin@global-workers.eu</a>
							                           — з технічних питань
							                       </p>
							                   </td>
							               </tr>
							           </table>
						         </body>
            </html>',
												$headers
								);
						}
			}
			else {
						echo "Welcome";
			}
?>
