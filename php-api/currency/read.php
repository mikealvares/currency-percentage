<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include_once '../db.php';
    include_once '../currency.php';
    $database = new Database();
    $db = $database->getConnection();
    $curr = new Currency($db);
    $res = $curr->getValues();
    $num = $res->rowCount();
    if($num>0){
        $curr_arr=array();
        $curr_arr["date"]="";
        $curr_arr["data"]=array();
        while ($row = $res->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $curr_item=array(
                "id" => $id,
                "currency_name" => $currency_name ,
                "currency_iso3" => $currency_iso3,
                "charge" => $charge,
                "pos" => $pos
            );
            $curr_arr["date"] = $udt;
            array_push($curr_arr["data"], $curr_item);
        }
        http_response_code(200);
        echo json_encode($curr_arr);
    }else{
        http_response_code(404);
        echo json_encode(array("message" => "No records found."));
    }