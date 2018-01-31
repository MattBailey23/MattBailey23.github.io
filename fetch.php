<?php

include __DIR__.'/vendor/autoload.php';
use Guzzle\Http\Client;

$http = new Client('http://coop.apps.knpuniversity.com', array(
  'request.options' => array(
    'exceptions' => false,
   )
));

$request = $http->post('token', null, array(
  'client_id => 'MattBDev',
  'client_secret' => '51f1d08cc9125edeefd61af57bde4c80',
  'grant_type => 'client_credentials',
));
$response = $request->send();
$responseBody = $response->getBody(true);
$responseArr = json_decode($responseBody, true);
$accessToken = $responseArr['access_token'];

  
$request = $http->post('/api/2/eggs-collect');
$request->addHeader('Authorization', 'Bearer '.$accesToken);
$response = $request->send();

echo $response->getBody();

echo "\n\n";
