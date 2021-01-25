$(document).ready(function() {
    let mCount = $('.m-count');
    let floorNumber = $('.floor-number');
    let typeOfHouse = $('input[name="typeOfHouse"]').val();
    let project = $('input[type="checkbox"]');
    let price = $('#price');
    let design = 0;
    let basePrice = 30000;
    let finalPrice = 900000;

    mCount.change(function() {
        if ($(this).val() > 20) {
            $(this).tooltip('destroy');

            finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
            price.text(finalPrice);

        } else {
            $(this).tooltip('toggle');
        }

    });

    floorNumber.change(function() {
        finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
        price.text(finalPrice);

    });

    $('input[name="typeOfHouse"]').change(function() {
        typeOfHouse = $(this).val();
        finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
        price.text(finalPrice);

        if ($(this).val() == 1) {
            $('img').attr('src', 'img/1.jpg');
        } else {
            $('img').attr('src', 'img/2.png');
        }

    });

    project.change(function() {
        if ($(this).is(':checked')) {
            design = 150000;

            finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
            price.text(finalPrice);
        } else {
            design = 0;

            finalPrice = (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
            price.text(finalPrice);
        }

    });

    price.text('900000');
});