'use strict'

const lazyImages = document.querySelectorAll('img[data-src]')
const loadMapBlock = document.querySelector('._load-map')
const windowHeight = document.documentElement.clientHeight
const loadMoreBlock = document.querySelector('._load-more')

let lazyImagesPositions = []

if (lazyImages.length > 0) {
    lazyImages.forEach((img) => {
        if (img.dataset.src) {
            lazyImagesPositions.push(
                //Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
                img.getBoundingClientRect().top + pageYOffset // сумма дает точное положение изображения на странице
                // pageYOffset оно тоже возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх)
            )
            lazyScrollCheck()
        }
    })
}

window.addEventListener('scroll', lazyScroll)

function lazyScroll() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyScrollCheck()
    }
    if (!loadMapBlock.classList.contains('_loaded')) {
        getMap()
    }
    if (!loadMoreBlock.classList.contains('_loaded')) {
        loadMore()
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        (item) => pageYOffset > item - windowHeight
    )
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src
            lazyImages[imgIndex].removeAttribute('data-src')
        }
        delete lazyImagesPositions[imgIndex]
    }
}

function getMap() {
    const loadMapBlockPosition =
        loadMapBlock.getBoundingClientRect().top + pageYOffset
    if (pageYOffset > loadMapBlockPosition - windowHeight) {
        const loadMapUrl = loadMapBlock.dataset.map

        if (loadMapUrl) {
            loadMapBlock.insertAdjacentHTML(
                'beforeend',
                `<iframe style="border:0;" allowfullscreen="" loading="lazy" src="${loadMapUrl}" width="100%" height="500px"></iframe>`
            )
            loadMapBlock.classList.add('_loaded')
            loadMapBlock.removeAttribute('data-map')
        }
    }
}

function loadMore() {
    const loadMoreBlockPosition =
        loadMoreBlock.getBoundingClientRect().top + pageYOffset
    const loadMoreBlockHeight = loadMoreBlock.offsetHeight

    if (
        pageYOffset >
        loadMoreBlockPosition + loadMoreBlockHeight - windowHeight
    ) {
        getContent()
    }
}

async function getContent() {
    if (!document.querySelector('._loading-icon')) {
        loadMoreBlock.insertAdjacentHTML(
            'beforeend',
            `<div class="_loading-icon"></div>`
        )
    }
    loadMoreBlock.classList.add('_loading')

    const urlResponse = 'https://jsonplaceholder.typicode.com/photos/2'

    function sendRequest(method, url, body = null) {
        return fetch(url).then((response) => {
            return response.json()
        })
    }

    let result = await sendRequest('GET', urlResponse)
    console.log(result)
    loadMoreBlock.insertAdjacentHTML(
        'beforeend',
        `
        <div class="block">
            <h3>${result.title}</h3>
            <img src="${result.thumbnailUrl}" alt="img">
        </div>`
    )

    loadMoreBlock.classList.remove('_loading')

    if (document.querySelector('._loading-icon')) {
        document.querySelector('._loading-icon').remove()
    }
}