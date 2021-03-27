<?php
//session_start();
//
//$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
//if($con) {
//    echo "connection successfull";
//}else{
//    echo "no connection";
//}
//
//?>
<!---->
<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!---->
<!--<head>-->
<!---->
<!--    <meta charset="utf-8">-->
<!--    <meta http-equiv="X-UA-Compatible" content="IE=edge">-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">-->
<!--    <meta name="description" content="">-->
<!--    <meta name="author" content="">-->
<!---->
<!--    <title>SB Admin 2 - Dashboard</title>-->
<!---->
<!--    <!-- Custom fonts for this template-->-->
<!---->
<!---->
<!--    <!-- Custom styles for this template-->-->
<!---->
<!--    <link rel = "stylesheet" href="templateAdmin/css/sb-admin-2.min.css" media = "all"/>-->
<!--    <link rel = "stylesheet" href="styles.css" media = "all"/>-->
<!--    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">-->
<!--    <link href="/bootstrap/css/bootstrap.min.css">-->
<!--    <link rel ="stylesheet" href="styles.css" media = "all"/>-->
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
<!--   -->
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">-->
<!--    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>-->
<!--    <script>-->
<!--        $(document).ready(function() {-->
<!--            $('body .del-submit').on('click', function () {-->
<!--                $(this).closest('form').submit();-->
<!--            });-->
<!--            $('body .edit-form').on('click', function () {-->
<!--                if ($(this).parents('form').find('.form-edit-html').is(':visible')) {-->
<!--                    $(this).parents('form').find('.form-edit-html').hide();-->
<!--                } else {-->
<!--                    $(this).parents('form').find('.form-edit-html').show();-->
<!--                }-->
<!--            });-->
<!--            $('body .category-main').on('change', function() {-->
<!--                $('body .category-sub option').hide();-->
<!---->
<!--                var categoryValue = $(this).val();-->
<!--                $.each($('body .category-sub option'), function(key, value) {-->
<!--                    if(typeof $(value).attr('data-category-id') !== 'undefined' && $(value).attr('data-category-id').split(', ').includes(categoryValue)) {-->
<!--                        $(value).show();-->
<!--                    }-->
<!--                });-->
<!--                if(categoryValue === '') {-->
<!--                    $('body .category-sub option').show();-->
<!--                }-->
<!--            });-->
<!--        });-->
<!--    </script>-->
<!--</head>-->
<!---->
<!--<body id="page-top">-->
<!---->
<!--<!-- Page Wrapper -->-->
<!--<div id="wrapper">-->
<!--    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">-->
<!--        <hr class="sidebar-divider my-0">-->
<!--        <li class="nav-item dropdown no-arrow">-->
<!--            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"-->
<!--               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><span class="settings-color-name">Ionko Rachev</span>-->
<!--                <img src="/Admin_area/imagesAdmin/imagesAdminPanel/viber_image_2020-10-13_16-39-43.jpg" class="admin-img-panel" height="50"-->
<!--                     width="50"/>-->
<!--            </a>-->
<!--        <hr class="sidebar-divider">-->
<!---->
<!---->
<!--<!--            <div class="dropdown">-->-->
<!--<!--            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->-->
<!--<!--                Dropdown button-->-->
<!--<!--            </button>-->-->
<!--<!--                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->-->
<!--<!--                        <a class="dropdown-item" href="insert_product.php"><i class="fas fa-cogs"></i><span>Insert Product</span></a>-->-->
<!--<!--                        <a class="dropdown-item" href="edit.php"><i class="fas fa-cogs"></i><span>Edit Product</span></a>-->-->
<!--<!--                        <a class="dropdown-item" href="view_products.php"><i class="fas fa-cogs"></i><span>View Products</span></a>-->-->
<!--<!---->-->
<!--<!--                    </div>-->-->
<!--<!--                </div>-->-->
<!---->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link collapsed" href="insert_product.php" data-toggle="collapse" data-target="#collapseUtilities"-->
<!--               aria-expanded="true" aria-controls="collapseUtilities">-->
<!---->
<!---->
<!--                <div class="name-img-admin-panel">-->
<!--                    <i class="fa fas-plus"></i><span class="name-admin">Insert Products</span>-->
<!--<!--                    <img src="/Admin_area/imagesAdmin/imagesAdminPanel/insert-pngrepo-com.png" class="icon-admin-panel" height="25"-->-->
<!--<!--                         width="25"/>-->-->
<!--                </div>-->
<!--            </a>-->
<!---->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link collapsed" href="ind.php" data-toggle="collapse" data-target="#collapseUtilities"-->
<!--               aria-expanded="true" aria-controls="collapseUtilities">-->
<!---->
<!--                <div class="name-img-admin-panel">-->
<!--                    <span class="name-admin-view">View Products</span>-->
<!--                    <!--                    <img src="/Admin_area/imagesAdmin/imagesAdminPanel/view-icon-png-20.jpg" class="icon-admin-panel" height="25"-->-->
<!--                    <!--                         width="25"/>-->-->
<!--                </div>-->
<!--            </a>-->
<!--            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"-->
<!--                 data-parent="#accordionSidebar">-->
<!--                <div class="bg-white py-2 collapse-inner rounded">-->
<!---->
<!--                </div>-->
<!---->
<!--            </div>-->
<!---->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link collapsed" href="view_categories.php" data-toggle="collapse" data-target="#collapseUtilities"-->
<!--               aria-expanded="true" aria-controls="collapseUtilities">-->
<!---->
<!---->
<!--                <div class="name-img-admin-panel">-->
<!--                    <span class="name-admin">View Categories</span>-->
<!--<!--                    <img src="/Admin_area/imagesAdmin/imagesAdminPanel/view-icon-png-20.jpg" class="icon-admin-panel" height="25"-->-->
<!--<!--                         width="25"/>-->-->
<!--                </div>-->
<!--            </a>-->
<!---->
<!--        </li>-->
<!---->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link collapsed" href="sales_order.php" data-toggle="collapse" data-target="#collapseUtilities"-->
<!--               aria-expanded="true" aria-controls="collapseUtilities">-->
<!--                <div class="name-img-admin-panel">-->
<!--                    <span class="name-admin">View Orders</span>-->
<!--<!--                    <img src="/Admin_area/imagesAdmin/imagesAdminPanel/png-clipart-computer-icons-purchase-order-sales-order-bill-icon-text-service.png" class="icon-admin-panel" height="25"-->-->
<!--<!--                         width="25"/>-->-->
<!--                </div>-->
<!---->
<!---->
<!--            </a>-->
<!---->
<!--        </li>-->
<!---->
<!---->
<!--    </ul>-->
<!--</body>-->
<!--</html>-->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
