<?php 
$game_id=$_POST["game_id"];
$json = file_get_contents("https://api.geekdo.com/api/collections?ajax=1&comment=1&objectid=$game_id&objecttype=thing&oneperuser=0&pageid=1&rated=1&require_review=true&showcount=50&sort=review_tstamp");
return $json;
