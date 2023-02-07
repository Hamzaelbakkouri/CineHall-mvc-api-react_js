<?php
class core
{
    public function __construct()
    {
        include("controllers/UserC.php");
        include("controllers/hallsC.php");
        include("controllers/reservationsC.php");
        include("controllers/moviesC.php");

        if (isset($_GET['page'])) {
            switch ($_GET['page']) {
                case 'getSingleUser':
                    $getone = new UserC;
                    $getone->getSingle();
                    break;
                case 'getUser':
                    $get = new UserC;
                    $get->getAll();
                    break;
                case 'createUser':
                    $create = new UserC;
                    $create->create();
                    break;
                case 'deleteUser':
                    $delete = new UserC;
                    $delete->delete();
                    break;
                case 'updateUser':
                    $update = new UserC;
                    $update->update();
                    break;
                case 'getHall':
                    $get = new hallsC;
                    $get->getAll();
                    break;
                case 'getSingleHall':
                    $getone = new hallsC;
                    $getone->getSingle();
                    break;
                case 'createHall':
                    $create = new hallsC;
                    $create->create();
                    break;
                case 'deleteHall':
                    $delete = new hallsC;
                    $delete->delete();
                    break;
                case 'updateHall':
                    $update = new hallsC;
                    $update->update();
                    break;
                case 'getReservation':
                    $get = new reservationsC;
                    $get->getAll();
                    break;
                case 'getSingleReservation':
                    $getone = new reservationsC;
                    $getone->getSingle();
                    break;
                case 'createReservation':
                    $create = new reservationsC;
                    $create->create();
                    break;
                case 'deleteReservation':
                    $delete = new reservationsC;
                    $delete->delete();
                    break;
                case 'updateReservation':
                    $update = new reservationsC;
                    $update->update();
                    break;
                case 'getmovie':
                    $get = new moviesC;
                    $get->getAll();
                    break;
                case 'getSinglemovie':
                    $getone = new moviesC;
                    $getone->getSingle();
                    break;
                case 'createmovie':
                    $create = new moviesC;
                    $create->create();
                    break;
                case 'deletemovie':
                    $delete = new moviesC;
                    $delete->delete();
                    break;
                case 'updatemovie':
                    $update = new moviesC;
                    $update->update();
                    break;
                default:
                    echo "Please choose a valide requeste";
                    break;
            }
        }
    }
}
