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
                <li class="nav__item "><a class="nav__link nav__link--logo" href="/index.html">Belleu</a></li>
                <li class="nav__item "><a class="nav__link" href="">熱門商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">最新商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">買一送一</a></li>
                <li class="nav__item "><a class="nav__link" href="">所有商品</a></li>
                <li class="nav__item "><a class="nav__link" href="">登入</a></li>
                <li class="nav__item "><a class="nav__link" href="">註冊</a></li>
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
})