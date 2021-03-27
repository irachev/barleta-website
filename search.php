<head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
           $('.search-product-item').on('keyup', function () {
               var searchVal = $(this).val().toLowerCase();
               $('.body-content .hidden-message').text('');
               if (searchVal === '') {
                  $('.product-item').show();
                  $('.product-item').parents('.parent-div').addClass('col-md-2');
               } else {
                  $('.product-item').hide();
                  $('.product-item').parents('.parent-div').removeClass('col-md-2');
                  var countResult = 0;
                  $.each($('.product-item'), function(key, value) {
                      let productName = $(value).find('h4').attr('data-name').toLowerCase();
                      let productDescription = $(value).find('h4').attr('data-description').toLowerCase();
                      if (productName.includes(searchVal) || productDescription.includes(searchVal)) {
                          $(value).parents('.parent-div').addClass('col-md-2');
                          $(value).show();
                          countResult++;

                      }

                  });

                  if(countResult === 0) {
                      $('.body-content .hidden-message').text('Няма намерени резултати');
                  }
              }
           });
        });
    </script>
</head>
<html>
<body>
    <div class="search-box p-5">
        <label>Търси продукт: </label>
        <input class="search-product-item" type="search" name="search" placeholder="Търсене" />
    </div>
    <div class="body-content mt-5 p-5">
        <div class="row">
            <h3 class="hidden-message"></h3>
            <?php
            $con = mysqli_connect('localhost', 'root', 'luZ5GZDNC0Y4d4cW', 'barleta');

            $allProducts = "SELECT * FROM products";
            $queryProducts = mysqli_query($con, $allProducts);
            while($product = mysqli_fetch_array($queryProducts)) { ?>
                <div class="parent-div col-md-2">
                    <div class="product-item">
                        <img src ="Admin_area/imagesAdmin/<?=$product['product_img1']; ?>" width="100" height="100">
                        <h4 data-name="<?= $product['product_name'] ?>" data-description="<?= $product['product_description'] ?>"><?= $product['product_name'] ?></h4>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</body>
</html>