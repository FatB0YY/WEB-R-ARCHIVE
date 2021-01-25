$(document).ready(function() {
    let slideNow = 1;
    let slideCount = $('.slider-wrapper').children().length;
    let navBtn = $('.slide-nav');

    navBtn.click(navSlider);









    function navSlider() {
        navBtn = $(this).index();
        $('.active').removeClass('active');
        $(this).toggleClass('active');
        if (navBtn + 1 != slideNow) {
            let translateWidth = -$('.viewport').width() * (navBtn);
            $('.slider-wrapper').css({
                'transform': 'translate(' + translateWidth + 'px,0)',
                '-o-transform': 'translate(' + translateWidth + 'px,0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px,0)',
                '-moz-transform': 'translate(' + translateWidth + 'px,0)'
            });
            slideNow = navBtn + 1;
        }
    }


    $('.btn-next').click(nextSlide);
    $('.btn-prev').click(prevSlide);


    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('.slider-wrapper').css({
                'transform': 'translate(0,0)',
                '-o-transform': 'translate(0,0)',
                '-webkit-transform': 'translate(0,0)',
                '-moz-transform': 'translate(0,0)'
            });
            slideNow = 1;
        } else {
            let translateWidth = -$('.viewport').width() * (slideNow);
            $('.slider-wrapper').css({
                'transform': 'translate(' + translateWidth + 'px,0)',
                '-o-transform': 'translate(' + translateWidth + 'px,0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px,0)',
                '-moz-transform': 'translate(' + translateWidth + 'px,0)'
            });
            slideNow++;
        }



    }

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            let translateWidth = -$('.viewport').width() * (slideCount - 1);
            $('.slider-wrapper').css({
                'transform': 'translate(' + translateWidth + 'px,0)',
                '-o-transform': 'translate(' + translateWidth + 'px,0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px,0)',
                '-moz-transform': 'translate(' + translateWidth + 'px,0)'
            });
            slideNow = slideCount;
        } else {
            let translateWidth = -$('.viewport').width() * (slideNow - 2);
            $('.slider-wrapper').css({
                'transform': 'translate(' + translateWidth + 'px,0)',
                '-o-transform': 'translate(' + translateWidth + 'px,0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px,0)',
                '-moz-transform': 'translate(' + translateWidth + 'px,0)'
            });
            slideNow--;
        }



    }








});