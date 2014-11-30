<?php

$options= array();

$options['message']= isset($_POST['message']) ? $_POST['message'] : false; //haalt de post/get variabele op
$options['token']= 'aY6qEnuG4PJBYUQHcaFhdfrMvoAjoW';    //stuurt de API key mee naar de server
$options['user']= 'gVRoEpd8jMck6A2Ggxw5ttq2GV9YzJ';     //stuurt de specifieke userkey mee naar de server

if(isset($_POST['url'])){

    $options['url']= isset($_POST['url']) ? $_POST['url'] : false;

}




$url = 'https://api.pushover.net/1/messages.json';
$data = http_build_query($options);
$ch = curl_init();

curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($options));
curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
curl_setopt($ch,CURLOPT_SAFE_UPLOAD, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); //moet worden veranderd om de veiligheid te waarborgen!!! PUUR VOOR TEST!!!
$result = curl_exec($ch);
if (curl_errno($ch))
{
    print curl_error($ch);
    //Als er een fout is geef deze dan
}
else
{
    curl_close($ch);
    //Sluit de link met de website
}


