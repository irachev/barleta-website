<?php
include 'dashboard_template.php';

$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
if($con) {
    echo "";
}else{
    echo "no connection";
}

?>
<html>
<body>

<div class="main-div list-of-products">

    <h3 class="list-products">2) List of products</h3>
    <div class="center-div-view">
        <div class="table-responsive">
             <table>
                 <thead>
                 <tr>
<!--                     <th>id</th>-->
                     <th>Product_name</th>
                     <th>Product_description</th>
                     <th>Product_price</th>
                     <th>Product_image1</th>
                     <th>Product_image2</th>
<!--                     <th>Category</th>-->
                     <th colspan="2">Actions</th>
                 </tr>
                 </thead>
                 <tbody>
                 <?php

                 $selectquery = "SELECT * FROM products ";

                 $query = mysqli_query($con, $selectquery);
                 $nums = mysqli_num_rows($query);

                 while($res = mysqli_fetch_array($query)) {
                     $getCategoryName = "SELECT * FROM categories WHERE category_id = ".$res['category_id'];
                     $queryCategory = mysqli_query($con, $getCategoryName);
                     $resCategoryQuery = mysqli_fetch_array($queryCategory);
                 ?>

                     <tr>
<!--                     <td>--><?php //echo $res['product_id']; ?><!--</td>-->
                      <td><?= $res['product_name']; ?></td>
                      <td><?= $res['product_description']; ?></td>
                      <td><?= $res['product_price']; ?>лв.</td>
                      <td><img src ="imagesAdmin/<?=$res['product_img1']; ?>" width="100" height="100"></td>
                      <td><img src ="imagesAdmin/<?=$res['product_img2']; ?>" width="100" height="100"></td>
<!--                         <td>--><?//= $resCategoryQuery['category_id']; ?><!--</td>-->
                         <td><a href="edit.php?ids=<?php echo $res['product_id']; ?>" data-toogle="tooltip" data-placement="bottom" title="Edit"<i class="fa fa-edit" aria-hidden="true" style="font-size:24px"></i></a></td>
                         <td><a href="delete.php?idth=<?php echo $res['product_id']; ?>" data-toogle="tooltip" data-placement="bottom" title="Delete"<i class="fa fa-trash" aria-hidden="true" style="font-size:24px"></i></a></td>
                     </tr>

                <?php
                 }


                 ?>

                 </tbody>
             </table>
    </div>
    </div>
</div>

<script language='javascript'>
    $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    });
</scirpt>


</body>
</html>
