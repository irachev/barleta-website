<?php
header("Content-Type: text/html;charset=UTF-8");
$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
?>

<?php include 'dashboard_template.php'; ?>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<div class="main-div sales-order">

<h3 class="list-products">View Orders</h3>
<div class="center-div-view">
    <div class="table-responsive">
        <table>
            <thead>
            <tr>
                <!--                     <th>id</th>-->
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Product name</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Price</th>

            </tr>
            </thead>
            <tbody>
            <?php $get_users_cart = "SELECT * FROM order_user";
            $run_user = mysqli_query($con, $get_users_cart);
            while($row_user = mysqli_fetch_array($run_user)) { ?>

            <?php
            $get_products_cart_for_user = "SELECT * FROM sales_order WHERE user_id = ".$row_user['id'];
            $run_product = mysqli_query($con, $get_products_cart_for_user);
            $totalPriceForCurrUser = 0;
            while($row_product = mysqli_fetch_array($run_product)) { ?>
                <tr>
                    <td><?= $row_user['full_name']; ?></td>
                    <td><?= $row_user['email']; ?></td>
                    <td><?= $row_user['phone']; ?></td>
                    <td><?= $row_user['address']; ?></td>
                    <td><?= $row_product['order_name']; ?></td>
                    <td><?= $row_product['qty']; ?></td>
                    <td><img src=/<?= $row_product['order_image']; ?> width="30" height="30"</td>
                    <td><?= $row_product['single_price']; ?> лв.</td>

                </tr>
                <?php
                    $prodPriceWithQty = $row_product['single_price'] * $row_product['qty'];
                    $totalPriceForCurrUser+=$prodPriceWithQty;
                ?>
            <?php } ?>
                <tr>
                    <td colspan="8">
                        <b>Total: <?= $totalPriceForCurrUser.'лв.'; ?></b>
                    </td>
                </tr>
            <?php } ?>


                <?php



            ?>

            </tbody>
        </table>
    </div>
</div>
</div>




