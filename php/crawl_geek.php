<?php 
$params= file_get_contents('php://input');
$params=json_decode($params);
// $json = file_get_contents("https://api.geekdo.com/api/collections?ajax=1&comment=1&objectid=$params->game_id&objecttype=thing&oneperuser=0&pageid=$params->page&rated=1&require_review=true&showcount=25&sort=review_tstamp");
$curl=curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.geekdo.com/api/collections?ajax=1&objectid=$params->game_id&objecttype=thing&oneperuser=1&pageid=$params->page&rated=1&require_review=true&showcount=50&sort=review_tstamp");
curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl, CURLOPT_HTTPHEADER,[
    'User-Agent: PostmanRuntime/7.29.0',
]);
$json=curl_exec($curl);
curl_close($curl);
exit($json);
