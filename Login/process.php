<?php


$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "connection successfull";
}else{
    echo "no connection";
}

$db = mysqli_select_db($con, 'barleta');

if(count($_POST) > 0){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM users where username = '$username' and password = '$password'";
    $query = mysqli_query($con, $sql);
    $row = mysqli_num_rows($query);

        if($row == 1) {
            echo "Login success";
            $_SESSION['username'] = $username;
            header ('location:http://localhost.com/Admin_area/admin_dash.php');
    }else{
            echo "Login failed";
            header('location:login.php');
        }
    }

?>