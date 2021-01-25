$(document).ready(function () {
    $('.icon-menu').click(function (event) {
        $('.icon-menu,.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });


    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
    });

    const tab = $(".tab");

    tab.on("click", function () {
        tab.removeClass("active");
        $(this).toggleClass("active");
        let activeTabContent = $(this).attr("data-target");
        $(".tabs-content").removeClass("visible");
        $(activeTabContent).toggleClass("visible");
    });

});





