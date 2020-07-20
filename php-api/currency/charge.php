<?php
/*
	header('Access-Control-Allow-Origin: https://www.paymix.pro');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Max-Age: 86400');
	header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
*/

	include_once '../db.php';
	include_once '../currency.php';
	$database = new Database();
	$db = $database->getConnection();
	$curr = new Currency($db);
	$data = json_decode(file_get_contents("php://input"));
	$ERR=1;
	foreach ($data as $item){
		$curr->id = $item->id;
		$curr->charge = $item->charge;
		if($curr->setCharge()){
			$ERR=0;		
		}else{
			$ERR=1;
		}
	}
	if($ERR==1){
		http_response_code(503);
		echo json_encode(array("message" => "Unable to save record."));
	}else{
		http_response_code(201);
		echo json_encode(array("message" => "Record was saved."));
	}
?>