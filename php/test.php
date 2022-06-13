<?php 
$page=$_GET["page"];
$curl=curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.geekdo.com/api/collections?ajax=1&objectid=162886&objecttype=thing&oneperuser=1&pageid=$page&rated=1&require_review=true&showcount=50&sort=review_tstamp");
curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl, CURLOPT_FORBID_REUSE, true);
curl_setopt($curl, CURLOPT_HTTPHEADER,[
    'User-Agent: PostmanRuntime/7.29.0',
]);
$json=curl_exec($curl);
curl_close($curl);

exit($json);
