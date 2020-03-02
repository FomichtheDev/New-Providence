$(document).ready(function() {


    // Scroll Events
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        // Activate menu
        if (wScroll > 20) {
            $('#main-nav').addClass('active');
            $('#slide_out_menu').addClass('scrolled');
        } else {
            $('#main-nav').removeClass('active');
            $('#slide_out_menu').removeClass('scrolled');
        }
        ;


        //Scroll Effects

    });


    // Navigation
    $('#navigation').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('open');
        $('#slide_out_menu').toggleClass('open');

        if ($('#slide_out_menu').hasClass('open')) {
            $('.menu-close').on('click', function (e) {
                e.preventDefault();
                $('#slide_out_menu').removeClass('open');
            })
        }
    });

});