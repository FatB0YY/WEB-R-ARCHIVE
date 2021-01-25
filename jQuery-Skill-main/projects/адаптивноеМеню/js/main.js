/* Делаем адаптивное меню на jQuery */

$(function() {
    let menuLink = $('.menu-link');
    let menu = $('menu');
    let navLink = $('li a');
    let shadow = $('.shadow');
    let body = $('body');
    let listLink = $('.list-link');

    menuLink.click(function() {
        menu.toggleClass('active-menu');
        shadow.toggleClass('active');
        menuLink.toggleClass('active');
        body.toggleClass('lock');





        $.each($('.list-link'), function(i, el) {
            setTimeout(function() {
                $(el).toggleClass('active');
            }, 100 + (i * 100));
        });
    });


    navLink.on('click', function(event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html,body').animate({ scrollTop: top }, 500)
        menu.toggleClass('active-menu');
        shadow.toggleClass('active');
        body.toggleClass('lock');
        menuLink.toggleClass('active');

        setTimeout(function() {
            listLink.removeClass('active');
        }, 100);

    });


});