AOS.init();

// var burger = $(".menu-trigger");

// burger.each(function (index) {
//     var $this = $(this);

//     $this.on("click", function (e) {
//         e.preventDefault();
//         $(this).toggleClass("active-" + (index + 1));
//     });
// });

let burger = document.querySelector(".menu-trigger");
let sideWrap = document.querySelector(".side-wrap");
let sideGnb = document.querySelector(".side-gnb");
burger.addEventListener("click", function () {
    burger.classList.toggle("active-1");
    sideWrap.classList.toggle("side-wrap-active");
    sideGnb.classList.toggle("side-gnb-active");
});
