<?php
$servername = "localhost";
$username = "root";
$password = "luZ5GZDNC0Y4d4cW";
$dbname = "barleta";

$db = new mysqli($servername, $username, $password, $dbname);
$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');

$id = $_GET['idth'];

$deletequery = "DELETE FROM products WHERE product_id=$id";


$q = mysqli_query($con, $deletequery);

if($deletequery) {
    ?>
    <script language='javascript'>
    alert("Are you sure");
</scirpt>
<?php
}
header('location:ind.php');
?>