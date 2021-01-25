// jQuery.page2page !!


$('#id') // обращение по идентификатору (id) 1
$('.class') // обращение по class (class) несолько

$('div') // обращение по тегу
$('a#id') // обращение по тегу
$('a.active') // обращение по тегу

$('*') // обращение ко всем элементам
$('.active *') // обращение ко всем элементам


// взаимодействие с элементами 

$('h2, p').css('border', '1px solid #000'); // первый, второй, третий
$('h2 > p') // outer и inner (только в h2)
$('h2  p') // outer и inner (ко всем)
$('h2 + p').css('border', '1px solid #000'); //prev + next который идет после h2, выделяется только p
$('h2 ~ p').css('border', '1px solid #000'); //prev ~ next который идет ко всем p !!!


// по атрибутам !!

$('a[href]').css('border', '1px solid #000'); // простой атрибут
$('a[download]').css('border', '1px solid #000'); // простой атрибут
$('a[href="#"]').css('border', '1px solid #000'); // полное соотвествие
$('a[href!="#"]').css('border', '1px solid #000'); // полное несоотвествие
$('a[href^="http://"]').css('border', '1px solid #000'); // начинается с ...
$('a[href$=".com"]').css('border', '1px solid #000'); // заканчивается на ...
$('a[href*="ya"]').css('border', '1px solid #000'); // содержит ...
$('a[data-target|="main"]').css('border', '1px solid #000'); // имеет префикс ...
$('a[href][download]').css('border', '1px solid #000'); // имеет одновременно несколько атрибутов


// фильтры

// простые фильтры
$('p:first').css('border', '1px solid #000'); // первый элемент
$('p:last').css('border', '1px solid #000'); // последний элемент
$('a:eq(0)').css('border', '1px solid #000'); // эл под номером
$('*:not(h2,p)').css('border', '1px solid #000'); // искл из данных эл selector
$('li.odd').css('border', '1px solid #000'); // четный эл
$('li:even').css('border', '1px solid #000'); // не четный эл
$('li:gt(2)').css('border', '1px solid #000'); // эл чей порядковый номер больше n (с 0)
$('li:lt(3)').css('border', '1px solid #000'); // эл чей порядковый номер vtymie n (с 0)
$('*:header').css('border', '1px solid #000'); // заголовки 
$('p:animated').css('border', '1px solid #000'); // только анимация
$('p:hidden').css('border', '1px solid #000'); // скрытые элементы
$('p:vissible').css('border', '1px solid #000'); // видимые эл
$('p:lang(en)').css('border', '1px solid #000'); // по языку фильтр

// фильтры по содержимому
$('p:contains(Llorem)').css('border', '1px solid #000'); // содержит текст
$('p:empty').text('Любой текст'); // пустой
$('h2:has(span)').css('border', '1px solid #000'); // имеет внутри себя селектор
$('span:parent').css('border', '1px solid #000'); // обращ к родителю


// фильтры по форме

$('input').css('border', '1px solid #000'); // все поля инпут
$('input:button').css('border', '1px solid #000'); // поле button простая кнопка
$('input:radio').css('border', '1px solid #000'); // radio кнопки
$('input:checkbox').css('border', '1px solid #000'); // checkbox
$('input:text').css('border', '1px solid #000'); // текстовы поля для ввода
$('input:password').css('border', '1px solid #000'); // поле для ввода пароля
$('input:file').css('border', '1px solid #000'); // поле для загрузки файла
$('input:submit').css('border', '1px solid #000'); // кнопка отправить
$('input:reset').css('border', '1px solid #000'); // кнопка сбросить
$('input:image').css('border', '1px solid #000'); // поле картинка 
$('input:focus').css('border', '1px solid #000'); // выбранная кнопка (фокус состояние)
$('input:checked').css('border', '1px solid #000'); // фокус радио или чекбокс
$('input:enabled').css('border', '1px solid #000'); // доступное поле
$('input:disabled').css('border', '1px solid #000'); // недоступное поле




// События мыши !!!

$('button').click(function() {
    console.log('Кнопка кликнута !');
}); // клик мышью 

$('button').dblclick(function() {
    console.log('Кнопка кликнута 2 !');
}); // 2 клик мышью 

$('ul li').mouseenter(function() {
    $(this).css('color', 'red');
}); // наезжает на эл

$('ul li').mousedown(function() {
    $(this).css('color', 'red');
}); // момент нажатия кнопки мыши
$('ul li').mouseup(function() {
    $(this).css('color', '#fff');
}); // момент отжатия кнопки мыши

$('ul li').mouseover(function() {
    $(this).css('color', 'red');
}); // мышь наезжает на площадь эл

$('ul li').mouseout(function() {
    $(this).css('color', '#fff');
}); // мышь покидает площадь эл

$('ul li').mousemove(function() {
    $(this).css('color', 'red');
}); // дижение мыши над элементом


// События клавиатуры !!!

$('input').keydown(function() {
    console.log($(this).val());
}); // клавиша в зажатом состоянии

$('input').keydown(function() {
    console.log($(this).val());
}); // клавиша не в зажатом состоянии

$('input').keypress(function(eventObject) {
    console.log(eventObject.which);
}); // ввод символа с клавиатруы



// События браузера и страницы

$(document).ready(function() {
    $('p').text('DOM загружен');
}); // готовность DOM

$(window).load(function() {

}); // полная загрузка страницы

$(window).unload(function() {

}); // выход со страницы

$(window).resize(function() {
    console.log('окно изменилось');
}); // изменение размера (например, окна)

$(window).scroll(function() {
    console.log('страница прокручена');
}); // прокрутка эл (скролл)


// Базовые события !

$('ul').on('click', 'li', function() {
    $('ul').append('<li>Доп эл</li>');
});


function addAndStop(e) {
    $('ul').append('<li>Доп эл</li>');
    $('ul').off('click');
}

$('ul').on('click', 'li', addAndStop());



// Переменные и их данные

let message = 'Привет !';
let user = 'admin';
let age = 42;

console.log(message, user, age);