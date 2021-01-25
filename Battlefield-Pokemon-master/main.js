const firstRow = 'Мама мыла руки'
const secondRow = 'Собака друг человека'
let firstRowLong = 0
let secondRowLong = 0

function getRow(firstRow, secondRow) {

    for (let i = 0; i <= firstRow.length; i++) {
        if (firstRow.charAt(i) === 'а') {
            firstRowLong += 1
        }
    }

    for (let i = 0; i <= secondRow.length; i++) {
        if (secondRow.charAt(i) === 'а') {
            secondRowLong += 1
        }
    }
    if (firstRowLong > secondRowLong) {
        console.log('Больше букв "а" в первой строчке')
    } else if (firstRowLong < secondRowLong) {
        console.log('Больше букв "а" во второй строчке')
    } else {
        console.log('Количество "а" одинакого')
    }
}
getRow(firstRow, secondRow)



let phone = '+71234567890'
let arr = phone.split('')

function formatedPhone(phone) {
    arr[1] = arr[1] + ' ' + '('
    arr[4] = arr[4] + ')' + ' '
    arr[7] = arr[7] + '-'
    arr[9] = arr[9] + '-'
    let number = arr.join('')
    console.log(number)
}
formatedPhone(arr)



const $btnAttack = document.getElementById('btn-kick')
const $btnHealth = document.getElementById('btn-health')

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmarder',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btnAttack.addEventListener('click', function () {
    console.log('Attack')
    chancheHP(random(0, 20), character)
    chancheHP(random(0, 20), enemy)
})
$btnHealth.addEventListener('click', function () {
    console.log('Health')
    chacheHPHealth(random(20, 50), character)
    chacheHPHealth(random(20, 50), enemy)
})

function init() {
    console.log('Start Game !')
    renderHP(character)
    renderHP(enemy)
}


function renderHP(person) {
    renderHPlife(person)
    renderProgressbarHP(person)
}

function renderHPlife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%'
}

function chancheHP(count, person) {
    if (person.damageHP <= count) {
        person.damageHP = 0
        alert('Бедный ' + person.name + ' проиграл бой !')
        $btnAttack.disabled = true
        $btnHealth.disabled = true
    } else {
        person.damageHP -= count
    }
    renderHP(person)
}

function chacheHPHealth(count, person) {
    if ((person.damageHP + count) > person.defaultHP) {
        person.damageHP = person.defaultHP
        $btnHealth.disabled = true
    } else {
        person.damageHP += count
        $btnHealth.disabled = true
    }
    renderHP(person)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

init()

