<?php
require("connection.php");
class user
{
    function getuser()
    {
        $test = new connection;
        $con = $test->connection();
        $response = array();
        if ($con) {
            $sql = "SELECT * FROM `users`";
            $result = mysqli_query($con, $sql);
            if ($result) {
                $x = 0;
                while ($row = mysqli_fetch_assoc($result)) {
                    $response[$x]['id'] = $row['id'];
                    $response[$x]['identifier'] = $row['identifier'];
                    $response[$x]['fullName'] = $row['full_name'];
                    $response[$x]['email'] = $row['email'];
                    $response[$x]['password'] = $row['password'];
                    $response[$x]['role'] = $row['role'];
                    $x++;
                }
                return json_encode($response, JSON_PRETTY_PRINT);
            }
        }
    }
    function getSingle($id)
    {
        $test = new connection;
        $con = $test->connection();
        $response = array();
        if ($con) {
            $sql = "SELECT * FROM `users` WHERE id = $id";
            $result = mysqli_query($con, $sql);
            if ($result) {
                $x = 0;
                while ($row = mysqli_fetch_assoc($result)) {
                    $response[$x]['id'] = $row['id'];
                    $response[$x]['identifier'] = $row['identifier'];
                    $response[$x]['fullName'] = $row['full_name'];
                    $response[$x]['email'] = $row['email'];
                    $response[$x]['password'] = $row['password'];
                    $response[$x]['role'] = $row['role'];
                    $x++;
                }
                return json_encode($response, JSON_PRETTY_PRINT);
            }
        }
    }
    function creatuser($fullname, $identifier, $email, $password, $role)
    {
        $test = new connection;
        $conn = $test->connection();

        if ($conn->connect_error) {
            die('conection failed :' . $conn->connect_error);
            echo "error";
        } else {
            $sql = "INSERT INTO `users` (`identifier`,`full_name`,`email`, `password`,`role`) VALUES (?,?,?,?,?)";
            $resultat = $conn->prepare($sql);
            $resultat->bind_param("sssss", $identifier, $fullname, $email, $password, $role);
            $resultat->execute();
            echo "Success:";
        }
    }
    function updateUser($id, $fullname, $email, $password, $role)
    {
        $test = new connection;
        $conn = $test->connection();
        $sql = "UPDATE `users` SET `full_name` = '$fullname', `email` = '$email', `password` = '$password' , `role` = '$role'  WHERE `users`.`id` = $id;";
        if ($conn->connect_error) {
            die('conection failed :' . $conn->connect_error);
            echo "error";
        } else {
            $resultat = $conn->prepare($sql);
            $resultat->execute();
            echo "Success:";
        }
    }
    function deleteUser($id)
    {
        $test = new connection;
        $conn = $test->connection();
        if ($conn->connect_error) {
            die('conection failed :' . $conn->connect_error);
            echo "error";
        } else {
            $sql = "DELETE FROM `users` WHERE `users`.`id` = ?";
            $resultat = $conn->prepare($sql);
            $resultat->bind_param("d", $id);
            $resultat->execute();
            echo "Success:";
        }
    }
}
