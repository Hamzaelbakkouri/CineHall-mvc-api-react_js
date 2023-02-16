<?php



// use Firebase\JWT\JWT;

class Users extends Controller implements helpers {
    private $user;

    function __construct()
    {
        $this->user=$this->model('User');
    }

    public function getToken($data)
    {
        $hach = md5(rand(1,999),$data,'HS256');
        return $hach;
    }

    function login()
    {
        $token=$_POST['token'];
        $feedback=$this->user->login($token);
        echo json_encode($feedback);
    }

    function register(){
        $data=[
            'nom'=>$_POST['nom'],
            'email'=>$_POST['email']
        ];
        $token=$this->getToken($data);
        $data=$this->user->register($token,$data['nom'],$data['email']);
        echo json_encode($data);
    }
} 