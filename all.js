$(document).ready(function () {

    let language = localStorage.getItem('language');

    if (language === '"en"') {
        language = 'en'
    } else {
        language = 'bg';
    }

    setTimeout(function () {
        $('.more_lang div[data-value="' + language + '"]').click();
        countProducts()
    }, 10);


    let localStorageItemsCoffee = JSON.parse(localStorage.getItem("coffee"));

    let countSum = 0;


    if (JSON.parse(localStorage.getItem("coffee"))) {

        $.each(localStorageItemsCoffee, function (index, value) {

            let newName = value.name
            let newPrice = value.price
            let newImage = value.image
            let newQuantity = value.quantity

            let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + newImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + newName + '</h2><h4 class="remove-class-price">Цена: ' + newPrice + ' лв.<input type="number" class="fix-input import-kolichestvo" value=' + newQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close"></button> </li>\n'

            $(".dropdown-cart").append(html);


            countSum += parseFloat(newPrice) * (newQuantity)


            let image = '\n        <img class="example-image fix-image fix-image-media import-image settings-cart-image settings-cart-image-mobile" src=' + newImage + ' alt="image-1" height="100" width="100">\n'
            let name = '\n <h2 class="import-name settings-cart-name settings-cart-name-mobile">' + newName + '\n'
            let price = '\n <h4 class="remove-class-price settings-cart-price">Цена: <span class="get-value-td">' + newPrice + '</span> лв.\n'
            let quantity = '\n <input data-attr="1" type="number" class="fix-input import-kolichestvo settings-cart-quantity shop-cart" value=' + newQuantity + ' min="1" max="100" style="text-align: center">\n'
            let remove = '\n <button class="btn btn-danger icofont-ui-close settings-cart-button cart-remove-element local-remove-element"></button>\n'


            $('.append-tr-product').append('<tr> <td>' + image + '</td><td>' + name + '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + remove + '</td></tr>')

        });

    }


    let localStorageItemsDobavki = JSON.parse(localStorage.getItem("dobavki"));


    if (JSON.parse(localStorage.getItem("dobavki"))) {

        $.each(localStorageItemsDobavki, function (index, value) {

            let newName = value.name
            let newPrice = value.price
            let newImage = value.image
            let newQuantity = value.quantity

            let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + newImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + newName + '</h2><h4 class="remove-class-price">Цена: ' + newPrice + ' лв.<input type="number" class="fix-input import-kolichestvo" value=' + newQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close"></button> </li>\n'

            $(".dropdown-cart").append(html);

            countSum += parseFloat(newPrice) * (newQuantity)

            let imageDobavki = '\n        <img class="example-image fix-image fix-image-media import-image settings-cart-image settings-cart-image-mobile" src=' + newImage + ' alt="image-1" height="100" width="100">\n'
            let nameDobavki = '\n <h2 class="import-name settings-cart-name settings-cart-name-mobile">' + newName + '\n'
            let priceDobavki = '\n <h4 class="remove-class-price settings-cart-price">Цена: <span class="get-value-td">' + newPrice + '</span>лв.\n'
            let quantityDobavki = '\n <input data-attr="1" type="number" class="fix-input import-kolichestvo settings-cart-quantity shop-cart" value=' + newQuantity + ' min="1" max="100" style="text-align: center">\n'
            let removeDobavki = '\n <button class="btn btn-danger icofont-ui-close settings-cart-button cart-remove-element local-remove-element"></button>\n'


            $('.append-tr-product').append('<tr> <td>' + imageDobavki + '</td><td>' + nameDobavki + '</td><td>' + priceDobavki + '</td><td>' + quantityDobavki + '</td><td>' + removeDobavki + '</td></tr>')


        });

    }


    let localStorageItemsBabyfood = JSON.parse(localStorage.getItem("babyfood"));

    if (JSON.parse(localStorage.getItem("babyfood"))) {

        $.each(localStorageItemsBabyfood, function (index, value) {

            let newName = value.name
            let newPrice = value.price
            let newImage = value.image
            let newQuantity = value.quantity

            let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + newImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + newName + '</h2><h4 class="remove-class-price">Цена: ' + newPrice + ' лв.<input type="number" class="fix-input import-kolichestvo" value=' + newQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close"></button></li>\n'

            $(".dropdown-cart").append(html);

            countSum += parseFloat(newPrice) * (newQuantity)

            let imageBabyfood = '\n        <img class="example-image fix-image fix-image-media import-image settings-cart-image settings-cart-image-mobile" src=' + newImage + ' alt="image-1" height="100" width="100">\n'
            let nameBabyfood = '\n <h2 class="import-name settings-cart-name settings-cart-name-mobile">' + newName + '\n'
            let priceBabyfood = '\n <h4 class="remove-class-price settings-cart-price">Цена: <span class="get-value-td">' + newPrice + '</span>лв.\n'
            let quantityBabyfood = '\n <input data-attr="1" type="number" class="fix-input import-kolichestvo settings-cart-quantity shop-cart" value=' + newQuantity + ' min="1" max="100" style="text-align: center">\n'
            let removeBabyfood = '\n <button class="btn btn-danger icofont-ui-close settings-cart-button cart-remove-element local-remove-element"></button>\n'


            $('.append-tr-product').append('<tr> <td>' + imageBabyfood + '</td><td>' + nameBabyfood + '</td><td>' + priceBabyfood + '</td><td>' + quantityBabyfood + '</td><td>' + removeBabyfood + '</td></tr>')


        });

    }


    let localStorageItemsVariva = JSON.parse(localStorage.getItem("variva"));

    if (JSON.parse(localStorage.getItem("variva"))) {

        $.each(localStorageItemsVariva, function (index, value) {

            let newName = value.name
            let newPrice = value.price
            let newImage = value.image
            let newQuantity = value.quantity

            let html = '   <li class="remove-li">\n        <img class="example-image fix-image fix-image-media import-image" src=' + newImage + ' alt="image-1" height="225" width="225"><h2 class="import-name">' + newName + '</h2><h4 class="remove-class-price">Цена: ' + newPrice + ' лв.<input type="number" class="fix-input import-kolichestvo" value=' + newQuantity + ' min="1" max="100" style="text-align: center"></h4><button class="btn btn-danger icofont-ui-close"></button> </li>\n'

            $(".dropdown-cart").append(html);

            countSum += parseFloat(newPrice) * (newQuantity)

            let imageVariva = '\n        <img class="example-image fix-image fix-image-media import-image settings-cart-image settings-cart-image-mobile" src=' + newImage + ' alt="image-1" height="100" width="100">\n'
            let nameVariva = '\n <h2 class="import-name settings-cart-name settings-cart-name-mobile">' + newName + '\n'
            let priceVariva = '\n <h4 class="remove-class-price settings-cart-price">Цена: <span class="get-value-td">' + newPrice + '</span>лв.\n'
            let quantityVariva = '\n <input data-attr="1" type="number" class="fix-input import-kolichestvo settings-cart-quantity shop-cart" value=' + newQuantity + ' min="1" max="100" style="text-align: center">\n'
            let removeVariva = '\n <button class="btn btn-danger icofont-ui-close settings-cart-button cart-remove-element local-remove-element"></button>\n'


            $('.append-tr-product').append('<tr> <td>' + imageVariva + '</td><td>' + nameVariva + '</td><td>' + priceVariva + '</td><td>' + quantityVariva + '</td><td>' + removeVariva + '</td></tr>')


            countProducts()
            countEmptyCart()


        });


    }


    $('.append-tr-product').append('   <tr>\n' +
        '                            <th class="2" scope="col"></th>\n' +
        '                            <th class="3" scope="col"></th>\n' +
        '                            <th class="3" id="en-carth-final-price" scope="col">Крайна цена:</th>\n' +
        '                            <th  class="2 set-final-price end-final-price end-final-price-mobile" scope="col">' + countSum.toFixed(2) + ' лв.</span></th>\n' +
        '                            <th class="2" scope="col"></th>\n' +
        '                        </tr>')


    countEmptyCart()

    countProducts()


    $('.cart-remove-element').on('click', function () {

        let removeProductCoffeeCart = $(this).parents('tr').find('.import-name').text();
        let convertedProductCoffeeCart = $(this).parents('tr').find('.import-name').text().replace(/\s/g, '');

        let nameProductDelete = $('.drop-cart-settings').find('.import-name');


        $.each(nameProductDelete, function (index, value) {

            let convertedValText = $(value).text().replace(/\s/g, '');

            if (convertedValText === convertedProductCoffeeCart) {


                $(value).parents('.remove-li').remove()

            }

        })

        $(this).parents("tr").remove()

        swal("", "Продукта бе премахнат от количката", "warning")
        event.stopPropagation();
        countProducts()
        countEmptyCart()

    })


    $('.local-remove-element').on('click', function () {

        let removeProductCoffeeLocal = $(this).parents('tr').find('.import-name').text().replace(/\s/g, '');


        let arrayDeleteCoffeeLocal = []
        let StorageCoffeeLocal = JSON.parse(window.localStorage.getItem('coffee'));

        $.each(StorageCoffeeLocal, function (index, value) {
            let convertedValLocalCoffee = value.name.replace(/\s/g, '');
            if (removeProductCoffeeLocal !== convertedValLocalCoffee) {

                arrayDeleteCoffeeLocal.push(StorageCoffeeLocal[index])


            }

            event.stopPropagation();
        })


        localStorage.setItem('coffee', JSON.stringify(arrayDeleteCoffeeLocal));


        let removeProductDobavkiLocal = $(this).parents('tr').find('.import-name').text().replace(/\s/g, '');


        let arrayDeleteDobavkiLocal = []
        let StorageDobavkiLocal = JSON.parse(window.localStorage.getItem('dobavki'));

        $.each(StorageDobavkiLocal, function (index, value) {
            let convertedValLocalDobavki = value.name.replace(/\s/g, '');
            if (removeProductDobavkiLocal !== convertedValLocalDobavki) {

                arrayDeleteDobavkiLocal.push(StorageDobavkiLocal[index])


            }

            event.stopPropagation();
        })


        localStorage.setItem('dobavki', JSON.stringify(arrayDeleteDobavkiLocal));


        let removeProductBabyfoodLocal = $(this).parents('tr').find('.import-name').text().replace(/\s/g, '');


        let arrayDeleteBabyfoodLocal = []
        let StorageBabyfoodLocal = JSON.parse(window.localStorage.getItem('babyfood'));

        $.each(StorageBabyfoodLocal, function (index, value) {
            let convertedValLocalBabyfood = value.name.replace(/\s/g, '');
            if (removeProductBabyfoodLocal !== convertedValLocalBabyfood) {

                arrayDeleteBabyfoodLocal.push(StorageBabyfoodLocal[index])


            }

            event.stopPropagation();
        })


        localStorage.setItem('babyfood', JSON.stringify(arrayDeleteBabyfoodLocal));


        let removeProductVarivaLocal = $(this).parents('tr').find('.import-name').text().replace(/\s/g, '');


        let arrayDeleteVarivaLocal = []
        let StorageVarivaLocal = JSON.parse(window.localStorage.getItem('variva'));

        $.each(StorageVarivaLocal, function (index, value) {
            let convertedValLocalVariva = value.name.replace(/\s/g, '');
            if (removeProductVarivaLocal !== convertedValLocalVariva) {

                arrayDeleteVarivaLocal.push(StorageVarivaLocal[index])


            }

            event.stopPropagation();
        })


        localStorage.setItem('variva', JSON.stringify(arrayDeleteVarivaLocal));


        let currnetPrice = parseFloat($(this).parents('tr').find('.get-value-td').text());
        countSum -= currnetPrice


        $('.set-final-price').text(countSum.toFixed(2) + ' лв.');

        countEmptyCart()
    });


    $('body').on('change', '.settings-cart-quantity', function () {


        if (parseInt($(this).attr('data-attr')) < parseInt($(this).val())) {

            let currnetQuantity = parseFloat($(this).parents('tr').find('.get-value-td').text());


            let settingsQuantity = $(this).val();


            let resultQuantity = $('.end-final-price').text();


            resultQuantity = parseFloat(currnetQuantity * settingsQuantity);

            countSum += parseFloat(resultQuantity - resultQuantity) + currnetQuantity;
            $('.end-final-price').text(countSum.toFixed(2) + ' лв.');

        } else {

            let currnetQuantity = parseFloat($(this).parents('tr').find('.get-value-td').text());


            let settingsQuantity = $(this).val();


            let resultQuantity = $('.end-final-price').text();


            resultQuantity = parseFloat(currnetQuantity / settingsQuantity);

            countSum += parseFloat(resultQuantity - currnetQuantity) - resultQuantity;
            $('.end-final-price').text(countSum.toFixed(2) + ' лв.');
        }


        $(this).attr('data-attr', parseInt($(this).val()))

    });


    // $('.end-final-price').attr("data-progress", 100);


    function countEmptyCart() {


        if ($('.dropdown-cart li').length - 2) {


            $('.remove-text').hide()
        } else {
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


    countProducts()

    countEmptyCart()


    setTimeout(function () {
        countProducts()
    }, 1500);
    setTimeout(function () {
        countEmptyCart()
    }, 1500);


    $('.and-order-text').on('click', function () {


        localStorage.setItem('finalPrice', JSON.stringify(parseFloat($('.end-final-price').text())));

        localStorage.setItem('finalName', JSON.stringify($('.settings-cart-name').text()));


        // $.each(settings-cart-quantity, function (index, value) {
        //     localStorage.setItem('finalQuantity', JSON.stringify(parseInt($('.settings-cart-quantity').val())));
        //
        // })
        // localStorage.setItem('finalQuantity', JSON.stringify(parseInt($('.settings-cart-quantity').val())));
    });

    $('body').on('keyup', '#searchBar', function () {

        let value = $(this).val().toLowerCase();
        $(".get-product-cart").filter(function () {


            $(this).toggle($(this).find('.import-name').text().toLowerCase().indexOf(value) > -1)
        });
    });


    /*translate of the site*/

    let tnum = 'bg';


    $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active');
    });

    $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active');

        setTimeout(function () {
            $('.more_lang').toggleClass('active');
        }, 5);
    });


    $('.more_lang .lang').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active');

        let img = $(this).find('img').attr('src');

        let lang = $(this).attr('data-value');

        let tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);
        $('.current_lang img').attr('src', img);

    });


    function translate(tnum) {
        /*navi*/
        $('.en-begining').text(trans[0][tnum]);
        $('.en-about').text(trans[1][tnum]);
        $('.en-coffee').text(trans[2][tnum]);
        $('#dropdownMenuButton').text(trans[3][tnum]);
        $('.en-supplements').text(trans[4][tnum]);
        $('.en-Baby-food').text(trans[5][tnum]);
        $('.en-legumes').text(trans[6][tnum]);
        $('.en-basket').text(trans[7][tnum]);
        $('.en-contacts').text(trans[8][tnum]);
        /*section begining*/
        $('.en-slideshow-1').text(trans[9][tnum]);
        $('.en-slideshow-2').text(trans[10][tnum]);
        $('.en-slideshow-3').text(trans[11][tnum]);
        $('.en-slideshow-4').text(trans[12][tnum]);
        /*footer*/
        $('.en-footer-magazine').text(trans[13][tnum]);
        $('.en-footer-barleta').text(trans[14][tnum]);
        $('.en-footer-city').text(trans[15][tnum]);
        $('.en-footer-street').text(trans[16][tnum]);
        $('.en-footer-work-time').text(trans[17][tnum]);
        $('.en-footer-from').text(trans[18][tnum]);
        $('.en-footer-to').text(trans[19][tnum]);
        /*shopping cart*/
        $('.finaly-text-cart').text(trans[20][tnum]);
        $('.remove-text').text(trans[21][tnum]);
        /*section carth(basket)*/
        $('.en-carth-basket').text(trans[22][tnum]);
        $('.en-delivery').text(trans[23][tnum]);
        $('#en-carth-image').text(trans[24][tnum]);
        $('#en-carth-name-product').text(trans[25][tnum]);
        $('#en-carth-price').text(trans[26][tnum]);
        $('#en-carth-quantity').text(trans[27][tnum]);
        $('#en-carth-remove').text(trans[28][tnum]);
        $('#en-carth-final-price').text(trans[29][tnum]);
        $('.and-order-text').text(trans[30][tnum]);
        /*section contacts*/
        $('.en-Monday').text(trans[31][tnum]);
        $('.en-Tuesday').text(trans[32][tnum]);
        $('.en-Wednesday').text(trans[33][tnum]);
        $('.en-Thursday').text(trans[34][tnum]);
        $('.en-Friday').text(trans[35][tnum]);
        $('.en-Saturday').text(trans[36][tnum]);
        $('.en-Sunday').text(trans[37][tnum]);
        $('.en-closed').text(trans[38][tnum]);
        $('.en-store-street').text(trans[39][tnum]);
        $('.en-store-country').text(trans[40][tnum]);
        $('.en-store-telephone').text(trans[41][tnum]);
        $('.en-h').text(trans[42][tnum]);
        $('.en-store-come').text(trans[43][tnum]);
        $('.en-store-work-time').text(trans[44][tnum]);
        /*section about us*/
        $('.en-about-coffee').text(trans[45][tnum]);
        $('.en-about-information').text(trans[46][tnum]);
        $('.en-about-text-1').text(trans[47][tnum]);
        $('.en-about-text-2').text(trans[48][tnum]);
        $('.en-about-text-3').text(trans[49][tnum]);
        $('.en-about-text-4').text(trans[50][tnum]);
        $('.en-about-text-5').text(trans[51][tnum]);
        $('.en-about-holle-europe').text(trans[52][tnum]);
        $('.en-about-info-products').text(trans[53][tnum]);
        $('.en-about-text-holle').text(trans[54][tnum]);
        $('.en-holle-1').text(trans[55][tnum]);
        $('.en-holle-2').text(trans[56][tnum]);
        $('.en-holle-3').text(trans[57][tnum]);
        $('.en-holle-4').text(trans[58][tnum]);
        $('.en-holle-5').text(trans[59][tnum]);
        $('.en-holle-6').text(trans[60][tnum]);
        $('.en-holle-7').text(trans[61][tnum]);
        $('.en-holle-8').text(trans[62][tnum]);
        $('.en-holle-9').text(trans[63][tnum]);
        /*section final-order*/
        $('.en-without-order').text(trans[64][tnum]);
        $('.en-order').text(trans[65][tnum]);
        $('.en-full-name').text(trans[66][tnum]);
        $('.en-email-order').text(trans[67][tnum]);
        $('.en-address-order').text(trans[68][tnum]);
        $('.en-city-order').text(trans[69][tnum]);
        $('.en-country-order').text(trans[70][tnum]);
        $('.en-zip-code-order').text(trans[71][tnum]);
        $('.en-phone-order').text(trans[72][tnum]);
        $('.en-way-delivery').text(trans[73][tnum]);
        $('.en-delivery-address').text(trans[74][tnum]);
        $('.en-delivery-econt').text(trans[75][tnum]);
        $('.en-over-order').text(trans[76][tnum]);
        $('.en-pay-by-cash').text(trans[77][tnum]);
        $('.en-due-amount').text(trans[78][tnum]);
        $('.en-BGN').text(trans[79][tnum]);
        $('.en-button-order').text(trans[80][tnum]);
        /*section coffee*/
        $('.en-coffee-def').text(trans[81][tnum]);
        $('.en-BGN-point').text(trans[82][tnum]);
        $('.en-price-two-points').text(trans[83][tnum]);
        $('.en-quantity').text(trans[84][tnum]);
        $('.en-buy').text(trans[85][tnum]);
        $('.en-coffee-decaf-text').text(trans[86][tnum]);
        $('.en-coffee-grains').text(trans[87][tnum]);
        $('.en-coffee-milled').text(trans[88][tnum]);
        $('.en-coffee-exclusive-text').text(trans[89][tnum]);
        $('.en-coffee-exquisit-text').text(trans[90][tnum]);
        $('.en-coffee-classic-1kg').text(trans[91][tnum]);
        $('.en-coffee-bar-text').text(trans[92][tnum]);
        $('.en-coffee-mamma-text').text(trans[93][tnum]);
        $('.en-coffee-blucaffe-700gr').text(trans[94][tnum]);
        $('.en-coffee-lucaffeteria').text(trans[95][tnum]);
        $('.en-coffee-picolo').text(trans[96][tnum]);
        $('.en-coffee-ospite').text(trans[97][tnum]);
        $('.en-coffee-blucaffe-125g').text(trans[98][tnum]);
        $('.en-coffee-pulcinella').text(trans[99][tnum]);
        $('.en-coffee-classic-250gr').text(trans[100][tnum]);
        $('.en-coffee-decaf-250gr').text(trans[101][tnum]);
        /*section dobavki*/
        $('.en-dobavki-magnezii').text(trans[102][tnum]);
        $('.en-dobavki-magnezii-text').text(trans[103][tnum]);
        $('.en-dobavki-kimion').text(trans[104][tnum]);
        $('.en-dobavki-kimion-text').text(trans[105][tnum]);
        $('.en-dobavki-selen').text(trans[106][tnum]);
        $('.en-dobavki-selen-text').text(trans[107][tnum]);
        $('.en-dobavki-babini').text(trans[108][tnum]);
        $('.en-dobavki-babini-text').text(trans[109][tnum]);
        $('.en-dobavki-acerola').text(trans[110][tnum]);
        $('.en-dobavki-acerola-text').text(trans[111][tnum]);
        $('.en-dobavki-ginger').text(trans[112][tnum]);
        $('.en-dobavki-ginger-text').text(trans[113][tnum]);
        $('.en-dobavki-kurkuma').text(trans[114][tnum]);
        $('.en-dobavki-kurkuma-text').text(trans[115][tnum]);
        $('.en-dobavki-birena').text(trans[116][tnum]);
        $('.en-dobavki-birena-text').text(trans[117][tnum]);
        $('.en-dobavki-kalcii').text(trans[118][tnum]);
        $('.en-dobavki-kalcii-text').text(trans[119][tnum]);
        $('.en-dobavki-akai').text(trans[120][tnum]);
        $('.en-dobavki-akai-text').text(trans[121][tnum]);
        $('.en-dobavki-hitozan').text(trans[122][tnum]);
        $('.en-dobavki-hitozan-text').text(trans[123][tnum]);
        $('.en-dobavki-cink').text(trans[124][tnum]);
        $('.en-dobavki-cink-text').text(trans[125][tnum]);

    }


    let trans = [
        {
            bg: 'Начало',
            en: 'Begining'
        },
        {
            bg: 'За нас',
            en: 'About us'
        },
        {
            bg: 'Видове кафета',
            en: 'Types of coffee'
        },
        {
            bg: 'Био продукти',
            en: 'Bio products'
        },
        {
            bg: 'Добавки',
            en: 'Supplements'
        },
        {
            bg: 'Бебешки храни',
            en: 'Baby food'
        },
        {
            bg: 'Варива',
            en: 'Legumes'
        },
        {
            bg: 'Кошница',
            en: 'Basket'
        },
        {
            bg: 'Контакти',
            en: 'Contacts'
        },
        {
            bg: 'Еспресото, което изкушава, всеки път!',
            en: 'The espresso that tempts you every time!'
        },
        {
            bg: 'Животът е кратък, наслади се на кафето си!',
            en: 'Life is short, enjoy your coffee!'
        },
        {
            bg: 'С всяка чаша - наслада!',
            en: 'With each glass - a treat!'
        },
        {
            bg: 'Културата на качеството „Произведено в Италия”',
            en: 'The culture of quality "Made in Italy"'
        },
        {
            bg: 'Магазин за кафе',
            en: 'Coffee shop'
        },
        {
            bg: 'Барлета',
            en: 'Barleta'
        },
        {
            bg: 'гр. Габрово',
            en: 'city Gabrovo'
        },
        {
            bg: 'ул. Отец Паисий №12',
            en: 'Otets Paisiy Street №12'
        },
        {
            bg: 'Понеделник - събота',
            en: 'Monday - Saturday'
        },
        {
            bg: 'От',
            en: 'From'
        },
        {
            bg: 'дo',
            en: 'to'
        },
        {
            bg: 'Влезте в кошницата за пазаруване',
            en: 'Enter the shopping cart'
        },
        {
            bg: 'Количката е празна',
            en: 'Cart is empty'
        },
        {
            bg: 'Кошница',
            en: 'Basket'
        },
        {
            bg: '*Всички продукти са с включено ДДС',
            en: '* All products include DDS'
        },
        {
            bg: 'Снимка',
            en: 'Image'
        },
        {
            bg: 'Име на продукта',
            en: 'Name of the product'
        },
        {
            bg: 'Цена',
            en: 'Price'
        },
        {
            bg: 'Количество',
            en: 'Quantity'
        },
        {
            bg: 'Премахване',
            en: 'Remove'
        },
        {
            bg: 'Крайна цена',
            en: 'Final price'
        },
        {
            bg: 'Оформяне на поръчката',
            en: 'Ordering'
        },
        {
            bg: 'Понеделник',
            en: 'Monday'
        },
        {
            bg: 'Вторник',
            en: 'Tuesday'
        },
        {
            bg: 'Сряда',
            en: 'Wednesday'
        },
        {
            bg: 'Четвъртък',
            en: 'Thursday'
        },
        {
            bg: 'Петък',
            en: 'Friday'
        },
        {
            bg: 'Събота',
            en: 'Saturday'
        },
        {
            bg: 'Неделя',
            en: 'Sunday'
        },
        {
            bg: 'Затворено',
            en: 'Closed'
        },
        {
            bg: 'улица Отец Паисий №12',
            en: 'Otets Paisiy Street №12'
        },
        {
            bg: 'България, гр. Габрово',
            en: 'Bulgaria, city Gabrovo'
        },
        {
            bg: 'Телефони за контакт',
            en: 'Contact telephones'
        },
        {
            bg: 'ч.',
            en: 'h.'
        },
        {
            bg: 'ЕЛАТЕ ПРИ НАС',
            en: 'COME TO US'
        },
        {
            bg: 'РАБОТНО ВРЕМЕ:',
            en: 'WORK TIME:'
        },
        {
            bg: 'Страхотно кафе, страхотно настроение',
            en: 'Great coffee, great mood'
        },
        {
            bg: 'Информация за нашето кафе',
            en: 'Information about our coffee'
        },
        {
            bg: 'Селекцията и закупуването на кафето се осъществяват от Gian Luca Venturelli. Gian Luca лично опитва на вкус всички мостри, които пристигат във фабриката и често пътува в чужбина с цел посещение на плантации и производители на кафе.',
            en: 'The selection and purchase of coffee is carried out by Gian Luca Venturelli. Gian Luca personally tastes all the samples that arrive at the factory and often travels abroad to visit plantations and coffee growers.'
        },
        {
            bg: 'Ние сме пряко отговорни за всеки етап от транспортирането на суровината до нашите заводи. Някои висши сортове кафе, като Jamaica Blue Mountain, се транспортират в  малки дървени бъчви, за да се запази най-добре техния безспорен аромат.',
            en: 'We are directly responsible for every stage from the transportation of the raw material to our factories. Some higher varieties of coffee, such as Jamaica Blue Mountain, are transported in small wooden barrels to best preserve their undeniable aroma.'
        },
        {
            bg: 'Отделните сортове кафе са смесени във внимателно разработени пропорции. Нашите смеси са резултат на дълго-годишни задълбочени изследвания от Gian Luca Venturelli и се предлагат във видове, които могат да задоволят редица индивидуални вкусове. Освен нашите смеси, предлагаме и особено престижни кафета с единичен произход (Jamaica Blue Mountain,  например).',
            en: 'The individual varieties of coffee are mixed in carefully developed proportions. Our blends are the result of many years of in-depth research by Gian Luca Venturelli and are available in types that can satisfy a number of individual tastes. In addition to our blends, we also offer particularly prestigious single-origin coffees (Jamaica Blue Mountain, for example).'
        },
        {
            bg: 'При обработването на нашите кафета следваме занаятчийската практика: нежен процес на печене, който гали кафето. Получаваме продукт с най-високо качество, който е изключително здравословен: етеричните масла и аромати са защитени, и зърната в резултат на това, са добре обработени - с малко остатъчна влага и ограничено съдържание на кофеин.',
            en: 'When processing our coffees, we follow the craft practice: a gentle roasting process that caresses the coffee. We get a product of the highest quality that is extremely healthy: the essential oils and fragrances are protected, and the beans as a result are well processed - with little residual moisture and limited caffeine content.'
        },
        {
            bg: 'Всички наши кафета са резултат от точни и задълбочени изследвания. Избираме най-добрите сортове кафе и ги обработваме в съответствие с италианската традиция за майсторското печене на кафе. Отнасяме се с изключителна грижа към нашето еспресо. И с всяка чаша … Вие можете да усетите това!',
            en: 'All our coffees are the result of accurate and thorough research. We choose the best varieties of coffee and process them in accordance with the Italian tradition of masterful coffee roasting. We take special care of our espresso. And with each glass… You can feel it!'
        },
        {
            bg: 'Най - добрата фирма за бебешки храни в Европа',
            en: 'The best baby food company in Europe'
        },
        {
            bg: 'Информация за нашите бебешки продукти',
            en: 'Information about our baby products'
        },
        {
            bg: 'Holle baby food GmbH e сред водещите производители на ОРГАНИК бебешки храни. Марката е създадена през 1933г. в Швейцария от Albert Diefenbach под името "Holle Food AG". Скоро произвежда първите си продукти, а именно пълнозърнест хляб и органична бебешка храна. По този начин малко по-късно през 1960г. Holle baby food GmbH се превръща в първият производител на органични бебешки храни в Европа. Към днешна дата храните се произвеждат под строг контрол и съставки от био земеделие. Бебешките храни са сертифицирани с "Demeter" (най-голямата организация за сертифициране на биодинамично земеделие). В портфолиото на марката участват пълна гама от преходни млека, каши, пюрета, сухари, бисквитки, чайове и плодови закуски.',
            en: 'Holle baby food GmbH is one of the leading manufacturers of ORGANIC baby food. The brand was established in 1933. in Switzerland by Albert Diefenbach under the name "Holle Food AG". He soon produced his first products, namely wholemeal bread and organic baby food. Thus, a little later in 1960. Holle baby food GmbH becomes the first producer of organic baby food in Europe. To date, food is produced under strict control and ingredients from organic farming. Baby foods are certified with "Demeter" (the largest certification organization for biodynamic agriculture). The brand is portfolio includes a full range of transitional milks, porridges, purees, rusks, cookies, teas and fruit snacks.'
        },
        {
            bg: 'Holle означава:',
            en: 'Holle means:'
        },
        {
            bg: 'Първокласна качествена био храна за бебета',
            en: 'First-class quality organic food for babies'
        },
        {
            bg: 'Над 80 години опит',
            en: 'Over 80 years of experience'
        },
        {
            bg: 'Опазване на околната среда в съответствие с Европейските стандарти',
            en: 'Environmental protection in accordance with European standards'
        },
        {
            bg: 'Без изкуствени аромати, оцветители и консерванти (според наредбите на ЕС)',
            en: 'Free of artificial flavors, colors and preservatives (according to EU regulations)'
        },
        {
            bg: 'Земеделие и продукция без химикали',
            en: 'Agriculture and products without chemicals'
        },
        {
            bg: 'Закона за био храните изключва употребата на генетично инженерство в био храната',
            en: 'The Organic Food Act excludes the use of genetic engineering in organic food'
        },
        {
            bg: 'Поддържа високи стандарти за хуманно отношение към животните',
            en: 'Maintains high standards of animal welfare'
        },
        {
            bg: 'Доверие – Сигурност – Съвет',
            en: 'Trust - Security - Advice'
        },
        {
            bg: 'Поръчка без регистрация',
            en: 'Order without registration'
        },
        {
            bg: 'Поръчка',
            en: 'Order'
        },
        {
            bg: ' Име и фамилия',
            en: ' Name and surname'
        },
        {
            bg: ' Email адрес',
            en: ' Email address'
        },
        {
            bg: ' Адрес',
            en: ' Address'
        },
        {
            bg: ' Град',
            en: ' City'
        },
        {
            bg: ' Държава',
            en: ' Country'
        },
        {
            bg: ' Пощенски код',
            en: ' ZIP code'
        },
        {
            bg: ' Телефон',
            en: ' Phone'
        },
        {
            bg: 'Начин на доставка',
            en: 'Way of delivery'
        },
        {
            bg: 'Доставка до адрес 4,67 лв.',
            en: 'Delivery to address 4.67 BGN.'
        },
        {
            bg: 'Доставките се извършват с куриерска фирма Eконт',
            en: 'Deliveries are made with the courier company Econt'
        },
        {
            bg: 'Поръчка над 50 лв. е за сметка на фирма Барлета',
            en: 'An order over 50 BGN is at the expense of the Barleta company'
        },
        {
            bg: 'Плащането на поръчките могат да се извършат само с наложен платеж',
            en: 'Orders can only be paid by cash on delivery'
        },
        {
            bg: 'Дължима сума',
            en: 'Due amount'
        },
        {
            bg: 'лв.',
            en: 'BGN'
        },
        {
            bg: 'Поръчайте',
            en: 'Order'
        },
        {
            bg: 'LUCAFFE DECAFFEINATO 700 ГР. ЗЪРНА',
            en: 'LUCAFFE DECAFFEINATO 700 GR. GRAINS'
        },
        {
            bg: ' лв.',
            en: ' BGN.'
        },
        {
            bg: 'Цена:',
            en: 'Price:'
        },
        {
            bg: 'Количество:',
            en: 'Quantity:'
        },
        {
            bg: 'купи',
            en: 'buy'
        },
        {
            bg: 'Без кофеин, но с прекрасен аромат Бленд от най-сладката и кремообразна Арабика , която запазва удоволствието от консумацията на отлично еспресо  без нежеланите ефекти от кофеина. Изключително нежен аромат, плътна консистенция, великолепна пяна и един много приятен аромат.',
            en: 'Decaffeinated, but with a wonderful aroma Blend of the sweetest and creamiest Arabica, which preserves the pleasure of consuming an excellent espresso without the side effects of caffeine. Extremely delicate aroma, thick texture, great foam and a very pleasant aroma.'
        },
        {
            bg: 'ЗЪРНА',
            en: 'GRAINS'
        },
        {
            bg: 'МЛЯНО',
            en: 'MILLED'
        },
        {
            bg: 'Бленд от арабика с опияняващ аромат. Бленд от кафета сорт Арабика от Южна Америка, Азия и малък процент от Централна Африка. Няма друго чисто кафе Арабика , което да даде същите резултати- средна консистенция, сладък вкус, много приятен аромат, напомнящ прясно изпечен хляб. Токущо смляно, ухае опияняващо. По всяка възможност нито един сорт Арабика самостоятелно не би могъл да даде същия резултат. Средна  плътност, сладък вкус, много приятен аромат. Веднага след смилането му мирисът може да бъде опияняващ.',
            en: 'Blend of Arabica with intoxicating aroma. Blend of Arabica coffee from South America, Asia and a small percentage of Central Africa. There is no other pure Arabica coffee that gives the same results - medium texture, sweet taste, very pleasant aroma, reminiscent of freshly baked bread. Freshly ground, it smells intoxicating. In any case, no Arabica variety alone could give the same result. Medium density, sweet taste, very pleasant aroma. Immediately after grinding, the smell can be intoxicating.'
        },
        {
            bg: 'Името на самия продукт напълно описва неговите характеристики: бленд от превъзходни сортове Арабика и малък процент Робуста, което прави кафето сладко и деликатно. Изкушение, на което да се отдавате всеки ден. За тези, които обичат качеството на Арабиката, но и търсят нотка от изключителната, шоколадова Робуста',
            en: 'The name of the product itself fully describes its characteristics: a blend of superb Arabica varieties and a small percentage of Robusta, which makes the coffee sweet and delicate. A temptation to indulge in every day. For those who love the quality of Arabica, but are also looking for a touch of the exclusive, chocolate Robusta'
        },
        {
            bg: 'Фино и сладко, класическото италианско еспресо.Това качество се препоръчва за хората, които обичат еспресо заради неговите най-добри характеристики: представлява смес от отлични сортове кафе Арабика с незначителна добавка на най-висококачествени сортове Робуста. Мек вкус, лека и наситена плътност със средно плътен каймак, отличен аромат. След като го изпиете, не само ще се почувствате по-добре, но и ще изпитате удовлетворението от изпиването на едно най-висококачествено кафе.',
            en: 'Fine and sweet, the classic Italian espresso. This quality is recommended for people who love espresso because of its best characteristics: it is a mixture of excellent varieties of Arabica coffee with a slight addition of the highest quality varieties of Robusta. Mild taste, light and saturated density with medium-thick cream, excellent aroma. After drinking it, you will not only feel better, but you will also experience the satisfaction of drinking the highest quality coffee.'
        },
        {
            bg: 'Вечният и непогрешим вкус на италианско кафе. Типично италианско кафе, характеризиращо се с идеален баланс на различни сортове кафе от най-добрите плантации. Препоръчвана смес на пазара на висококачествени продукти за кафе автомати. Сладко, наситено, силно кремообразно кафе.',
            en: 'The eternal and unmistakable taste of Italian coffee Typical Italian coffee, characterized by an ideal balance of different varieties of coffee from the best plantations. Recommended blend on the market of high quality coffee machine products. Sweet, rich, strong creamy coffee.'
        },
        {
            bg: 'Добрият ден започва с кафето. Кафе с наситен вкус, силно препоръчвано за пиене сутрин. Смес за традиционно италианско еспресо, създадено за пазара за кафе автомати. Много плътно и все пак сладко.',
            en: 'A good day begins with coffee. Coffee with a rich taste, highly recommended for drinking in the morning. A blend for traditional Italian espresso, created for the coffee machine market. Very dense and yet sweet.'
        },
        {
            bg: 'Еспресото, което изкушава, всеки път. Истинската страст на ДжанЛука Вентурели (собственик на Lucaffe) и неговия екип е мистериозно вплетена в уникален вкус. „Нашето еспресо”, освен удоволствие, трябва да създава силна емоция и красив спомен, за да опитвате отново всеки път, когато пожелаете....',
            en: 'The espresso that tempts you every time. The true passion of GianLuca Ventureli (owner of Lucaffe) and his team is mysteriously woven into a unique taste. "Our espresso", in addition to pleasure, must create a strong emotion and a beautiful memory to try again every time you want ....'
        },
        {
            bg: 'Бленд от различни сортове арабика и добавена рубуста, за да подчертае характера на традициония италиански вкус. Кафе с характер и едновременно мек и плътен вкус.',
            en: 'Blend of different varieties of Arabica and added rubusta to emphasize the character of the traditional Italian taste. Coffee with character and at the same time soft and dense taste.'
        },
        {
            bg: 'Смес от висок клас Арабика от Бразилия и Робуста от Индия с много мек и изтънчен  вкус на шоколад, това кафе ще остави незабравима емоция,която няма да забравите до следващото си PICOLO & DOLCE кафе.',
            en: 'A blend of high-end Arabica from Brazil and Robusta from India with a very soft and refined taste of chocolate, this coffee will leave an unforgettable emotion that you will not forget until your next PICOLO & DOLCE coffee.'
        },
        {
            bg: 'Много сладко и меко, същевременно силно кафе, което се пече от подбрани сортове Арабика от Бразилия и сортове робуста от Индия.',
            en: 'Very sweet and soft, but strong coffee, which is roasted from selected varieties of Arabica from Brazil and varieties of Robusta from India.'
        },
        {
            bg: 'Истинската страст на ДжанЛука Вентурели (собственик на Lucaffe) и неговия екип е мистериозно вплетена в уникален вкус. „Нашето еспресо”, освен удоволствие, трябва да създава силна емоция и красив спомен, за да опитвате отново всеки път, когато пожелаете.',
            en: 'The true passion of GianLuca Ventureli (owner of Lucaffe) and his team is mysteriously woven into a unique taste. "Our espresso", in addition to pleasure, must create a strong emotion and a beautiful memory to try again every time you want.'
        },
        {
            bg: 'Pulcinella се ражда в следствие на отглеждането на скъпи и благородни сортове кафе- богати на енергизиращ кофеин и  едновременно запазвайки нежните шоколадови нотки. Истинска енергийна кафе напитка, 100% натурална, идеална за тези, които искат да посрещнат деня с повече сила и заряд.',
            en: 'Pulcinella is born as a result of growing expensive and noble varieties of coffee - rich in energizing caffeine and at the same time retaining the delicate chocolate notes. A real energy coffee drink, 100% natural, ideal for those who want to welcome the day with more strength and charge.'
        },
        {
            bg: 'Нежно и сладко, класическото Италианско еспресо. Това качество се препоръчва за тези, които обичат еспресо в най-добрите му характеристики- бленд от отлично кафе Арабика с малка добавка на Робуста. Сладък вкус, богата и мека консистенция, средно гъста пяна и отличен аромат. Освен, че ще ви освежи, ще ви накара да усетите удовлетворението, че пиете първокласно кафе.',
            en: 'Gentle and sweet, the classic Italian espresso. This quality is recommended for those who love espresso in its best characteristics - a blend of excellent Arabica coffee with a small addition of Robusta. Sweet taste, rich and soft texture, medium thick foam and excellent aroma. In addition to refreshing you, it will make you feel the satisfaction of drinking first-class coffee.'
        },
        {
            bg: 'Без кофеин, но с прекрасен аромат. Бленд от най-сладката и кремообразна Арабика , която запазва удоволствието от консумацията на отлично еспресо  без нежеланите ефекти от кофеина. Изключително нежен аромат, плътна консистенция, великолепна пяна и един много приятен аромат.',
            en: 'Decaffeinated, but with a wonderful aroma. A blend of the sweetest and creamiest Arabica, which preserves the pleasure of consuming an excellent espresso without the side effects of caffeine. Extremely delicate aroma, thick texture, great foam and a very pleasant aroma.'
        },
        {
            bg: 'Морски магнезий + Витамин B6 30 капсули',
            en: 'Marine Magnesium + Vitamin B6 30 capsules'
        },
        {
            bg: 'ХРАНИТЕЛНА ДОБАВКА. 100% вегетариански. Без наночастици. Без ГМО. Допринася за нормалното функциониране на нервната и опорно-двигателната системи. Препоръчителен дневен прием: 1 капсула дневно с чаша вода. Дневният прием осигурява (1 капсула): 300mg магнезиев оксид (Е530) – (120%*), от които магнезий 180mg (72%*), 2mg Витамин В6 (20%*). * РКП Референтни количества за дневен прием (възрастни). Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина. ',
            en: 'FOOD SUPPLEMENT. 100% vegetarian. No nanoparticles. GMO free. Contributes to the normal functioning of the nervous and musculoskeletal systems. Recommended daily intake: 1 capsule daily with a glass of water. The daily intake provides (1 capsule): 300mg magnesium oxide (E530) - (120% *), of which magnesium 180mg (72% *), 2mg Vitamin B6 (20% *). * RCP Reference quantities for daily intake (adults). Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },
        {
            bg: 'Масло от черен кимион + Витамин Е 90 капсули',
            en: 'Black cumin oil + Vitamin E 90 capsules'
        },
        {
            bg: 'Маслото от черен кимион съдържа висок процент линолова киселина (ненаситени мастни киселини), стероли и етерични масла. От линолова киселина в човешкото тяло може да произвежда гама-линоленова киселина. Това подкрепя имунната система, чрез образуване на някои имунни регулатори, които могат да потиснат активността на болката и противовъзпалителните вещества, те поддържат хистамина под контрол и затова може да помогне при алергия. Етеричните масла като алкалоид nigellone има противовъзпалително действие и могат да разширят бронхите при астма. Може да се използва за атопичен дерматит, бронхиална астма, алергии, прах и цветен прашец, сенна хрема, имунен дефицит, лошо храносмилане на вътрешно и външно. Хранителна добавка с масло от черен кимион и натурален Витамин Е. Препоръчителен дневен прием: 3 капсули на ден.  Хранителна информация за 3 капсули: масло от черен кимион 1500mg, Витамин Е 20,1mg алфа-ТЕ/150%*. *ПДП - минимален препоръчителен дневен прием, според Наредбата за етикетиране на храните. Забележка: Препоръчителният дневен прием не трябва да бъде превишаван. Продуктът не трябва да се използва като заместител на балансираното и разнообразно хранене и здравословен начин на живот. Съхранявайте на недостъпно място за малки деца. Съхранение: На хладно, сухо и защитено от светлина място. Нето тегло: 58,7g',
            en: 'Black cumin oil contains a high percentage of linoleic acid (unsaturated fatty acids), sterols and essential oils. From linoleic acid in the human body can produce gamma-linolenic acid. This supports the immune system by forming certain immune regulators that can suppress the activity of pain and anti-inflammatory substances, they keep histamine under control and therefore can help with allergies. Essential oils such as the alkaloid nigellone have anti-inflammatory effects and can dilate the bronchi in asthma. It can be used for atopic dermatitis, bronchial asthma, allergies, dust and pollen, hay fever, immune deficiency, indigestion internally and externally. Food supplement with black cumin oil and natural Vitamin E. Recommended daily intake: 3 capsules per day. Nutritional information for 3 capsules: black cumin oil 1500mg, Vitamin E 20.1mg alpha-TE / 150% *. * RDA - minimum recommended daily intake, according to the Ordinance on food labeling. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a balanced and varied diet and a healthy lifestyle. Keep out of reach of small children. Storage: In a cool, dry and protected from light place. Net weight: 58.7g'
        },
        {
            bg: 'Асе селен 60 капсули',
            en: 'Ace selenium 60 capsules'
        },
        {
            bg: 'Съставки в 1 капсула: екстракт от плод Ацерола (Malpighia punicifolia) титруван до 25% Витамин С, обвивка на капсулата: желиращ агент пулулан (Е1204), Витамин С, дрожди (Saccharomyces cerevisiae) със Селен, екстракт от водорасли Дуналиела салина титруван до 10% Бета-каротен, естествен Витамин Е (E307). ХРАНИТЕЛНА ДОБАВКА 100% вегетариански. Без наночастици. Витамините С, Е и Селенът допринасят за нормалното функциониране на имунната система и защитата на клетките от оксидативен стрес. Препоръчителен дневен прием: 1 капсула сутрин с чаша вода. Дневният прием осигурява (1 капсула): екстракт от плод Ацерола 240mg, от които Витамин С 60mg (10%*), Витамин С 60mg (10%*), Витамин Е (E307) 12mg α-ТЕ (12%*), Бета-каротен 4mg (57%*), Селен 50 μg (50%*). Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина. *РКП-Референтни количества за дневен прием',
            en: 'Ingredients in 1 capsule: acerola fruit extract (Malpighia punicifolia) titrated up to 25% Vitamin C, capsule shell: gelling agent pullulan (E1204), Vitamin C, yeast (Saccharomyces cerevisiae) with selenium, algae extract Duvanliela salina % Beta-carotene, natural Vitamin E (E307). NUTRITIONAL SUPPLEMENT 100% vegetarian. No nanoparticles. Vitamins C, E and Selenium contribute to the normal functioning of the immune system and protect cells from oxidative stress. Recommended daily intake: 1 capsule in the morning with a glass of water. Daily intake provides (1 capsule): Acerola fruit extract 240mg, of which Vitamin C 60mg (10% *), Vitamin C 60mg (10% *), Vitamin E (E307) 12mg α-TE (12% *), Beta -carotene 4mg (57% *), Selenium 50 μg (50% *). Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources. * RCP-Reference quantities for daily intake'
        },
        {
            bg: 'Бабини зъби 90 дози x 300мг',
            en: 'Grandma`s teeth 90 doses x 300 mg'
        },
        {
            bg: 'Съставки в 1 капсула: 300mg плодове бабини зъби (Tribulus Terrestris L.), обвивка на капсулата: желиращ агент пулулан (Е1204). Раздразнителност, нерви и натрупана умора – не е нужно седмицата ви да започва така! Ето нещо, което ще ви енергизира физически и стабилизира психически: чудодейната билка бабини зъби. В удобни за прием капсули, без варене на отвари, киснене, прецеждане и пиене по сложни схеми. Най-доброто от народната медицина в най-удобната форма в забързания 21 век. ХРАНИТЕЛНА ДОБАВКА  100% вегетарианска. Без наночастици. Без ГМО. Действа благоприятно на половата система и допринася за нормалните нива на тестостерон в кръвта.  Препоръчителен дневен прием: 3 капсули дневно с чаша вода.   Дневният прием осигурява (3 капсули): 900mg бабини зъби. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина. ',
            en: 'Ingredients in 1 capsule: 300mg fruit grandma\'s teeth (Tribulus Terrestris L.), capsule shell: gelling agent pullulan (E1204). Irritability, nerves and accumulated fatigue - you don\'t have to start your week like that! Here\'s something that will energize you physically and stabilize you mentally: the miraculous herb grandma\'s teeth. In convenient to take capsules, without boiling decoctions, soaking, straining and drinking in complex schemes. The best of folk medicine in the most convenient form in the fast-paced 21st century. NUTRITIONAL SUPPLEMENT 100% vegetarian. No nanoparticles. GMO free. It has a beneficial effect on the reproductive system and contributes to normal testosterone levels in the blood. Recommended daily intake: 3 capsules daily with a glass of water. The daily intake provides (3 capsules): 900mg grandma\'s teeth. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },
        {
            bg: 'Био ацерола на прах 100г',
            en: 'Bio acerola powder 100g'
        },
        {
            bg: 'Био плод ацерола на прах екстракт със 17% натурален Витамин С. Ацерола на прах: направена от плодове ацерола с малтодекстрин. Без глутен. Подходяща за вегетарианци, суровоядци, диабетици, хора с цьолиакия. Препоръчителен дневен прием: 1g дневно (около 1/2 ч.л.) към напитки, мюсли, кисело мляко или десерти. При всички натурални продукти са възможни отклонения от посочените хранителни стойности. Съхранение: На хладно, сухо и защитено от светлина място.',
            en: 'Organic Acerola Fruit Powder Extract with 17% Natural Vitamin C. Acerola Powder: Made from Acerola Fruit with Maltodextrin. Gluten free. Suitable for vegetarians, raw foodists, diabetics, people with celiac disease. Recommended daily intake: 1g daily (about 1/2 teaspoon) for drinks, muesli, yogurt or desserts. In all natural products, deviations from the indicated nutritional values are possible. Storage: In a cool, dry and protected from light place.'
        },
        {
            bg: 'Био джинджифил 90 капсули x 220мг',
            en: 'Organic Ginger 90 capsules x 220mg'
        },
        {
            bg: 'Съставки в 1 капсула: Джинджифил (Zingiber officinale) корен*: 220mg, обвивка на капсулата: желиращ агент хидроксипропилметилцелулоза (Е464). *от контролирано био производство -   ХРАНИТЕЛНА ДОБАВКА 100% вегетарианска. Без наночастици.  Джинджифилът допринася за физическото благосъстояние.  Препоръчителен дневен прием: 3-6 капсули дневно. Дневният прием осигурява (6 капсули): Джинджифил 1320mg. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина.',
            en: 'Ingredients in 1 capsule: Ginger (Zingiber officinale) root *: 220mg, capsule shell: gelling agent hydroxypropylmethylcellulose (E464). * from controlled organic production - NUTRITIONAL SUPPLEMENT 100% vegetarian. No nanoparticles. Ginger contributes to physical well-being. Recommended daily intake: 3-6 capsules daily. Daily intake provides (6 capsules): Ginger 1320mg. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },
        {
            bg: 'Био куркума 60 капсули',
            en: 'Organic turmeric 60 capsules'
        },
        {
            bg: 'Съставки в 1 капсула: 600mg куркума, пълнители: целулоза, нутриоза (растителни фибри), дикалциев фосфат, магнезиеви соли на хранителни мастни киселини. ХРАНИТЕЛНА ДОБАВКА oт контролирано био производство. Препоръчителен дневен прием: 2 капсули дневно с чаша вода.  Дневният прием осигурява (2 капсули): 1200mg куркума. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца.',
            en: 'Ingredients in 1 capsule: 600mg turmeric, fillers: cellulose, nutriose (vegetable fiber), dicalcium phosphate, magnesium salts of dietary fatty acids. NUTRITIONAL SUPPLEMENT from controlled organic production. Recommended daily intake: 2 capsules daily with a glass of water. Daily intake provides (2 capsules): 1200mg turmeric. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children.'
        },
        {
            bg: 'Бирена мая 120 капсули x 300мг',
            en: 'Brewer`s yeast 120 capsules x 300 mg'
        },
        {
            bg: 'Съставки в 1 капсула: 300mg бирена мая (Saccharomyces Cerevisiae), обвивка на капсулата: желиращ агент пулулан (Е1204).  ХРАНИТЕЛНА ДОБАВКА 100% вегетарианска. Без наночастици. Без ГМО. Съдържа глутен. Препоръчителен дневен прием: 4 капсули дневно с чаша вода.   Дневният прием осигурява (4 капсули): 1200mg бирена мая. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина.',
            en: 'Ingredients in 1 capsule: 300mg brewer`s yeast (Saccharomyces Cerevisiae), capsule shell: gelling agent pullulan (E1204). NUTRITIONAL SUPPLEMENT 100% vegetarian. No nanoparticles. GMO free. Contains gluten. Recommended daily intake: 4 capsules daily with a glass of water. Daily intake provides (4 capsules): 1200mg brewer\'s yeast. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },
        {
            bg: 'Калций+ 120 капсули',
            en: 'Calcium + 120 capsules'
        },
        {
            bg: 'Съставки в 1 капсула: Кости от РИБА титрувани до 21% калций, Литотамниум (Lithothamnium calcareum) водорасли титрувани до 32% Kалций и 3% Mагнезий, обвивка на капсулата: желиращ агент пулулан (Е1204), морски магнезиев оксид, антислепващ агент: магнезиев стеарат (Е572), Витамин А, Витамин D. ХРАНИТЕЛНА ДОБАВКА Без наночастици. Калций, Магнезий и Витамин D допринасят за поддържането на нормална костна структура. Препоръчителен дневен прием: 3 капсули дневно с чаша вода. Дневният прием осигурява (3 капсули): Кости от РИБА 450mg, от които калций 94,5mg (6,5%*), Литотамниум 450mg, от който Калций 144mg (9,6%*) и Магнезий 13.5mg (5,4%*), Магнезий 43mg (17,2%*), Витамин А 800μg RE (53.3%*), Витамин D 5μg (50%*).  *РКП-Референтни количества за дневен прием. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина.',
            en: 'Ingredients in 1 capsule: FISH bones titrated to 21% calcium, Lithothamnium calcareum algae titrated to 32% Calcium and 3% Magnesium, capsule shell: gelling agent pullulan (E1204), marine magnesium oxide: anti-caking agent (E572), Vitamin A, Vitamin D. NUTRITIONAL SUPPLEMENT Without nanoparticles. Calcium, Magnesium and Vitamin D contribute to the maintenance of normal bone structure. Recommended daily intake: 3 capsules daily with a glass of water. The daily intake provides (3 capsules): FISH bones 450mg, of which calcium 94.5mg (6.5% *), Lithotamnium 450mg, of which Calcium 144mg (9.6% *) and Magnesium 13.5mg (5.4%) *), Magnesium 43mg (17.2% *), Vitamin A 800μg RE (53.3% *), Vitamin D 5μg (50% *). * RCP-Reference quantities for daily intake. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },
        {
            bg: 'Акай 90 бр. х 400 мг',
            en: 'Akay 90 pcs. x 400 mg'
        },
        {
            bg: 'Съставки в 1 капсула: 75% плодове акай на прах* (пюре от акай*, лимонов сок*), глазиращ агент: хидроксипропилметилцелулоза (Е464).  *от контролирано био производство* От плодове Акай на прах. Плодовете са тъмно лилави до черни и растат в Амазонка на палмови дървета (Euterpe oleracea) на около 20м височина. Плодовете се събират на ръка и обработват внимателно. Капсулите Акай на Raab съдържат вторични растителни вещества като полифеноли и антоцианини, които придават оцветяването на плодовете. Raab Vitalfood използва само най-добрите суровини и контролира всички продукти за остатъци и обещаното съдържание на хранителни вещества.  Хранителна добавка с антиоксиданти от плодове акай на прах. Мощно средство за физическа защита на клетките. Множество изследвания показват, че плодовете на акай имат анти- ракови свойства, уникално пречистващо действие върху организма, коригират телесното тегло, разграждайки ненужните мазнини. Акай бери е растение, което съдържа висок процент фибри, витамин А и С, желязо, калций, флавоноиди, както и различни киселини (аспартанова, глутаминова и олеинова). Освен това той е и богат източник на протеини, омега-6 и -9 мастни киселини, които са известни със своята превантивна роля за правилното функциониране на сърдечно-съдовата система. Благопричтни влияния на Акай:  ✓ увеличава енергийните нива ✓ подобрява издръжливостта ✓ подобрява храносмилателната функция ✓ увеличава мускулната маса ✓ прочиства тялото и организма  ✓ облекчава симптомите на депресия ✓ засилва имунната система ✓ осигурява ценни витамини за тялото ✓ подмладява и заздравява кожата ✓ силен противовъзпалителен ефект ✓ подобрява циркулацията на кръвта ✓ мощен антиоксидант  ✓ подобрява мозъчната функция ✓ съдържа високи нива на диетични фибри ✓ влияе добре на съня  ✓ антираково действие ✓ повишава потентността ✓ подобрява сърдечната функция  ✓ подобрява зрителната способност  ✓ предпазва от атеросклероза ✓ облекчава болките в тялото ✓ спомага регулирането на кръвната захар ✓ подобрява работоспособността ✓ забавя процесът на стареене ✓ спомага разграждането на мазнините в тялото  ✓ регулира и нормализира нивата на холестерол*  Акай бери съдържа висок процент фибри, витамин А и С, желязо, калций, флавоноиди, както и различни киселини (аспартанова, глутаминова и олеинова). Освен това акай бери са богат източник на протеини, омега-6 и -9 мастни киселини, които са известни със своята превантивна роля за правилното функциониране на сърдечно-съдовата система. Акай е известен и с богатото си съдържание на антоцианини, подобни на тези в червеното вино, които са изключително полезни за доброто здравословно състояние на организма и са с ясно изразени противоракови свойства. Акай бери има едно от най-високите нива на съдържание на антиоксиданти и е изненадващо добър източник на незаменими мазнини и протеини. В акай бери се съдържа комбинация от мононенаситени мазнини, фибри и фитостероли, комплекс от аминокиселини и микроелементи и др. Мастните киселини в Акай са близки по съдържание с тези на маслините и зехтина, което ги прави богати на мононенаситени мазнини. Препоръчителен дневен прием: 3 капсули дневно с малко течност преди или след хранене. Дневният прием осигурява (3 капсули): Полифеноли 29,7mg, Антоцианини 3,6mg. Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: Добре затворен на сухо и хладно място.',
            en: 'Ingredients in 1 capsule: 75% acai fruit powder * (acai puree *, lemon juice *), glazing agent: hydroxypropylmethylcellulose (E464). * from controlled organic production * From acai fruit powder. The fruits are dark purple to black and grow in the Amazon on palm trees (Euterpe oleracea) at about 20m in height. The fruits are collected by hand and processed carefully. Raab Acai capsules contain secondary plant substances such as polyphenols and anthocyanins, which give the fruit color. Raab Vitalfood uses only the best raw materials and controls all residue products and the promised nutrient content. Food supplement with antioxidants from acai fruit powder. A powerful tool for physical protection of cells. Numerous studies show that acai berries have anti-cancer properties, a unique cleansing effect on the body, correct body weight, breaking down unnecessary fats. Acai berry is a plant that contains a high percentage of fiber, vitamins A and C, iron, calcium, flavonoids, as well as various acids (aspartic, glutamic and oleic). It is also a rich source of protein, omega-6 and -9 fatty acids, which are known for their preventive role in the proper functioning of the cardiovascular system. Beneficial effects of Acai: ✓ increases energy levels ✓ improves endurance ✓ improves digestive function ✓ increases muscle mass ✓ cleanses the body and body ✓ relieves symptoms of depression ✓ strengthens the immune system ✓ provides valuable vitamins for the body ✓ rejuvenates and strengthens the skin ✓ improves blood circulation ✓ powerful antioxidant ✓ improves brain function ✓ contains high levels of dietary fiber ✓ has a good effect on sleep ✓ anti-cancer effect ✓ increases potency ✓ improves heart function ✓ improves vision ✓ protects against atherosclerosis регули regulates ✓ relieves pain blood sugar ✓ improves performance ✓ slows down the aging process ✓ helps break down body fat ✓ regulates and normalizes cholesterol levels * Acai berry contains a high percentage of fiber, vitamins A and C, iron, calcium, flavonoids and various acids (aspartic acid, glutamino and oleic). In addition, acai berry is a rich source of protein, omega-6 and -9 fatty acids, which are known for their preventive role in the proper functioning of the cardiovascular system. Acai is also known for its rich content of anthocyanins, similar to those in red wine, which are extremely useful for good health and have pronounced anti-cancer properties. Acai berry has one of the highest levels of antioxidants and is a surprisingly good source of essential fats and proteins. Acai berry contains a combination of monounsaturated fats, fiber and phytosterols, a complex of amino acids and trace elements and more. The fatty acids in Acai are similar in content to those of olives and olive oil, which makes them rich in monounsaturated fats. Recommended daily intake: 3 capsules daily with some liquid before or after meals. Daily intake provides (3 capsules): Polyphenols 29.7 mg, Anthocyanins 3.6 mg. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: Well closed in a dry and cool place. '
        },
        {
            bg: 'Хитозан 60 капсули',
            en: 'Chitosan 60 capsules'
        },
        {
            bg: 'Съставки в 1 капсула: хитозан 500mg, Витамин В1 0,62mg, Витамин В2 (рибофлавин) 0,62mg, Витамин В6 0,62mg, фолиева киселина (Витамин В9) 88µg, Витамин В12 1,3µg, Витамин С 31,25mg, материал на пълнителя: царевично нишесте. Твърда желатинова капсула. ХРАНИТЕЛНА ДОБАВКА с хитозан на прах и витамини. Не съдържа глутен, фруктоза и лактоза. Хитозан е естествено влакно, извлечено от черупките на раци и миди. Специалната комбинация от хитозан и витамини намаляват приема на мазнини от храната. Витамин С неутрализира свободните радикали и антиоксиданти от околната среда токсини и химически добавки в храната. Важен е за борбата с инфекциите, съсирването на кръвта и общия метаболизъм. Препоръчителен дневен прием: 3 пъти на ден по 1 капсула. Препоръчителния дневен прием (3 капсули) съдържа: хитозан 1500mg, Витамин В1 1,86mg/100%*, Витамин В2 (рибофлавин) 1,86mg/93%*, Витамин В6 1,86mg/75%*, фолиева киселина (Витамин В9) 264µg/100%*, Витамин В12 3,9µg/300%*, Витамин С 93,75mg/125%*. *ПДП - минимален препоръчителен дневен прием, според Наредбата за етикетиране на храните. Забележка: Препоръчителният дневен прием не трябва да бъде превишаван. Продуктът не трябва да се използва като заместител на балансираното и разнообразно хранене и здравословен начин на живот. Съхранявайте на недостъпно място за малки деца. Съхранение: На хладно, сухо и защитено от светлина място. Нето тегло: 37,9g',
            en: 'Ingredients in 1 capsule: chitosan 500mg, Vitamin B1 0.62mg, Vitamin B2 (riboflavin) 0.62mg, Vitamin B6 0.62mg, folic acid (Vitamin B9) 88µg, Vitamin B12 1.3µg, Vitamin C 31.25mg, material of the filler: corn starch. Hard gelatin capsule. NUTRITIONAL SUPPLEMENT with chitosan powder and vitamins. Free of gluten, fructose and lactose. Chitosan is a natural fiber extracted from the shells of crabs and mussels. The special combination of chitosan and vitamins reduces the intake of fat from food. Vitamin C neutralizes free radicals and antioxidants from the environment toxins and chemical additives in food. It is important for fighting infections, blood clotting and overall metabolism. Recommended daily intake: 1 capsule 3 times a day. The recommended daily intake (3 capsules) contains: chitosan 1500mg, Vitamin B1 1.86mg / 100% *, Vitamin B2 (riboflavin) 1.86mg / 93% *, Vitamin B6 1.86mg / 75% *, folic acid (Vitamin B9 ) 264µg / 100% *, Vitamin B12 3.9µg / 300% *, Vitamin C 93.75mg / 125% *. * RDA - minimum recommended daily intake, according to the Ordinance on food labeling. Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a balanced and varied diet and a healthy lifestyle. Keep out of reach of small children. Storage: In a cool, dry and protected from light place. Net weight: 37.9g'
        },
        {
            bg: 'Цинк + В6 - 60 капсули',
            en: 'Zinc + B6 - 60 capsules'
        },
        {
            bg: 'Съставки в 1 капсула: Цинков глюконат, обвивка на капсулата: желиращ агент пулулан (Е1204), пълнител: микрокристална целулоза (Е460), малтодекстрин, естествен Витамин Е, антислепващи агенти: магнезиев стеарат и силициев диоксид, Витамин В6. ХРАНИТЕЛНА ДОБАВКА 100% вегетариански. Без наночастици. Спомага за гъвкавостта на кожата, участва в синтеза на колаген и кератин. Цинкът подпомага за поддържане на нормални коса, нокти и кожа. Препоръчителен дневен прием: 1 капсула дневно с чаша вода. Дневният прием осигурява (1 капсула): Цинк 14,4mg (96%*), Витамин Е (E307) 3,5mg α-ТЕ (3,5%*), Витамин В6 2mg (20%*). *РКП-Референтни количества за дневен прием* Забележка: Препоръчителният дневен прием не трябва да бъде надвишаван. Продуктът не трябва да се използва като заместител на разнообразното и рационално хранене. Деца под 18 години, бременни и кърмещи жени трябва да се консултират със специалист преди употреба. Съхранявайте на място недостъпно за деца. Съхранение: На сухо място, далече от източници на топлина.',
            en: 'Ingredients in 1 capsule: Zinc gluconate, capsule shell: gelling agent pullulan (E1204), filler: microcrystalline cellulose (E460), maltodextrin, natural Vitamin E, anti-caking agents: magnesium stearate and silicon dioxide, Vitamin B6. NUTRITIONAL SUPPLEMENT 100% vegetarian. No nanoparticles. Helps skin flexibility, participates in the synthesis of collagen and keratin. Zinc helps maintain normal hair, nails and skin. Recommended daily intake: 1 capsule daily with a glass of water. Daily intake provides (1 capsule): Zinc 14.4 mg (96% *), Vitamin E (E307) 3.5 mg α-TE (3.5% *), Vitamin B6 2 mg (20% *). * RCP-Reference daily intake amounts * Note: The recommended daily intake should not be exceeded. The product should not be used as a substitute for a varied and rational diet. Children under 18, pregnant and lactating women should consult a specialist before use. Keep out of reach of children. Storage: In a dry place, away from heat sources.'
        },


    ];


    $('.translate_wrapper').on('click', function () {


        localStorage.setItem('language', JSON.stringify($('.current_lang').text().replace(/\s/g, '')));

    });


});
