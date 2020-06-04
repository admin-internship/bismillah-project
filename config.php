<?php

require_once 'vendor/autoload.php';

$google_client = new Google_client();

//client ID
$google_client->setClientId('438044787956-avsdnov5gugv9a9u51njkbln3s5vq4pf.apps.googleusercontent.com');

//secret Key
$google_client->setClientSecret('oXMd2b1i9BXTwGlgLyj-804G');

//redirect url
$google_client->setRedirectUri('http://book-finder.epizy.com/search.php');

//
$google_client->addScope('email');

$google_client->addScope('profile');

//start session on web page
session_start();

?>