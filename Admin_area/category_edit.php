<?php
session_start();

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "";
}else{
    echo "no connection";
}



$id = $_GET['id'];
$parentId = $_GET['parent_id'];

$category_name = $_POST['category_name'];
$category_parent_id = $_POST['category_parent_id'];
$query = "UPDATE categories SET category_name='".$category_name."'  WHERE category_id=".$id;
$query = "UPDATE categories SET parent_id='".$category_parent_id."'  WHERE category_id=".$id;

mysqli_query($con, $query);

header("location:view_categories.php");