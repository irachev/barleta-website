<?php
session_start();

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {

}else{
    echo "no connection";
}
?>
<?php
if(!empty($_POST)) {
    extract($_POST);
    $_SESSION['error'] = array();

}

if($_POST && $_POST['category_name'] === '') {

$_SESSION['error'] [] = "Please enter Category Name";

    header("location:view_categories.php");
} else{
$parentId = 0;
if ($_POST['parent_id']) {
    $parentId = $_POST['parent_id'];
}
$query = "INSERT INTO categories (category_name, parent_id) VALUES ('".$_POST['category_name']."', '".$parentId."')";


mysqli_query($con, $query);

$_SESSION['Done'];
header("location:view_categories.php");
}


//Parent categories//
?>





