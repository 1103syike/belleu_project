document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementsByClassName('swiper_track')[0];

    const slides = [
        { id: 1, name: '輪播圖-1', src: '../image/page/index/swiper/swiper(1).png' },
        { id: 2, name: '輪播圖-2', src: '../image/page/index/swiper/swiper(2).png' },
        { id: 3, name: '輪播圖-3', src: '../image/page/index/swiper/swiper(3).png' },
        { id: 4, name: '輪播圖-4', src: '../image/page/index/swiper/swiper(4).png' }
    ]

    let currentSlideNumber = 0
    let nextSlideNumber = 1
    let prevSlideNumber = 3

    // 設定當前、上張、下張投影片的號碼，預設。
    // let currentSlideObject = slides[0]; //  第一張
    // let prevSlideObject = slides[3];    //  第四張
    // let nextSlideObject = slides[1];    //  第二張

    // 捕捉元件的容器。
    const currentSlide = document.getElementsByClassName("currentIndex")[0];
    const prevSlide = document.getElementsByClassName("prevIndex")[0];
    const nextSlide = document.getElementsByClassName("nextIndex")[0];

    // 灌入預設的圖片。
    currentSlide.src = slides[currentSlideNumber].src;
    prevSlide.src = slides[prevSlideNumber].src;
    nextSlide.src = slides[nextSlideNumber].src;

    // 捕捉按鈕。
    const next_btn = document.getElementsByClassName('swiper_btn--next')[0];
    const prev_btn = document.getElementsByClassName('swiper_btn--prev')[0];


    next_btn.addEventListener('click', () => {
        imgSetting()
        SlideNumberPlusOne()
        slideNext()
        currentImgSetting()
    })
    prev_btn.addEventListener('click', () => {
        imgSetting()
        SlideNumberMinusOne()
        slidePrev()
        currentImgSetting()
    })

    // 
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
        setTimeout(() => {
            currentSlide.src = slides[currentSlideNumber].src;
        }, 400);
    }
    
    // nextSlide滑動特效
    function slideNext() {
        nextSlide.style.transform = 'translateX(0)';
        nextSlide.style.transition = 'transform 0.4s ease';
        setTimeout(() => {
            nextSlide.style.transition = 'none';
            nextSlide.style.transform = 'translateX(100%)';
        }, 400);
    }

    function slidePrev() {
        prevSlide.style.transform = 'translateX(0)';
        prevSlide.style.transition = 'transform 0.4s ease';
        setTimeout(() => {
            prevSlide.style.transition = 'none';
            prevSlide.style.transform = 'translateX(-100%)';
        }, 400);
    }

    // function SlideNumberPlusOne() {
    //     nextSlideNumber = currentSlideNumber + 1;
    //     prevSlideNumber = currentSlideNumber - 1;
    //     console.log('當前投影片是第', currentSlideNumber + 1, '張')
    //     console.log('上張投影片是第', prevSlideNumber + 1, '張')
    //     console.log('下張投影片是第', nextSlideNumber + 1, '張')
    // }

    // const footer = document.createElement("footer")
    // footer.className = 'footer'
    // footer.innerHTML = ``
    // track.body.appendChild(footer)




    // const images = document.getElementsByClassName('swiper_img');

    const mask = document.getElementsByClassName('swiper_mask')[0];

    // next.addEventListener('click', () => {
    //     nextSwiper();
    //     startAutoPlay();
    // })

    // prev.addEventListener('click', () => {
    //     prevSwiper();
    //     startAutoPlay();
    // })


    // // 進入下一張
    // function nextSwiper() {
    //     mask.style.zIndex = '3';
    //     images[2].style.transform = 'translateX(-100vw)';
    //     images[2].style.zIndex = '4';
    //     next.disabled = true;
    //     prev.disabled = true;
    //     setTimeout(() => {
    //         wrapper.append(images[1], images[2], images[3], images[0])
    //         images[1].style.transform = 'translateX(0vw)';
    //         images[1].style.zIndex = '2';
    //         mask.style.zIndex = '1';
    //         next.disabled = false;
    //         prev.disabled = false;
    //     }, 400);
    // }

    // // 返回上一張
    // function prevSwiper() {
    //     mask.style.zIndex = '3';
    //     images[0].style.zIndex = '4';
    //     images[0].style.transform = 'translateX(100vw)';
    //     prev.disabled = true;

    //     setTimeout(() => {
    //         wrapper.append(images[3], images[0], images[1], images[2]);
    //         images[1].style.transform = 'translateX(0vw)';
    //         images[1].style.zIndex = '2';
    //         mask.style.zIndex = '1';
    //         prev.disabled = false;
    //     }, 400);
    // }


    // let autoPlayer = null;

    // function startAutoPlay() {
    //     clearTimeout(autoPlayer);
    //     autoPlayer = setTimeout(() => {
    //         nextSwiper();
    //         startAutoPlay();
    //     }, 5000);
    // };

    // startAutoPlay();
});