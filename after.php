<?php


$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "";
}else{
    echo "no connection";
}
?>


<html lang="en-US">

<?php include 'headerCommon.php' ?>

<body>

<?php  include 'all.php'; ?>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {

            // localStorage.removeItem("coffee");
            // localStorage.removeItem("babyfood");
            // localStorage.removeItem("dobavki");
            // localStorage.removeItem("variva");


        });
    </script>



    <div class="check-image">
    <img src="/Admin_area/imagesAdmin/imagesAdminPanel/16-162780_check-tick-icons-png-vector-free-icons-and.png" class="icon-check" width="100" height="100" />
    </div>
    <div class="check-out-text">
    <h1 class="check-order-text">Екипа на магазин Барлета<br> Ви благодари за<br> направената от Вас поръчка</h1>
</div>

</body>





</html>
