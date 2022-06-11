<?php 
$xml = file_get_contents("https://api.geekdo.com/api/collections?ajax=1&comment=1&objectid=342942&objecttype=thing&oneperuser=0&pageid=1&rated=1&require_review=true&showcount=50&sort=review_tstamp");

echo $xml;
?>
