<?php

class seatsController {

    public function __construct()
    {
        include('models/seatsModel.php');
    }
    public function create()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $hall = $_POST['hall'];
            $is_booked = $_POST['is_booked'];
            $seats = new seats;
            $seats->Creatseats($hall,$is_booked);
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function isFull()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $id = $_POST['id'];
            $seats = new seats;
            $seats->isFull($id);
            $data = [
                'status' => 200,
                'message' => 'good',
                ];
                echo json_encode($data);
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function rand()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "GET"){
            $seats = new seats;
            $seats->rand();
            $data = [
                'status' => 200,
                'message' => 'good',
                ];
                echo json_encode($data);
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function getAll()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: GET');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "GET"){
            $seats = new seats;
            $seatsList = $seats->getseats();
            echo $seatsList;
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function getSingle()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $id = $_POST['id'];
            $seats = new seats;
            $seatssList = $seats->getSingle($id);
            echo $seatssList;
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function update()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $id = $_POST['id'];
            $hall = isset($_POST["hall"]) ? $_POST["hall"] : null;
            $is_booked = isset($_POST["is_booked"]) ? $_POST["is_booked"] : null;
            $seats = new seats;
            $seats->updateseats($id,$hall,$is_booked);
            echo " seats updated";
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function book()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $id = $_POST['id'];
            $is_booked = $_POST["is_booked"];
            $costumer = $_POST['costumer'];
            $seat = $_POST['seat'];
            $date = $_POST['date'];
            $hall = $_POST['hall'];
            $seats = new seats;
            $seats->bookseat($id,$is_booked);
            $seats->createReservation($costumer,$seat,$hall,$date);
            $data = [
                'message' => "success",
                ];
            echo json_encode($data);
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
    public function delete()
    {
        header('Access-Control-Allow-Origin:*');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Method: POST');
        header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorisation');
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if($requestMethod == "POST"){
            $id = $_POST['id'];
            $seats = new seats;
            $seats->deleteseats($id);
            echo " seats deleted in id= ".$id;
        }else{
            $data = [
            'status' => 405,
            'message' => $requestMethod. 'Method Not Allowed',
            ];
            header("HTTP/1.0 405 Method Not Allowed");
            echo json_encode($data);
        }
    }
}        