<?php

header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
define('root',$_SERVER['DOCUMENT_ROOT']. '/');

include_once(root . 'libraries/MysqliDb.php');
$db = new MysqliDb ('localhost', 'root', '', 'chat');





// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the request
    $data = json_decode(file_get_contents('php://input'), true);

    // Perform necessary operations with the data
    // ...

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    // Prepare the response
    // $response = ['message' => 'Request processed successfully'];
    // $response = $_POST;
    $response = $data;

    // Set the appropriate response headers
    header('Content-Type: application/json');

    // Send the response
    // echo json_encode($response);


    $data = Array (
               "text" => $data->text,
               "user_id" => 1,
               "status" => 1,
    );


// $id = $db->insert ('massages', $data);
}


