$(document).ready(function () {





    $('.icon-menu').click(function (event) {
        $('.icon-menu,.menu-body').toggleClass('active');
        $('body').toggleClass('lock');
        $('.shadow').toggleClass('active');
        $('.list-link').toggleClass('active');
    });


    var instance = new vidbg('.video', {
        mp4: 'img/video/world.mp4',
        webm: 'img/video/world.webm',
        poster: 'img/video/poster.jpg',
        overlay: false,
    });


    var rellax = new Rellax(".rocket", {
        breakpoints: [576]
    });
    var rellax = new Rellax(".mars");

    AOS.init();





});
