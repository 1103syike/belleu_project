document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementsByClassName('advert_swiper_wrapper')[0];
    const images = document.getElementsByClassName('advert_swiper_wrapper_img');
    const next = document.getElementsByClassName('advert_swiper_button_next')[0];
    const prev = document.getElementsByClassName('advert_swiper_button_prev')[0];
    const mask = document.getElementsByClassName('advert_swiper_wrapper_mask')[0];

    next.addEventListener('click', () => {
        nextSwiper();
        startAutoPlay();
    })

    prev.addEventListener('click', () => {
        prevSwiper();
        startAutoPlay();
    })


    // 進入下一張
    function nextSwiper() {
        mask.style.zIndex = '3';
        images[2].style.transform = 'translateX(-100vw)';
        images[2].style.zIndex = '4';
        next.disabled = true;
        prev.disabled = true;
        setTimeout(() => {
            wrapper.append(images[1], images[2], images[3], images[0])
            images[1].style.transform = 'translateX(0vw)';
            images[1].style.zIndex = '2';
            mask.style.zIndex = '1';
            next.disabled = false;
            prev.disabled = false;
        }, 400);
    }

    // 返回上一張
    function prevSwiper() {
        mask.style.zIndex = '3';
        images[0].style.zIndex = '4';
        images[0].style.transform = 'translateX(100vw)';
        prev.disabled = true;

        setTimeout(() => {
            wrapper.append(images[3], images[0], images[1], images[2]);
            images[1].style.transform = 'translateX(0vw)';
            images[1].style.zIndex = '2';
            mask.style.zIndex = '1';
            prev.disabled = false;
        }, 400);
    }


    let autoPlayer = null;

    function startAutoPlay() {
        clearTimeout(autoPlayer);
        autoPlayer = setTimeout(() => {
            nextSwiper();
            startAutoPlay();
        }, 5000);
    };

    startAutoPlay();
});