<?php


$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "";
}else{
    echo "no connection";
}

?>

<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Dashboard</title>

    <!-- Custom fonts for this template-->


    <!-- Custom styles for this template-->


    <link rel = "stylesheet" href="styles.css" media = "all"/>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link href="/bootstrap/css/bootstrap.min.css">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<!--    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">-->
    <link rel ="stylesheet" href="styles.css" media = "all"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('body .del-submit').on('click', function () {
                $(this).closest('form').submit();
            });
            $('body .edit-form').on('click', function () {
                if ($(this).parents('form').find('.form-edit-html').is(':visible')) {
                    $(this).parents('form').find('.form-edit-html').hide();
                } else {
                    $(this).parents('form').find('.form-edit-html').show();
                }
            });
            $('body .category-main').on('change', function() {
                $('body .category-sub option').hide();

                var categoryValue = $(this).val();
                $.each($('body .category-sub option'), function(key, value) {
                    if(typeof $(value).attr('data-category-id') !== 'undefined' && $(value).attr('data-category-id').split(', ').includes(categoryValue)) {
                        $(value).show();
                    }
                });
                if(categoryValue === '') {
                    $('body .category-sub option').show();
                }
            });
        });
    </script>
</head>
<body>
<input type="checkbox" id="check">
<header>
    <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
    </label>
    <div class="left-area">
<!--        <h3>Barleta.<span>net</span></h3>-->
    </div>

    <div class="right-area">
        <a href="/Login/login.php" class="logout_btn">Logout</a>
    </div>
</header>
<div class="sidebar">
    <center>
        <img src="/Admin_area/imagesAdmin/imagesAdminPanel/viber_image_2020-10-13_16-39-43.jpg" width="100" height="100" class="profile_image" alt="">
        <h4>Ionko Rachev</h4>
    </center>

    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">


        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-plus"></i><span class="admin-products">Products</span><i class="fas fa-angle-down"></i></div>
    </a>
    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#insert">
        <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="insert_product.php"><i class="fas fa-pencil-alt"></i><span>Insert Product</span></a>
            <a class="nav-link" href="view_products.php"><i class="fas fa-binoculars"></i><span>View Product</span></a>
        </nav>
    </div><br>

    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="collapseLayouts">


        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-plus"></i><span class="admin-products">Categories</span><i class="fas fa-angle-down"></i></div>
    </a>
    <div class="collapse" id="category" aria-labelledby="headingOne" data-parent="#view_category">
        <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="view_categories.php"><i class="fas fa-pencil-alt"></i><i class="fas fa-binoculars"></i><span>Add Categories</span></a>

        </nav>
    </div><br>

    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse-orders" aria-expanded="false" aria-controls="collapseLayouts">


        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-plus"></i><span class="admin-products">Orders</span><i class="fas fa-angle-down"></i></div>
    </a>
    <div class="collapse" id="collapse-orders" aria-labelledby="headingOne" data-parent="#view_orders">
        <nav class="sb-sidenav-menu-nested nav">
            <a class="nav-link" href="sales_order.php"><i class="fas fa-binoculars"></i><span>View Orders</span></a>

        </nav>
    </div>

</div>

<!--<div class="content">-->
<!---->
<!--</div>-->

</body>
</html>