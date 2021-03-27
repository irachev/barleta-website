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

    let showChar = 500;
    let ellipsestext = "";
    let lesstext = "Покажи съдържанието";
    let moretext = "Скрий съдържанието";

    $('.show-less').each(function () {


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

        $('.settings-cart-name:contains("'+$(this).parents('.remove-li').find('.import-name').text()+'")').parents('tr').remove()
        $('.settings-cart-price:contains("'+$(this).parents('.remove-li').find('.import-price').val()+'")').parents('tr').remove()

        $(this).parent('.remove-li').remove();
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
        let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + imageProduct + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + nameProduct + '</h2><h4 class="remove-class-price"><span class="en-price-two-points"> Цена: </span>' + namePrice + '<span class="en-BGN-point"> лв. </span><input type="number" class="fix-input import-kolichestvo" value=' + nameQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close red-delete-button"></button></li>\n'


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
        countEmptyCart()

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
        countEmptyCart()
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

        countEmptyCart()

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
        localStorage .setItem('variva', JSON.stringify(variva));

        countEmptyCart()
    });

    $('.and-order-text').on('click', function(e) {
        let StorageCoffee = JSON.parse(localStorage.getItem('coffee'));
        let StorageDobavki = JSON.parse(localStorage.getItem('dobavki'));
        let StorageBabyfood = JSON.parse(localStorage.getItem('babyfood'));
        let StorageVariva = JSON.parse(localStorage.getItem('variva'));


        let newObjectCombineAll = {
            'coffee' : StorageCoffee,
            'babyfood' : StorageBabyfood,
            'dobavki' : StorageDobavki,
            'variva' : StorageVariva,

        }
        localStorage.setItem('allProductsArray', JSON.stringify(newObjectCombineAll));


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
        let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + currentImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + currentName + '</h2><h4 class="remove-class-price"><span class="en-price-two-points"> Цена: </span> ' + currentPrice + ' <span class="en-BGN-point"> лв. </span></h4><input type="number" class="fix-input import-kolichestvo" value=' + currentQuantity + ' min="1" max="100" style="text-align: center"><button class="btn btn-danger icofont-ui-close red-delete-button"></button> </li>\n'

        $(".dropdown-cart").append(html);


    });




    function pushArrayProducts(){

    }

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













    $("#contact-form").click(function () {

        let name = document.getElementById('inputName');
        let email = document.getElementById('inputEmail');
        let phone = document.getElementById('inputPhone');
        let order = document.getElementById('inputID');

        if (!name.value || !email.value || !phone.value || !order.value) {
            alertify.error('Моля, проверете вашите записи')
        } else {
            $.ajax({
                url: "https://formspree.io/f/xrgoddrl",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            e.preventDefault();
            $(this).get(0).reset();
            alertify.success('Поръчката е изпратена')

        }

    });


    $('body').on('keyup', '#searchBar', function () {

        let value = $(this).val().toLowerCase();
        $(".get-product-cart").filter(function() {

            $(this).toggle($(this).find('.import-name').text().toLowerCase().indexOf(value) > -1)
        });
    });











$(function(){
        let item = [
            {

                'name' : 'Био преходна храна за кърмачета от козе мляко Формула 2, 400г',
                'price': '34.19',
                'path': 'startbootstrap-business-casual-gh-pages/img/bioproducts/babyfood/demeter-bio-detsko-koze-mlqko-formula-2-holle.png',
                'text' : '*от контролирано био производство.',
                'href' : 'image-fix/fix-babyfood/koze-mlqko-2.jpg'
            },


        ];

        item.forEach((element) => {

            let name = element['name'];
            let price = element['price'];
            let path = element['path'];
            let text = element['text'];
            let href = element['href'];

let htmlElement = ' \n  <div class="row row-fix-image get-product-cart baby-local"><div class="col-md-2"> <a class="example-image-link" href="' + href + '" data-lightbox="example-1"><img class="example-image fix-image-babyfood media-baby ipad-baby import-image" src="' + path + '" alt="image-1"  height="180" width="180"></a></div><div class="col-md-10"><div class="text-fix"><h2 class="import-name">' + name + ' </h2><span class="text-limit">' + text + ' </span></div><div class="kol-price-button"><div class="price price-products baby-price ipad-price"> <h3 class="import-price">Цена: <span class="remove-class-price">' + price + '</span> лв.</h3></div><span class="name-kolichestvo">Количество:</span>  <input type="number" class="fix-input import-kolichestvo" value="1" min="1" max="100" style="text-align: center"> <div class="wrapper-icon local-baby"><button class="btn btn-primary add-babyfood"><i class="icofont-leaf" aria-hidden="true"></i>купи</button></div></div><div class="icon-image-bio"> <img src="images/img/bio-icon.png" class="icon-fix" height="30" width="30"/></div></div></div><hr class="new1">   \n'

        $(".addProduct").append(htmlElement);


        })
    });













})

























