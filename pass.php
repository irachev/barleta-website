<html lang="en-US">

<?php include 'headerCommon.php' ?>

<body>

<?php  include 'all.php'; ?>


<h1 class="display-4"><span class="en-order">Поръчка</span></h1>
<div class="container-product">
    <div class="row">
        <div class="col-xl-9 col-lg-10 mx-auto">
            <div class="all-row-product">

                <div class="row row-fix-image get-product-cart coffee-local">
                    <div class="col-md-3">

                        <span class="name-order"><span class="en-without-order">Поръчка без регистрация</span></span>
<!--                        <form action="https://formspree.io/f/xrgoddrl" method="POST">-->
<!--                        <form action="https://www.w3schools.com/action_page.php">-->
<!--                            <form class="build-order">-->
<!--                                -->
<!--                    </form>-->
<!--                    </form>-->
<!--                    </form>-->
                        <form id="form-before-submit" action="Admin_area/shopping cart/cart_action.php" method="POST">
                            <label for="fname"><i class="fa fa-user"></i><span class="en-full-name"> Име и фамилия</span></label><em>*</em><br>
                            <input type="text" id="inputName" name="name" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="email"><i class="fa fa-envelope"></i> <span class="en-email-order">Email адрес</span></label><em>*</em><br>
                            <input type="email" id="inputEmail"  class="emailRequest" name="replyto" placeholder="" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" oninvalid="this.setCustomValidity('Моля въведете правилен формат')" oninput="this.setCustomValidity('')"><br>
                            <label for="adr"><i class="fa fa-address-card-o"></i> <span class="en-address-order">Адрес</span></label><em>*</em><br>
                            <input type="text" id="adr" name="address" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="city"><i class="fa fa-institution"></i> <span class="en-city-order">Град</span></label><em>*</em><br>
                            <input type="text" id="city" name="city" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="country"><i class="fa fa-flag"></i> <span class="en-country-order">Държава</span></label><em>*</em><br>
                            <input type="text" id="country" name="country" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
<!--                            <label for="post-code"><i class="fa fa-address-card"></i> <span class="en-zip-code-order">Пощенски код</span></label><em>*</em><br>-->
<!--                            <input type="number" id="post-code" name="post-code" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>-->
                            <label for="gsm"><i class="fa fa-mobile-phone"></i> <span class="en-phone-order">Телефон</span></label><em>*</em><br>
                            <input type="number" id="inputPhone" name="gsm" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <input id="productsCart" type="hidden" name="product-carts" value=""/>
                    </div>

                    <div class="col-md-6">
                        <div class="order-layout-text">
                            <span class="way-order way-order-mobile"><span class="en-way-delivery">Начин на доставка</span></span>
                            <span class="way-order-price">&#10004 Доставка до адрес - 5.76 лв.</span>
                            <span class="way-order-price">&#10004 Доставките се извършват с куриерска фирма Eконт</span>
                            <span class="way-order-price">&#10004 Поръчка над 100 лв. е за сметка на фирма Барлета</span>
                            <span class="way-order-price">&#10004 Плащането на поръчките могат да се извършат само с наложен платеж</span>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="right review-menu-block">
                            <span class="way-order" id="client-final-order"><span class="en-due-amount">Дължима сума</span></span>
                            <a href="#" class="fa fa-shopping-cart" data-toggle="dropdown" role="button"
                               aria-expanded="false"></a>
                            <input class="value" id="totalPrice" name="total_price" value="" readonly><span class="en-BGN">лв.</span>
                            <!--                            <input class="value" id="inputQuantityEmail" name="quantity of products" value="" readonly>-->
                        </div>
                    </div>
                    <div class="container">
                        <div class="row button-order-final">
                            <div class="final-order-price">

                                <button id="buttonSubmit" class="btn btn-primary coffee-bio coffee-bio-end-final" value="Send"><i class="icofont-coffee-cup"
                                                                                                                aria-hidden="true"></i><span class="en-button-order">Поръчайте</span>
                                </button>

                            </div>

                        </div>
                    </div>
                    </form>
                </div>

            </div>

        </div>


    </div>

</div>



<footer class="footer text-faded text-center py-5">
    <div class="footer fix-item-foot">
        <div class="container">
            <div class="container-image">


                <div class="row">
                    <div class="col-md-3">
                        <div class="foot-image">
                            <img src="images/img/open-magazine-pngrepo-com-new.png" height="25"
                                 width="25"/>
                        </div>

                        <span class="text-image-fix">Магазин за кафе<br>Барлета</span>
                    </div>


                    <div class="col-md-3">
                        <div class="foot-image">
                            <img src="images/img/delivery_address_322421-new.png" height="25"
                                 width="25"/>

                        </div>
                        <span class="text-image-fix">гр. Габрово <br>ул. Отец Паисий №12 </span>
                    </div>


                    <div class="col-md-3">
                        <div class="foot-image">
                            <img src="images/img/time-9f65eb7f70fb02e026ceae0d49bc224a-new.png" height="25" width="25"/>
                        </div>
                        <span class="text-image-fix">Понеделник - събота<br>От 08:00 до 17:30</span>
                    </div>


                    <div class="col-md-3">
                        <div class="foot-image">
                            <img src="images/img/117218057_213861383376519_4230388408880663933_n.png"
                                 height="25"
                                 width="25"/>
                        </div>
                        <span class="text-image-fix">0886 94 55 44<br>0884 23 24 24</span>

                    </div>


                </div>

            </div>

        </div>

    </div>


</footer>



<script>
    $(document).ready(function () {
        let finalPrice = localStorage.getItem('finalPrice');
        $('#totalPrice').val(finalPrice);

        $('#buttonSubmit').on('click', function(e) {
            e.preventDefault();
            let products = JSON.stringify(JSON.parse(localStorage.allProductsArray));
            let finalPrice = localStorage.getItem('finalPrice');

            $('#productsCart').val(products);
            $('#totalPrice').val(finalPrice);

            $(this).parents().find("form").submit();
        });

    })

</script>
</body>
</html>