<?php



// use Firebase\JWT\JWT;

use Firebase\JWT\JWT;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('phpmailer/src/Exception.php');
require_once('phpmailer/src/PHPMailer.php');
require_once('phpmailer/src/SMTP.php');

class Users extends Controller implements helpers
{
    private $user;

    function __construct()
    {
        $this->user = $this->model('User');
    }

    public function getToken($data)
    {
        $key = 'vDoWNVvoLBuil_L6v3vWDm4AwQz86v1vdyYudqDPPeKJwFaXL-Nie';
        $jwt = JWT::encode($data, $key, 'HS256');
        return $jwt;
    }

    function login()
    {
        $token = $_POST['token'];
        $feedback = $this->user->login($token);
        echo json_encode($feedback);
    }

    function register()
    {
        $success = 'check your email';
        $data = [
            'nom' => $_POST['nom'],
            'email' => $_POST['email']
        ];
        $token = $this->getToken($data);
        $this->user->register($token, $data['nom'], $data['email']);
        $email = new PHPMailer(true);
        $email->isSMTP();
        $email->Host = 'smtp.gmail.com';
        $email->SMTPAuth = true;
        $email->Username = 'elbak.hamza.2018@gmail.com';
        $email->Password = 'vrjxgmehzbitrhfj';
        $email->SMTPSecure = 'ssl';
        $email->Port = 465;
        $email->setFrom('elbak.hamza.2018@gmail.com');
        $email->addAddress($data['email']);
        $email->Subject = 'Your Referance';
        $email->Body = 'Your Referance :   {' . $token . '}';
        $email->send();
        return $success;
    }
}
