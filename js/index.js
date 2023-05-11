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
burger.addEventListener("click", function () {
    burger.classList.toggle("active-1");
});
