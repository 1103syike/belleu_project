document.addEventListener('DOMContentLoaded', function () {
    // HTML
    const header = document.createElement("header");
    header.className = 'header'
    header.innerHTML = `
        <ul class="nav">
            <li class="nav_item "><a class="nav_link nav_logo" href="">Belleu</a></li>
            <li class="nav_item "><a class="nav_link" href="">熱門商品</a></li>
            <li class="nav_item "><a class="nav_link" href="">最新商品</a></li>
            <li class="nav_item "><a class="nav_link" href="">買一送一</a></li>
            <li class="nav_item "><a class="nav_link" href="">所有商品</a></li>
            <li class="nav_item "><a class="nav_link" href="">登入</a></li>
            <li class="nav_item "><a class="nav_link" href="">註冊</a></li>
        </ul>
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