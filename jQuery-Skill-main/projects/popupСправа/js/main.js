$(document).ready(function() {
    let modal = $('.popup'),
        overlay = $('.overlay'),
        link = $('button[data-popup="true"]'),
        close = $('.close-btn');

    close.click(function() {
        modal.toggleClass('popup_active');
        overlay.hide();
    });


    link.on('click', function() {
        overlay.show();
        modal.toggleClass('popup_active');


        overlay.on('click', function() {
            overlay.hide();
            modal.removeClass('popup_active');
        })
    });

}); // Много кнопок - одно окно