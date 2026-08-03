/*=========================================================
    Jakir Sir SMART Edu Portal
    app.js
    All content is hardcoded in index.html
    This file only handles Swiper and UI interactions
=========================================================*/


"use strict";


/*=========================================================
                APP
=========================================================*/

const App = {

    init() {

        this.initHeroSwiper();

        this.initCourseSwiper();

        this.initPopularSwiper();

        console.log("SMART Edu Portal Initialized");

    }

};



/*=========================================================
                HERO SWIPER
=========================================================*/

App.initHeroSwiper = function () {

    new Swiper(".heroSwiper", {

        loop: true,

        speed: 700,

        spaceBetween: 0,

        autoplay: {

            delay: 3500,

            disableOnInteraction: false

        },

        pagination: {

            el: ".swiper-pagination",

            clickable: true

        },

        effect: "slide"

    });

};





/*=========================================================
            RUNNING COURSE SWIPER
=========================================================*/

App.initCourseSwiper = function () {

    new Swiper(".courseSwiper", {

        slidesPerView: 1.15,

        spaceBetween: 12,

        freeMode: true,

        grabCursor: true,

        breakpoints: {

            768: {

                slidesPerView: 2.5,

                spaceBetween: 16

            },

            1200: {

                slidesPerView: 3.5,

                spaceBetween: 20

            }

        }

    });

};





/*=========================================================
            POPULAR COURSE SWIPER
=========================================================*/

App.initPopularSwiper = function () {

    new Swiper(".popularSwiper", {

        slidesPerView: 1.15,

        spaceBetween: 12,

        freeMode: true,

        grabCursor: true,

        breakpoints: {

            768: {

                slidesPerView: 2.5,

                spaceBetween: 16

            },

            1200: {

                slidesPerView: 3.5,

                spaceBetween: 20

            }

        }

    });

};





/*=========================================================
            EXAM MODAL / COUNTDOWN
=========================================================*/

App.initExamModal = function () {

    const modal = document.getElementById("examModal");

    const closeBtn = document.getElementById("examModalClose");

    const courseEl = document.getElementById("examModalCourse");

    const dateEl = document.getElementById("examModalDate");

    const timeEl = document.getElementById("examModalTime");

    const countdownEl = document.getElementById("examCountdown");

    let countdownInterval = null;

    // Open modal on exam link click

    document.querySelectorAll(".exam-link").forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const exam = link.dataset.exam;

            const date = link.dataset.date;

            const time = link.dataset.time;

            courseEl.textContent = "📚 " + exam;

            dateEl.textContent = "📅 " + date;

            timeEl.textContent = "⏰ " + time;

            // Parse exam time (e.g. "8:00 PM") into today's date

            const parts = time.match(/(\d+):(\d+)\s*(AM|PM)/i);

            if (!parts) return;

            let hours = parseInt(parts[1]);

            const mins = parseInt(parts[2]);

            const meridiem = parts[3].toUpperCase();

            if (meridiem === "PM" && hours !== 12) hours += 12;

            if (meridiem === "AM" && hours === 12) hours = 0;

            const now = new Date();

            const examTime = new Date(now);

            examTime.setHours(hours, mins, 0, 0);

            // If exam time already passed, show zero

            let diff = examTime - now;

            if (diff < 0) diff = 0;

            // Clear previous interval

            if (countdownInterval) clearInterval(countdownInterval);

            const updateCountdown = () => {

                const now2 = new Date();

                let diff2 = examTime - now2;

                if (diff2 < 0) diff2 = 0;

                const totalSeconds = Math.floor(diff2 / 1000);

                const days = Math.floor(totalSeconds / 86400);

                const hoursLeft = Math.floor((totalSeconds % 86400) / 3600);

                const minutesLeft = Math.floor((totalSeconds % 3600) / 60);

                const secondsLeft = totalSeconds % 60;

                const pad = (n) => String(n).padStart(2, "0");

                let text = "";

                if (days > 0) {

                    text += days + "d ";

                }

                text += pad(hoursLeft) + ":" + pad(minutesLeft) + ":" + pad(secondsLeft);

                countdownEl.textContent = text;

                if (totalSeconds <= 0) {

                    countdownEl.textContent = "00:00:00";

                    clearInterval(countdownInterval);

                }

            };

            updateCountdown();

            countdownInterval = setInterval(updateCountdown, 1000);

            // Show modal

            modal.classList.add("show");

        });

    });

    // Close on button click

    closeBtn.addEventListener("click", () => {

        modal.classList.remove("show");

        if (countdownInterval) clearInterval(countdownInterval);

    });

    // Close on backdrop click

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

            if (countdownInterval) clearInterval(countdownInterval);

        }

    });

};



