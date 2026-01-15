document.addEventListener('DOMContentLoaded', () => {

    const slides = [
        { id: 1, name: '輪播圖-1', srcLeft: './image/page/index/swiper--hero__img-1--left.jpg', srcRight: './image/page/index/swiper--hero__img-1--right.jpg' },
        { id: 2, name: '輪播圖-2', srcLeft: './image/page/index/swiper--hero__img-2--left.jpg', srcRight: './image/page/index/swiper--hero__img-2--right.jpg' },
        { id: 3, name: '輪播圖-3', srcLeft: './image/page/index/swiper--hero__img-3--left.jpg', srcRight: './image/page/index/swiper--hero__img-3--right.jpg' },
        { id: 4, name: '輪播圖-4', srcLeft: './image/page/index/swiper--hero__img-4--left.jpg', srcRight: './image/page/index/swiper--hero__img-4--right.jpg' },
        { id: 5, name: '輪播圖-5', srcLeft: './image/page/index/swiper--hero__img-5--left.jpg', srcRight: './image/page/index/swiper--hero__img-5--right.jpg' }
    ]
    const $ = (s) => document.querySelector(s)

    const swiperWrapper = $('.swiper-wrapper--hero')
    swiperWrapper.innerHTML = slides.map(p => `
    <div class="swiper-slide"><img class="swiper__img swiper__img--left" src="${p.srcLeft}"><img class="swiper__img swiper__img--right" src="${p.srcRight}"></div>
    
    `).join('')

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
