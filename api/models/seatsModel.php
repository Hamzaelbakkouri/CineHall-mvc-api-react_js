<?php 
require("connection.php");
    class seats {
        function getseats(){
            $test = new connection;
            $con = $test->connection();
            $response = array();
            if ($con) {
            $sql = "SELECT * FROM `seats`";
            $result = mysqli_query($con, $sql);
            if($result) {
                $x = 0;
                while ($row = mysqli_fetch_assoc($result)) {
                    $response [$x]['id'] = $row['id'];
                    $response [$x]['hall'] = $row['hall'];
                    $response [$x]['is_booked'] = $row['is_booked'];
                    $x++;
                }
                return json_encode($response, JSON_PRETTY_PRINT);
            }
            }
        }
        function getSingle($id){
            $test = new connection;
            $con = $test->connection();
            $response = array();
            if ($con) {
            $sql = "SELECT * FROM `seats` WHERE hall = $id";
            $result = mysqli_query($con, $sql);
            if($result) {
                $x = 0;
                while ($row = mysqli_fetch_assoc($result)) {
                    $response [$x]['id'] = $row['id'];
                    $response [$x]['hall'] = $row['hall'];
                    $response [$x]['is_booked'] = $row['is_booked'];
                    $x++;
                }
                return json_encode($response, JSON_PRETTY_PRINT);
            }
            }
        }
        function creatseats($hall,$is_booked){
            $test = new connection;
            $conn = $test->connection();
            
            if($conn->connect_error){
                die('conection failed :'.$conn->connect_error);
                echo "error";
                }else{
                $sql="INSERT INTO `seats` (`hall`,`is_booked`) VALUES (?,?)";
                $resultat = $conn->prepare($sql);
                $resultat->bind_param("dd",$hall,$is_booked);
                $resultat->execute() or die("Erreur lors de l'execution de la requete: ");
                echo "Success";
            }
        }
        function updateseats($id,$hall,$is_booked){
            $test = new connection;
            $conn = $test->connection();
            $sql="UPDATE `seats` SET `hall` = '$hall', `is_booked` = '$is_booked' WHERE `id` = $id ;";
            if($conn->connect_error){
               die('conection failed :'.$conn->connect_error);
               echo "error";
               }else{
                $resultat = $conn->prepare($sql);
                $resultat->execute() or die("Erreur lors de l'execution de la requete: ");
                echo "Success";
            }
        }
        function bookseat($id,$is_booked){
            $test = new connection;
            $conn = $test->connection();
            $sql="UPDATE `seats` SET `is_booked` = '$is_booked' WHERE `id` = $id ;";
            if($conn->connect_error){
               die('conection failed :'.$conn->connect_error);
               echo "error";
               }else{
                $resultat = $conn->prepare($sql);
                $resultat->execute() or die("Erreur lors de l'execution de la requete: ");
            }
        }
        function isFull($id){
            $test = new connection;
            $conn = $test->connection();
            
            if($conn->connect_error){
                die('conection failed :'.$conn->connect_error);
                echo "error";
                }else{
                $sql="SELECT COUNT(*) FROM `seats` WHERE hall = $id and is_booked = 1;";
                $resultat = mysqli_query($conn,$sql);
                $row = mysqli_fetch_assoc($resultat);
                if($row['COUNT(*)'] >= 20){
                    $sql="UPDATE `halls` SET is_full = 1 WHERE id = $id;";
                    $result = $conn->prepare($sql);
                    $result->execute() or die("Erreur lors de l'execution de la requete: ");
                }else{
                    $sql="UPDATE `halls` SET is_full = 0 WHERE id = $id;";
                    $result = $conn->prepare($sql);
                    $result->execute() or die("Erreur lors de l'execution de la requete: ");
                }
            }
        }
        function rand(){
            $test = new connection;
            $conn = $test->connection();
            
            if($conn->connect_error){
                die('conection failed :'.$conn->connect_error);
                echo "error";
                }else{
                $sql="SELECT id FROM `movies` WHERE `Mdate` = CURRENT_DATE;";
                $resultat = mysqli_query($conn,$sql);
                $i = 1;
                while($row = mysqli_fetch_assoc($resultat)){
                    $id = $row['id'];
                    if($i<=4){
                        $sql="UPDATE `halls` SET movie = $id WHERE id = $i";
                        $result = $conn->prepare($sql);
                        $result->execute() or die("Erreur lors de l'execution de la requete: ");
                    }
                    $i++;
                }
            }
        }
        function createReservation($costumer,$seat,$hall,$date){
            $test = new connection;
            $conn = $test->connection();
            
            if($conn->connect_error){
                die('conection failed :'.$conn->connect_error);
                echo "error";
                }else{
                $sql="INSERT INTO `reservations` (`costumer`,`seat`, `hall`,`date`) VALUES (?,?,?,?)";
                $resultat = $conn->prepare($sql);
                $resultat->bind_param("ddds",$costumer,$seat,$hall,$date);
                $resultat->execute() or die("Erreur lors de l'execution de la requete: ");
            }
        }
        function deleteseats($id){
            $test = new connection;
            $conn = $test->connection();
            if($conn->connect_error){
                die('conection failed :'.$conn->connect_error);
                echo "error";
            }else{
                 $sql = "DELETE FROM `seats` WHERE `seats`.`id` = ?";
                 $resultat = $conn->prepare($sql);
                 $resultat->bind_param("d",$id);
                 $resultat->execute() or die("Erreur lors de l'execution de la requete: ");
                 echo "Success:";
            }
        }
    }
?>