/*=========================================================
            EVENTS
=========================================================*/

window.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

        App.initExamModal();

    }

);



/*=========================================================
    Module 3
    Final UI Interactions
=========================================================*/


//=========================================================
// SMOOTH SCROLL
//=========================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});





//=========================================================
// SCROLL TO TOP
//=========================================================

const scrollBtn = document.querySelector(".scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

if (scrollBtn) {

    scrollBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}





//=========================================================
// STICKY HEADER SHADOW
//=========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "";

    }

});





//=========================================================
// BOTTOM NAV ACTIVE
//=========================================================

document.querySelectorAll(".bottom-nav a").forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".bottom-nav a")

            .forEach(nav => nav.classList.remove("active"));

        item.classList.add("active");

    });

});





//=========================================================
// MOBILE MENU
//=========================================================

const menuBtn = document.querySelector(".menu-btn");

menuBtn?.addEventListener("click", () => {

    alert("Sidebar/Menu Coming Soon");

});





//=========================================================
// SEARCH
//=========================================================

const searchBtn = document.querySelector(".ri-search-line")?.parentElement;

searchBtn?.addEventListener("click", () => {

    alert("Search Coming Soon");

});





//=========================================================
// DARK MODE
//=========================================================

function enableDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(

        "theme",

        document.body.classList.contains("dark")

    );

}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "true") {

    document.body.classList.add("dark");

}

// Double click logo to switch theme

document.querySelector(".logo")

    ?.addEventListener("dblclick", enableDarkMode);





//=========================================================
// INTERSECTION OBSERVER
//=========================================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

    ".fade-up"

).forEach(el => {

    observer.observe(el);

});





//=========================================================
// BUTTON RIPPLE
//=========================================================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.position = "absolute";

        ripple.style.left =

            e.offsetX - size / 2 + "px";

        ripple.style.top =

            e.offsetY - size / 2 + "px";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.borderRadius = "50%";

        ripple.style.transform = "scale(0)";

        ripple.style.pointerEvents = "none";

        ripple.style.transition = ".6s";

        this.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.transform = "scale(3)";

            ripple.style.opacity = "0";

        });

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});





//=========================================================
// LOADING EFFECT
//=========================================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});





//=========================================================
// WELCOME MESSAGE
//=========================================================

setTimeout(() => {

    console.log("🎉 Jakir Sir SMART Edu Portal Ready");

}, 500);





//=========================================================
// OPTIONAL DARK MODE CSS
//=========================================================

const darkCSS = `

body.dark{

background:#0F172A;

color:#fff;

}

body.dark .header,

body.dark .course-card,

body.dark .blog-card,

body.dark .pdf-card,

body.dark .video-card,

body.dark .tool,

body.dark .stat,

body.dark .routine-table{

background:#1E293B;

color:#fff;

}

body.dark .section-title a,

body.dark .price{

color:#60A5FA;

}

`;

const style = document.createElement("style");

style.innerHTML = darkCSS;

document.head.appendChild(style);





/*=========================================================
                FINISHED
=========================================================*/

console.log(

    "%cJakir Sir SMART Edu Portal Loaded Successfully 🚀",

    "color:#2563EB;font-size:16px;font-weight:bold"

);