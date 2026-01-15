document.addEventListener('DOMContentLoaded', function () {

    const headerType = document.body.dataset.header;
    console.log(headerType)

    // HTML
    const header = document.createElement("header");
    header.className = 'header'
    header.classList.add(`header--${headerType}`)
    header.innerHTML = `
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item "><a class="nav__link nav__link--logo" href="./index.html">BELLEU</a></li>
                <li class="nav__item "><a class="nav__link" href="">熱門商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">最新商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">買一送一</a></li>
                <li class="nav__item "><a class="nav__link" href="">所有商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">登入</a></li>
                <li class="nav__item "><a class="nav__link" href="">註冊</a></li>
            </ul>
        </nav>
        <nav class="mobile-nav">
            <ul class="mobile-nav__list">

                <li class="mobile-nav__item "><a class="mobile-nav__link mobile-nav__link--logo"
                        href="./index.html">BELLEU</a></li>
                <li class="mobile-nav__item ">
                    <button class="mobile-nav__hamburger">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
        </nav>
        <div class="hamburger__mask"></div>

        <nav class="hamburger">
            <ul class="hamburger__list">
                <li class="hamburger__item "><a class="hamburger__link" href="./index.html">首頁</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">熱門商品</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">最新商品</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">買一送一</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">所有商品</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">登入</a></li>
                <li class="hamburger__item "><a class="hamburger__link" href="">註冊</a></li>
            </ul>
        </nav>
    `

    document.body.appendChild(header);


    // JavaScript
    const sticky = header.offsetTop;

    function myFunction() {
        if (window.scrollY > 0) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }
    window.addEventListener('scroll', myFunction);

    const hamburgerBtn = document.getElementsByClassName('mobile-nav__hamburger')[0]
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const hamburgerMask = document.getElementsByClassName('hamburger__mask')[0]

    hamburgerBtn.addEventListener('click', () => {
        hamburgerMask.style.display = "block";
        hamburger.style.display = 'block'
        hamburger.style.transform = 'translateX(0%)'
    })

    hamburgerMask.addEventListener('click', () => {
        hamburgerMask.style.display = "none";
        hamburger.style.transform = 'translateX(-100%)'
    })


})