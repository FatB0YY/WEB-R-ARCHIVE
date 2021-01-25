$(document).ready(function() {
    $(this).keydown(function(e) {
        let key = $(this).find('.key[data-key=' + event.which + ']');
        let audio = $(this).find('audio[data-key=' + event.which + ']')[0];
        key.toggleClass('playing');
        audio.play();
        audio.currentTime = 0;
    });
    $(this).keyup(function(e) {
        let key = $(this).find('.key[data-key=' + event.which + ']');
        key.toggleClass('playing');
    });
});