/* Табы */

$(document).ready(function() {
    let tab = $('a[data-toggle="tab"]');

    tab.on('click', function(event) {
        event.preventDefault();
        $('.active').removeClass('active');
        $(this).parent().toggleClass('active');

        let target = $(this).attr('href');
        $(target).toggleClass('active');
    });
});