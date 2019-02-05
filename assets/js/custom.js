$(document).ready(function () {
    $('#mainCarousel').carousel({
        keyboard: false,
        pause: false
    });

    $('#overlayCarousel').carousel();

    // Closes the sidebar menu
    $('#menu-close').click(function (e) {
        e.preventDefault();
        $('#sidebar-wrapper').toggleClass('active');
    });

    // Opens the sidebar menu
    $('#menu-toggle').click(function (e) {
        e.preventDefault();
        $('#sidebar-wrapper').toggleClass('active');
    });

    $('#btn-menu').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeToggle(200);
        $(this).find('.fa').toggleClass('fa-bars').toggleClass('fa-times');
        $(this).toggleClass('btn-menu-open').toggleClass('btn-menu-close');
    });
});