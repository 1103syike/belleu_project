document.addEventListener('DOMContentLoaded', function () {

    const slides = [
        { id: 1, name: '輪播圖-1', src: '../image/page/index/swiper/swiper(1).png' },
        { id: 2, name: '輪播圖-2', src: '../image/page/index/swiper/swiper(2).png' },
        { id: 3, name: '輪播圖-3', src: '../image/page/index/swiper/swiper(3).png' },
        { id: 4, name: '輪播圖-4', src: '../image/page/index/swiper/swiper(4).png' }
    ]

    let currentSlideNumber = 0
    let nextSlideNumber = 1
    let prevSlideNumber = 3

    // 捕捉元件的容器。
    const currentSlide = document.getElementsByClassName("swiper__img--current")[0];
    const prevSlide = document.getElementsByClassName("swiper__img--prev")[0];
    const nextSlide = document.getElementsByClassName("swiper__img--next")[0];

    // 灌入預設的圖片。
    currentSlide.src = slides[currentSlideNumber].src;
    prevSlide.src = slides[prevSlideNumber].src;
    nextSlide.src = slides[nextSlideNumber].src;

    // 捕捉按鈕。
    const next_btn = document.getElementsByClassName('swiper__btn--next')[0];
    const prev_btn = document.getElementsByClassName('swiper__btn--prev')[0];


    next_btn.addEventListener('click', () => {
        imgSetting()
        SlideNumberPlusOne()
        slideNext()
        startAutoPlay()
        renewActiveDot()
        disabledAddDots()
        setTimeout(() => {
            currentImgSetting()
        }, 400);
    })
    prev_btn.addEventListener('click', () => {
        imgSetting()
        SlideNumberMinusOne()
        slidePrev()
        startAutoPlay()
        renewActiveDot()
        disabledAddDots()
        setTimeout(() => {
            currentImgSetting()
        }, 400);
    })

    function SlideNumberPlusOne() {
        const len = slides.length
        currentSlideNumber = (currentSlideNumber + 1) % len
        prevSlideNumber = (currentSlideNumber - 1 + len) % len
        nextSlideNumber = (currentSlideNumber + 1) % len
    }

    function SlideNumberMinusOne() {
        const len = slides.length
        currentSlideNumber = (currentSlideNumber - 1 + len) % len
        prevSlideNumber = (currentSlideNumber - 1 + len) % len
        nextSlideNumber = (currentSlideNumber + 1) % len
    }

    // 放置圖片

    function imgSetting() {
        prevSlide.src = slides[prevSlideNumber].src;
        nextSlide.src = slides[nextSlideNumber].src;
    }

    function currentImgSetting() {
        currentSlide.src = slides[currentSlideNumber].src;
    }

    const mask = document.getElementsByClassName('swiper__mask')[0];

    // nextSlide滑動特效
    function slideNext() {
        nextSlide.style.transform = 'translateX(0)';
        nextSlide.style.transition = 'transform 0.4s ease';
        next_btn.disabled = true;
        prev_btn.disabled = true;
        mask.style.display = "block";
        setTimeout(() => {
            nextSlide.style.transition = 'none';
            nextSlide.style.transform = 'translateX(100%)';
            next_btn.disabled = false;
            prev_btn.disabled = false;
            mask.style.display = "none";
        }, 400);
    }

    function slidePrev() {
        prevSlide.style.transform = 'translateX(0)';
        prevSlide.style.transition = 'transform 0.4s ease';
        next_btn.disabled = true;
        prev_btn.disabled = true;
        mask.style.display = "block";
        setTimeout(() => {
            prevSlide.style.transition = 'none';
            prevSlide.style.transform = 'translateX(-100%)';
            next_btn.disabled = false;
            prev_btn.disabled = false;
            mask.style.display = "none";
        }, 400);
    }

    let autoPlayer = null;

    function startAutoPlay() {
        clearTimeout(autoPlayer);
        autoPlayer = setTimeout(() => {
            slideNext();
            imgSetting()
            startAutoPlay();
            SlideNumberPlusOne()
            renewActiveDot()
            disabledAddDots()
            setTimeout(() => {
                currentImgSetting()
            }, 400);
        }, 5000);
    };

    startAutoPlay();

    const swiper_pagination = document.getElementsByClassName('swiper__pagination')[0];
    const swiper_dot = document.createElement('button');
    swiper_dot.className = 'swiper__dot'
    swiper_pagination.appendChild(swiper_dot)
    swiper_pagination.innerHTML = slides.map(p => `
            <button class="swiper__dot" id="swiper__dot__${p.id}"></button>
        `).join('');

    const swiper_dots = document.getElementsByClassName('swiper__dot');

    function renewActiveDot() {
        for (let i = 0; i < slides.length; i++) {
            swiper_dots[i].classList.remove('swiper__dot--active')
        }
        swiper_dots[currentSlideNumber].classList.add('swiper__dot--active')
    }

    function disabledAddDots() {
        for (let i = 0; i < slides.length; i++) {
            swiper_dots[i].disabled = true
        }
        setTimeout(() => {
            for (let i = 0; i < slides.length; i++) {
                swiper_dots[i].disabled = false
                swiper_dots[currentSlideNumber].disabled = true
            }
        }, 400);
    }
    renewActiveDot()

    for (let i = 0; i < slides.length; i++) {
        swiper_dots[i].addEventListener('click', () => {
            let len = slides.length
            // currentSlideNumber = i
            // prevSlideNumber = (i - 1 + len) % len
            nextSlideNumber = i
            imgSetting()
            slideNext()
            startAutoPlay()
            currentSlideNumber = i
            prevSlideNumber = (i - 1 + len) % len
            nextSlideNumber = (i + 1) % len
            renewActiveDot()
            disabledAddDots()
            for (let i = 0; i < slides.length; i++) {
                swiper_dots[i].classList.remove('swiper__dot--active')
            }
            setTimeout(() => {
                currentImgSetting()
                console.log('改圖')
            }, 400);
        }
        )
    }
});