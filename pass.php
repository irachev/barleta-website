<?php include 'all.php'; ?>
<body>

    <h1 class="display-4">Поръчка</h1>
<div class="container-product">
    <div class="row">
        <div class="col-xl-9 col-lg-10 mx-auto">
            <div class="all-row-product">

                <div class="row row-fix-image get-product-cart coffee-local">
                    <div class="col-md-3">

                        <span class="name-order">Поръчка без регистрация</span>
                        <form action ="https://formspree.io/ionko.rachev@abv.bg" method="POST">
                        <form action="https://www.w3schools.com/action_page.php">
                            <form class="build-order">
                                <form id="contact-form">
                            <label for="fname"><i class="fa fa-user"></i> Трите имена</label><em>*</em><br>
                            <input type="text" id="inputName" name="name" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="email"><i class="fa fa-envelope"></i> Email адрес</label><em>*</em><br>
                            <input type="email" id="inputEmail"  class="emailRequest" name="_replyto" placeholder="" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" oninvalid="this.setCustomValidity('Моля въведете правилен формат')" oninput="this.setCustomValidity('')"><br>
                            <label for="adr"><i class="fa fa-address-card-o"></i> Адрес</label><em>*</em><br>
                            <input type="text" id="adr" name="address" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="city"><i class="fa fa-institution"></i> Град</label><em>*</em><br>
                            <input type="text" id="city" name="city" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="country"><i class="fa fa-flag"></i> Държава</label><em>*</em><br>
                            <input type="text" id="country" name="country" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="post-code"><i class="fa fa-address-card"></i> Пощенски код</label><em>*</em><br>
                            <input type="number" id="post-code" name="post-code" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                            <label for="gsm"><i class="fa fa-mobile-phone"></i> Телефон</label><em>*</em><br>
                            <input type="number" id="inputPhone" name="gsm" placeholder="" required oninvalid="this.setCustomValidity('Моля попълнете това поле')" oninput="this.setCustomValidity('')"><br>
                                    <input type="hidden" name="_language" value="bg" />
                    </div>

                    <div class="col-md-6">
                        <div class="order-layout-text">
                            <span class="way-order">Начин на доставка</span>
                            <span class="way-order-price">&#10004 Доставка до адрес 4,67 лв.</span>
                            <span class="way-order-price">&#10004 Доставките се извършват с куриерска фирма Eконт.</span>
                            <span class="way-order-price">&#10004 Поръчка над 50 лв. е за сметка на фирма Барлета.</span>
                            <span class="way-order-price">&#10004 Плащането на поръчките могат да се извършат само с наложен платеж</span>

                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="right review-menu-block">
                            <span class="way-order" id="client-final-order">Дължима сума</span>
                        <a href="#" class="fa fa-shopping-cart" data-toggle="dropdown" role="button"
                           aria-expanded="false"></a>
                            <input class="value" id="inputID" name="price" value="" readonly><span> лв.</span>
                            <input class="text" id="inputNameEmail" name="products" value="" readonly>
<!--                            <input class="value" id="inputQuantityEmail" name="quantity of products" value="" readonly>-->
                        </div>
                    </div>
                    <div class="container">
                    <div class="row button-order-final">
                        <div class="final-order-price">

                            <button class="btn btn-primary coffee-bio" value="Send"><i class="icofont-coffee-cup"
                                                                          aria-hidden="true"></i>Поръчайте
                            </button>

                        </div>

                    </div>
                    </div>
                    </form>
                    </form>
                    </form>
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
</body>


<script>
    $(document).ready(function () {

        let finalPrice = localStorage.getItem('finalPrice')
        let finalName = localStorage.getItem('finalName')
        let finalQuantity = localStorage.getItem('finalQuantity')

        $('#inputID').val(parseFloat(finalPrice));
        $('#inputNameEmail').val(finalName);
        // $('#inputQuantityEmail').val(finalQuantity);

    })

</script>