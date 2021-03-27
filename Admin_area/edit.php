<?php
include 'dashboard_template.php';
$servername = "localhost";
$username = "root";
$password = "luZ5GZDNC0Y4d4cW";
$dbname = "barleta";

$db = new mysqli($servername, $username, $password, $dbname);
//$con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');

?>


    <?php



    if(count($_GET) > 0) {
        $currentProductId = $_GET['ids'];


        $currProduct = "SELECT * FROM products WHERE product_id='$currentProductId'";
        $result = $db->query($currProduct);

        if($result->num_rows > 0) {
            $row = $result->fetch_assoc();

        }
    }

    ?>



<html>

<body>
<?php if($row) { ?>
    <div class="container register">
        <div class="row">
            <div class="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                <h3>Welcome</h3>


            </div>
            <div class="col-md-9 register-right">
                <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="register-heading">Edit Product</h3>
                        <div class="row-center register-form">
                            <div class="col-md-6">
                                <form method="post" action="view_products.php?action=update&productId=<?= $row['product_id']; ?>&productImg1=<?= $row['product_img1'] ?>&productImg2=<?= $row['product_img2'] ?>" enctype="multipart/form-data">

                                <div class="form-group">
                                    <input type ="text" name ="product_name"  placeholder="Product name" value="<?= $row['product_name']; ?>" class="form-control"/>

                                </div>
                                    <div class="form-group">
                                        <label>Product Category</label>
                                        <select class="form-control form-control-category" name ="category_id">
                                            <option>Select a Category</option>
                                            <?php
                                            $get_categories = "SELECT * FROM categories WHERE category_id != ".$row['category_id'];
                                            $run_categories = mysqli_query($db, $get_categories);
                                            while($row_categories = mysqli_fetch_array($run_categories)) {

                                                $category_id = $row_categories['category_id'];
                                                $category_name = $row_categories['category_name'];

                                                if ($row['product_category'] === $category_id) {
                                                    echo "<option selected value = '$category_id'>$category_name</option>";
                                                } else {
                                                    echo "<option value = '$category_id'>$category_name</option>";
                                                }
                                            }

                                            ?>
                                        </select>
                                    </div>
                                <div class="form-group">
                                    <img src="imagesAdmin/<?= $row['product_img1']; ?>" width="30" height="30" />
                                    <input type ="file" name ="product_img1" placeholder="Product image" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <img src="imagesAdmin/<?= $row['product_img2']; ?>" width="30" height="30" />
                                    <input type ="file" name ="product_img2" placeholder="Product image" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <input type ="text" name = "product_price" placeholder="Product price" value="<?= $row['product_price']; ?>" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <textarea name="product_description" cols="35" rows="10" placeholder="Product description" class="form-control"><?= $row['product_description']; ?></textarea>
                                </div>
                                <input type="submit" class="btnRegister"  value="Submit"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<?php } ?>

</body>
</html>



