$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        nav: true,
        navText: ['', ''],
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });


    var individual_price_table = $('.switcher').find('.starter');
    var company_price_table = $('.switcher').find('.pro');


    $('.switch-toggles').find('.individual').addClass('active');
    $('.switcher').find('.starter').addClass('active');

    $('.switch-toggles').find('.individual').on('click', function () {
        $(this).addClass('active');
        $('.switch-toggles').removeClass('active');
        $(this).siblings().removeClass('active');
        individual_price_table.addClass('active');
        company_price_table.removeClass('active');
    });

    $('.switch-toggles').find('.company').on('click', function () {
        $(this).addClass('active');
        $('.switch-toggles').addClass('active');
        $(this).siblings().removeClass('active');
        company_price_table.addClass('active');
        individual_price_table.removeClass('active');
    });


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) $('header').addClass('sticky');
        else $('header').removeClass('sticky');
    });


    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    );
    wow.init();

    $(document).ready(function () {
        $("nav").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - 180;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });


    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});