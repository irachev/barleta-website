
<?php

$servername = "localhost";
$username = "root";
$password = "luZ5GZDNC0Y4d4cW";
$dbname = "barleta";

$db = new mysqli($servername, $username, $password, $dbname);

//$db = mysqli_connect("localhost", "root", "luZ5GZDNC0Y4d4cW", "barleta");

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

if(count($_POST) > 0) {
    $product_name = $_POST['product_name'];
    $product_price = $_POST['product_price'];
    $product_description = $_POST['product_description'];
    $category_id = $_POST['category_id'];
    $temp_img1 = $temp_img2 = '';
    $path_filename_ext1 = $path_filename_ext2 = '';
    if(count($_FILES) > 0) {
        $temp_img1 = $_FILES['product_img1']['name'];
        $temp_img2 = $_FILES['product_img2']['name'];

        $target_dir = "imagesAdmin/";
        if($temp_img1) {
            $path1 = pathinfo($temp_img1);
            $filename1 = $path1['filename'];
            $ext1 = $path1['extension'];
            $temp_name1 = $_FILES['product_img1']['tmp_name'];
            $path_filename_ext1 = $target_dir.$filename1.".".$ext1;
        }
        if($temp_img2) {
            $path2 = pathinfo($temp_img2);
            $filename2 = $path2['filename'];
            $ext2 = $path2['extension'];
            $temp_name2 = $_FILES['product_img2']['tmp_name'];
            $path_filename_ext2 = $target_dir.$filename2.".".$ext2;
        }

        // Check if file already exists
        if (file_exists($path_filename_ext1) || file_exists($path_filename_ext2)) {

        }else{

            if($temp_img1) {
                move_uploaded_file($temp_name1,$path_filename_ext1);
            }
            if($temp_img2) {
                move_uploaded_file($temp_name2,$path_filename_ext2);
            }
            echo "File Uploaded Successfully!";
        }
    }
    if ($_GET && $_GET['action']) {
        $product_id = $_GET['productId'];
        if (!$_GET['productId']) {
            echo 'No product found';
            exit;
        }
        if (!$temp_img1) {
            if ($_GET['productImg1']) {
                $temp_img1 = $_GET['productImg1'];
            }
        }
        if (!$temp_img2) {
            if ($_GET['productImg2']) {
                $temp_img2 = $_GET['productImg2'];
            }
        }
        $action_product = "UPDATE products SET 
                    product_name='".$product_name."',
                    product_price='".$product_price."',
                    product_description='".$product_description."',
                    product_img1='".$temp_img1."',
                    product_img2='".$temp_img2."',
                    category_id='".$category_id."'
        WHERE product_id=".$product_id;
    } else {
        $action_product = "INSERT INTO products (product_name, product_img1, product_img2, product_price, product_description, category_id) VALUES ('".$product_name."', '".$temp_img1."', '".$temp_img2."', '".$product_price."', '".$product_description."', '".$category_id."')";
    }
    if ($db->query($action_product) === TRUE) {
        if ($_GET && $_GET['action'] === 'CREATE') {
            echo 'Updated succesfully product';
        } else {
//            echo "Created successfully product!";
        }
    } else {
        echo "Error: " . $action_product . "<br>" . $db->error;
    }
}

$db->close();

?>
<!--<br><br><a href="ind.php">View Products</a>-->
<?php


include "ind.php";
$_SESSION = array(); session_destroy();
?>


