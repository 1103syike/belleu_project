document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM 加載完成，可以操作 DOM');
    const wrapper = document.getElementsByClassName('advert_swiper_wrapper')[0]
    const images = document.getElementsByClassName('advert_swiper_wrapper_img')
    console.log(document.getElementsByClassName('advert_swiper_wrapper_img'))
    const next = document.getElementsByClassName('advert_swiper_button_next')[0]
    const prev = document.getElementsByClassName('advert_swiper_button_prev')[0]

    next.addEventListener('click', nextSwiper)

    function nextSwiper() {
        wrapper.append(images[1], images[2],images[3], images[0])
    }
});