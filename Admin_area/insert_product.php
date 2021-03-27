
        <?php
        include 'dashboard_template.php';


        $con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');
        if($con) {

        }else{
            echo "no connection";
        }

        ?>


        <body>
        <form method="post" action="view_products.php" enctype="multipart/form-data">
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
                            <h3 class="register-heading">Insert Product</h3>
                            <div class="row-center register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type ="text" name ="product_name"  placeholder="Product name" class="form-control"/>

                                    </div>
                                </div>
                                    <div class="form-group">
                                        <label>Product Category</label>

                                        <select class="form-control form-control-category category-main" name ="category_id">
                                            <option value="">Select a Category</option>
                                            <?php
                                            $get_categories = "SELECT * FROM categories";
                                            $run_categories = mysqli_query($con, $get_categories);
                                            while($row_categories = mysqli_fetch_array($run_categories)) {

                                                $category_id = $row_categories['category_id'];
                                                $category_name = $row_categories['category_name'];

                                                echo "<option value = '$category_id'>$category_name</option>";
                                            }

                                            ?>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <input type ="file" name ="product_img1" placeholder="Product image " class="form-control"/>

                                    </div>
                                    <div class="form-group">
                                        <input type ="file" name ="product_img2" placeholder="Product image- light box" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <input type ="number" step="any" name = "product_price" placeholder="Product price" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="product_description" cols="35" rows="10" placeholder="Product description" class="form-control"></textarea>
                                    </div>
                                    <input type="submit" class="btnRegister" name="insert-btn"  value="Submit"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </form>




        </body>
        </html>


