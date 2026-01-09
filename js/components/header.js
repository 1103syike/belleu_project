document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementsByTagName('header')[0];
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