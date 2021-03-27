<?php
header("Content-type: application/json");

$servername = "localhost";
$username = "root";
$password = "luZ5GZDNC0Y4d4cW";
$dbname = "barleta";

$db = new mysqli($servername, $username, $password, $dbname);

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

$fullName = $_POST['name'];
$mail = $_POST['replyto'];
$phone = $_POST['gsm'];
$address = $_POST['country'].', '.$_POST['city'].', '.$_POST['address'];
$totalPrice = $_POST['total_price'];
$typesProducts = json_decode($_POST['product-carts'], true);

mysqli_query($db,"INSERT INTO cart_user (full_name, email, phone, address) VALUES ('".$fullName."', '".$mail."', '".$phone."', '".$address."')");

$userId = $db->insert_id;

if (count($typesProducts) > 0) {
    foreach($typesProducts as $keyType => $type) {
        if (count($type) > 0) {
            foreach($type as $prod) {
                mysqli_query($db,"INSERT INTO sales_order (card_name, qty, card_image, single_price, user_id, product_type) VALUES ('".$prod['name']."', '".$prod['quantity']."', '".$prod['image']."', '".$prod['price']."', '".$userId."', '".$keyType."')");
            }
        }
    }
}

mysqli_close($db);

header("Location: http://localhost.com/after.php");
exit();

?>



