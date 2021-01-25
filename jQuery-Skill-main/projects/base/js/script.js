$(document).ready(function() {
    $('input.form-control').css('border', '1px solid red');
    $('input:button').css('border', '1px solid red').css('background-color', 'yellow');
    $('input:radio[name="radio"]').css('display', 'block'); // radio кнопки

    /* $('input').keydown(function() {
        console.log($(this).val().length);
    }); // длина инпута
 */



    $('#createButton').on('click', add);

    function add() {
        $('body').append('<button type="button" id="db">удалить кнопку</button>');
        $('body').append('<img class="avatar" id="avatar" src="../portfolio/img/avatar-1.JPG" alt="Картинка не загружена">');
        $('#createButton').off('click');

        $('#avatar').delay(2000).queue(function() {
            $('#avatar').attr('alt', 'Картинка загружена');
        });

        $('#db').on('click', del);

        function del() {
            $('#db').remove();
            $('#avatar').remove();
            $('#createButton').on('click', add);
        }
    }



    $('#sendC').on('click', function() {
        let user = {
            name: $('.form input#name').val(),
            sname: $('.form input#sname').val()
        }
        console.log(user.name + ', ' + user.sname);
    });

});