
$(document).ready(function(){
    if($('.slideshow-container').length){
        $('.slideshow-container').slick({
            infinite: true,
            autoplay: true,
            dots: true,
            arrows: true,
            autoplaySpeed: 4000
        });
    }

    $('.list-hours li').eq(new Date().getDay()-1).addClass('today');


    $('a.nav-link[href="'+window.location.href.split('/').pop()+'"]').css('color','#e6a756');
    $('a.dropdown-toggle[href="'+window.location.href.split('/').pop()+'"]').css('color','#e6a756');
});









