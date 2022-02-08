<?php

$json_data = '[
  {
    "id": "0",
    "contact":{"email":"nazaruk28021978@gmail.com", "phone":"0677917966"}
  },
  {
    "id": "1",
    "contact":{"email":"yana.prykaz@gmail.com", "phone":"0960455856"}
  },
  {
    "id": "2",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0677621344"}
  },
  {
    "id": "3",
    "contact":{"email":"akbarcelona777@gmail.com", "phone":"0988015735"}
  },
  {
    "id": "4",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0677621344"}
  },
  {
    "id": "5",
    "contact":{"email":"kseniyaa1979@gmai.com", "phone":"0666029573"}
  },
  {
    "id": "6",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0987995495"}
  },
  {
    "id": "7",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0987995495"}
  },
  {
    "id": "8",
    "contact":{"email":"nataliapilipuk4@gmail.com", "phone":"0953856195"}
  },
  {
    "id": "9",
    "contact":{"email":"pilipukoleksandr2@gmail.com", "phone":"0669142230"}
  },
  {
    "id": "10",
    "contact":{"email":"tatyana1sakharuk@gmail.com", "phone":"0974185771"}
  },
  {
    "id": "11",
    "contact": {"email": "budowaguro@gmail.com", "phone": "0639815119"}
  },
  {
    "id": "12",
    "contact":{"email":"stepankorneluk053@gmail.com", "phone":"0987184636"}
  },
  {
    "id": "13",
    "contact":{"email":"pasha2019@gmail.com", "phone":"0635664112"}
  },
  {
    "id": "14",
    "contact":{"email":"gluch.witalij@ukr.net", "phone":"0962258860"}
  },
  {
    "id": "15",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0679740789"}
  },
  {
    "id": "16",
    "contact":{"email":"mari4kaju@i.ua", "phone":"0971280301"}
  },
  {
    "id": "17",
    "contact":{"email":"mari4kaju@i.ua", "phone":"0971280301"}
  },
  {
    "id": "18",
    "contact":{"email":"lenahurnev@gmail.com", "phone":"0977780321"}
  },
  {
    "id": "19",
    "contact":{"email":"pristupa1971@gmail.com", "phone":"0973408257"}
  },
  {
    "id": "20",
    "contact":{"email":"anastasiyazimoha@gmail.com", "phone":"0668522969"}
  },
  {
    "id": "21",
    "contact":{"email":"pidtserkovna0112@gmail.com", "phone":"0506026455"}
  },
  {
    "id": "22",
    "contact":{"email":"mariaa55580@gmail.com", "phone":"0683980244"}
  }
]';


$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From:" . "admin@global-workers.eu";

$recipients = array(
  "tereschenko23041991@gmail.com",
//   "admin@global-workers.eu"
);

$to = implode(",", $recipients);

$json = json_decode($json_data, true);


if($_SERVER["REQUEST_METHOD"] == "POST"){

    if($_POST["type"] == '1' && $_POST["team"]) {
        $contact = 'Team: <br>';

        for ($i = 0; $i < count(explode(",", $_POST["team"])); $i++) {

            foreach ($json as $id => $value) {
                if ($_POST["team"][$i] == $id) {
                    $contact .= '['.$id.'] : ['.$value['contact']['email'].'] : ['.$value['contact']['phone'].']<br>';
                }
            }
        }

        $contact .= '<br>';
        $contact .= 'Customer: <br>';
        $contact .= '['.$_POST["email"].']'.': ['.$_POST["name"].']<br>';

        mail(
            $to,
            "Team request",
            $contact,
            $headers
        );
    }
    else {
        header('Location: https://global-workers.eu/404');
    }
}
else {
				header('Location: https://global-workers.eu/404');
}

?>
