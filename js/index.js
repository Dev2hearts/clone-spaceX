AOS.init();

let burger = document.querySelector(".menu-trigger");
let sideWrap = document.querySelector(".side-wrap");
let sideGnb = document.querySelector(".side-gnb");
let header = document.querySelector(".header");
burger.addEventListener("click", function () {
    burger.classList.toggle("active-1");
    sideWrap.classList.toggle("side-wrap-active");
    sideGnb.classList.toggle("side-gnb-active");
});
sideWrap.addEventListener("click", function () {
    burger.classList.remove("active-1");
    sideWrap.classList.remove("side-wrap-active");
    sideGnb.classList.remove("side-gnb-active");
});
window.addEventListener("scroll", function () {
    burger.classList.remove("active-1");
    sideWrap.classList.remove("side-wrap-active");
    sideGnb.classList.remove("side-gnb-active");
});
let lastScroll = document.documentElement.scrollTop || 0;
document.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScroll) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
    lastScroll = scrollTop;
});
