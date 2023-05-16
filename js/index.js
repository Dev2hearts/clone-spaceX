window.onload = function () {
    // AOS.init({ startEvent: "DOMContentLoaded" });
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

    let data;
    const Xhttp = new XMLHttpRequest();
    Xhttp.onreadystatechange = function (e) {
        const req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            data = JSON.parse(req.response);
            makeSection();
            AOS.init();
            console.log(req.response);
        }
    };
    Xhttp.open("GET", "section.json");
    Xhttp.send();
    function makeSection() {
        let html = ``;
        for (let i = 0; i < data.totalcount; i++) {
            let obj = data[`section${i + 1}`];
            let temp = `
        <div class="${obj.section} section">
                <div class="inner">
                    <div class="left-bottom">
                        <p data-aos="fade-up">${obj.p}</p>
                        <h1 data-aos="fade-up" data-aos-delay="100">${obj.h1}</h1>
                        <a href="#" class="btn" data-aos="fade-up">
                            <div class="hover"></div>
                            <span class="text">${obj.text}</span>
                        </a>
                    </div>
                    <div class="svgscroll">
                        <svg width="30px" height="20px" aria-label="more content below">
                            <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                        </svg>
                    </div>
                </div>
            </div>
        `;
            html += temp;
        }
        let sectionWrapper = document.querySelector(".test");
        sectionWrapper.innerHTML = html;
    }
};
