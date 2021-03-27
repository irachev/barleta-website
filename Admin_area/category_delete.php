<?php
session_start();

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "";
}else{
    echo "no connection";
}

$id = $_GET['id'];
$get_categories = "SELECT * FROM categories WHERE category_id = ".$id;
$run_categories = mysqli_query($con, $get_categories);
$allCategoryIds = '';
while($del_category = mysqli_fetch_array($run_categories)) {
    $allCategoryIds = recursiveDel($del_category['category_id'], $con, $del_category['category_id']);
}

function recursiveDel($categId, $con, &$categoryIds) {
    $get_next_categories = "SELECT * FROM categories WHERE parent_id = ".$categId;
    $run_next_categories = mysqli_query($con, $get_next_categories);
    $result = mysqli_num_rows($run_next_categories);
    if ($result > 0) {
        while($del_next_category = mysqli_fetch_array($run_next_categories)) {
            $categoryIds .= ', '.$del_next_category['category_id'];
            recursiveDel($del_next_category['category_id'], $con, $categoryIds);
        }
    }

    return $categoryIds;
}

$query = "DELETE FROM categories WHERE category_id IN (".$allCategoryIds.")";
mysqli_query($con, $query);

header("location:view_categories.php");






?>