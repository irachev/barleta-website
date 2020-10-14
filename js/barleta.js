$(document).ready(function () {

    if ($('.slideshow-container').length) {
        $('.slideshow-container').slick({
            infinite: true,
            autoplay: true,
            dots: true,
            arrows: true,
            autoplaySpeed: 4000
        });
    }

    $('.list-hours li').eq(new Date().getDay() - 1).addClass('today');


    $('a.nav-link[href="' + window.location.href.split('/').pop() + '"]').css('color', '#e6a756');
    $('page-item[href="' + window.location.href.split('/').pop() + '"]').css('color', '#e6a756');


    $('.icofont-shopping-cart').on('click', function () {
        $(".icofont-shopping-cart").attr('style', 'color:#e6a756 !important')
    });


    $('.icofont-trash').on('click', function () {
        $(this).parents('.remove-cart-trash').remove();
        swal("", "Продукта бе премахнат от количката", "warning")
        event.stopPropagation();
    });


    $('body').on('click', '.icofont-ui-close', function () {

        $(this).parent('.remove-li').remove()
        event.stopPropagation();
        swal("", "Продукта бе премахнат от количката", "warning")
        event.stopPropagation();

        let removeProductCoffee = $(this).parent('.remove-li').find('.import-name').text();
        let removeProductDobavki = $(this).parent('.remove-li').find('.import-name').text();
        let removeProductBabyfood = $(this).parent('.remove-li').find('.import-name').text();
        let removeProductVariva = $(this).parent('.remove-li').find('.import-name').text();

        let arrayDeleteCoffee = []
        let arrayDeleteDobavki = []
        let arrayDeleteBabyfood = []
        let arrayDeleteVariva = []


        let StorageCoffee = JSON.parse(window.localStorage.getItem('coffee'));
        let StorageDobavki = JSON.parse(window.localStorage.getItem('dobavki'));
        let StorageBabyfood = JSON.parse(window.localStorage.getItem('babyfood'));
        let StorageVariva = JSON.parse(window.localStorage.getItem('variva'));


        $.each(StorageCoffee, function (index, value) {


            if (value.name !== removeProductCoffee) {
                arrayDeleteCoffee.push(StorageCoffee[index])
                $('.remove-text').hide();

            }

            event.stopPropagation();
        });


        localStorage.setItem('coffee', JSON.stringify(arrayDeleteCoffee));


        $.each(StorageDobavki, function (index, value) {


            if (value.name !== removeProductDobavki) {
                arrayDeleteDobavki.push(StorageDobavki[index])
                $('.remove-text').hide();

            }
        });


        localStorage.setItem('dobavki', JSON.stringify(arrayDeleteDobavki));


        $.each(StorageBabyfood, function (index, value) {


            if (value.name !== removeProductBabyfood) {
                arrayDeleteBabyfood.push(StorageBabyfood[index])
                $('.remove-text').hide();

            }
        });

        localStorage.setItem('babyfood', JSON.stringify(arrayDeleteBabyfood));


        $.each(StorageVariva, function (index, value) {


            if (value.name !== removeProductVariva) {
                arrayDeleteVariva.push(StorageVariva[index])
                $('.remove-text').hide();
            }

        });


        localStorage.setItem('variva', JSON.stringify(arrayDeleteVariva));


        countEmptyCart()
        countProducts()


    });


    $('.wrapper-icon').on('click', function () {


        let nameProduct = $(this).parents('.get-product-cart').find('.import-name').text();
        let imageProduct = $(this).parents('.get-product-cart').find('.import-image').attr('src');
        let namePrice = $(this).parents('.get-product-cart').find('.remove-class-price').text();

        let nameQuantity = $(this).parents('.get-product-cart').find('.import-kolichestvo').prop('value');
        let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + imageProduct + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + nameProduct + '</h2><h4 class="remove-class-price">Цена: ' + namePrice + ' лв.<input type="number" class="fix-input import-kolichestvo" value=' + nameQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close"></button></li>\n'


        $(".dropdown-cart").append(html);


        countEmptyCart()
        countProducts()

    });


    let coffee = [];

    $('.local-coffee').on('click', function () {
        swal("", "Продукта е добавен в количката", "success")

        let newCoffee = {
            name: $(this).parents('.coffee-local').find('.import-name').text(),
            price: $(this).parents('.coffee-local').find('.remove-class-price').text(),
            image: $(this).parents('.coffee-local').find('.import-image').attr('src'),
            quantity: $(this).parents('.coffee-local').find('.import-kolichestvo').prop('value'),
        }

        coffee.push(newCoffee);
        localStorage.setItem('coffee', JSON.stringify(coffee));

    });


    let dobavki = [];
    $('.local-dobavki').on('click', function () {
        swal("", "Продукта е добавен в количката", "success")
        let newDobavki = {
            name: $(this).parents('.dobavki-local').find('.import-name').text(),
            price: $(this).parents('.dobavki-local').find('.remove-class-price').text(),
            image: $(this).parents('.dobavki-local').find('.import-image').attr('src'),
            quantity: $(this).parents('.dobavki-local').find('.import-kolichestvo').prop('value'),
        }

        dobavki.push(newDobavki);
        localStorage.setItem('dobavki', JSON.stringify(dobavki));

    });


    let babyfood = [];

    $('.local-baby').on('click', function () {
        swal("", "Продукта е добавен в количката", "success")

        let newBabyfood = {
            name: $(this).parents('.baby-local').find('.import-name').text(),
            price: $(this).parents('.baby-local').find('.remove-class-price').text(),
            image: $(this).parents('.baby-local').find('.import-image').attr('src'),
            quantity: $(this).parents('.baby-local').find('.import-kolichestvo').prop('value'),
        }

        babyfood.push(newBabyfood);
        localStorage.setItem('babyfood', JSON.stringify(babyfood));

    });


    let variva = [];

    $('.local-variva').on('click', function () {
        swal("", "Продукта е добавен в количката", "success")
        let newVariva = {
            name: $(this).parents('.variva-local').find('.import-name').text(),
            price: $(this).parents('.variva-local').find('.remove-class-price').text(),
            image: $(this).parents('.variva-local').find('.import-image').attr('src'),
            quantity: $(this).parents('.variva-local').find('.import-kolichestvo').prop('value'),
        }

        variva.push(newVariva);
        localStorage.setItem('variva', JSON.stringify(variva));

        countEmptyCart()
    });


    $('.save-local').on('click', function () {


        let currentName = localStorage.getItem('name');
        let currentPrice = localStorage.getItem('price');
        let currentImage = localStorage.getItem('image');
        let currentQuantity = localStorage.getItem('quantity');

        document.getElementById('#name').value = currentName;
        document.getElementById('#price').value = currentPrice;
        document.getElementById('#image').value = currentImage;
        document.getElementById('#quantity').value = currentQuantity;
        let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + currentImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + currentName + '</h2><h4 class="remove-class-price">Цена: ' + currentPrice + ' лв.</h4><input type="number" class="fix-input import-kolichestvo" value=' + currentQuantity + ' min="1" max="100" style="text-align: center"><button class="btn btn-danger icofont-ui-close"></button> </li>\n'

        $(".dropdown-cart").append(html);


    });


    function countEmptyCart() {


        if ($('.dropdown-cart li').length - 2) {


            $('.remove-text').hide()
        }
        else {
            $('.remove-text').show()
        }
    }


    function countProducts() {

        if ($('.dropdown-cart li').length > 0) {


            let count = $('.dropdown-cart li').length - 2

            $('.shopping-cart-text').text(count)

            $('.shopping-cart-text').text().length;
        }


    }

    setTimeout(function () {
        countProducts()
    }, 1500);
    setTimeout(function () {
        countEmptyCart()
    }, 3000);


    countEmptyCart()
    countProducts()


    let showChar = 500;
    let ellipsestext = "";
    let lesstext = "Покажи още";
    let moretext = "Покажи по - малко";

    $('.text-limit').each(function () {
        let content = $(this).html();

        if (content.length > showChar) {

            let c = content.substr(0, showChar);
            let h = content.substr(showChar, content.length - showChar);

            let html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });






    $('#contact-form').coffee-bio(function (e) {



        let name = document.getElementById('inputName');
        let email = document.getElementById('inputEmail');
        let phone = document.getElementById('inputPhone');
        let order = document.getElementById('inputID')

        if (!name.value || !email.value || !phone.value || !order.value) {
            alertify.error('Моля, проверете вашите записи')
        } else {
            $.ajax({
                url: "https://formspree.io/ionko.rachev@abv.bg",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            e.preventDefault()
            $(this).get(0).reset()
            alertify.success('Поръчката е изпратена')
        }





    });


})

























