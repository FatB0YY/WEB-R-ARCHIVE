$(document).ready(function() {
    $('#card-holder').on('keyup change', function() {
        $('.card-holder div').text($(this).val());
    });

    $('#card-expiration-month').change(function() {
        $('.month').text($(this).val() + '/');
    });
    $('#card-expiration-year').change(function() {
        $('.year').text($(this).val());
    });
});