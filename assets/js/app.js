/*=========================================================
    Jakir Sir SMART Edu Portal
    app.js
    Module 1
=========================================================*/


"use strict";


/*=========================================================
                APP
=========================================================*/

const App = {

    init() {

        this.cache();

        this.renderRunningCourses();

        this.renderPopularCourses();

        this.initHeroSwiper();

        this.initCourseSwiper();

        this.initPopularSwiper();

        console.log("SMART Edu Portal Initialized");

    },


    cache() {

        this.runningWrapper = document.querySelector(".courseSwiper .swiper-wrapper");

        this.popularWrapper = document.querySelector(".popularSwiper .swiper-wrapper");

    }

};



/*=========================================================
                DUMMY DATA
=========================================================*/

const runningCourses = [

    {

        id: 1,

        title: "Bank Job Complete Batch",

        price: "৳1999",

        duration: "6 Months",

        students: 5240,

        image: "images/course1.jpg",

        badge: "LIVE"

    },

    {

        id: 2,

        title: "Primary Teacher",

        price: "৳1499",

        duration: "4 Months",

        students: 3100,

        image: "images/course2.jpg",

        badge: "HOT"

    },

    {

        id: 3,

        title: "Health Assistant",

        price: "৳1699",

        duration: "5 Months",

        students: 2700,

        image: "images/course3.jpg",

        badge: "NEW"

    },

    {

        id: 4,

        title: "Math Master Course",

        price: "৳999",

        duration: "2 Months",

        students: 4300,

        image: "images/course4.jpg",

        badge: "TOP"

    }

];



const popularCourses = [

    {

        id: 1,

        title: "Sonali Bank Premium Batch",

        price: "৳2499",

        duration: "180 Days",

        image: "images/pop1.jpg",

        label: "Bank"

    },

    {

        id: 2,

        title: "BCS Math Crash Course",

        price: "৳1299",

        duration: "90 Days",

        image: "images/pop2.jpg",

        label: "Math"

    },

    {

        id: 3,

        title: "NTRCA Complete",

        price: "৳1999",

        duration: "120 Days",

        image: "images/pop3.jpg",

        label: "Govt"

    },

    {

        id: 4,

        title: "GK Premium",

        price: "৳899",

        duration: "60 Days",

        image: "images/pop4.jpg",

        label: "GK"

    },

    {

        id: 5,

        title: "English Masterclass",

        price: "৳1099",

        duration: "80 Days",

        image: "images/pop5.jpg",

        label: "English"

    }

];





/*=========================================================
            RUNNING COURSE TEMPLATE
=========================================================*/

function runningCard(course) {

    return `

<div class="swiper-slide">

<div class="course-card">

<div class="course-image">

<img src="${course.image}" alt="${course.title}">

<span class="course-label">

${course.badge}

</span>

</div>

<div class="course-content">

<h3>

${course.title}

</h3>

<div class="course-meta">

<span>

<i class="ri-time-line"></i>

${course.duration}

</span>

<span>

<i class="ri-group-line"></i>

${course.students}

</span>

</div>

<div class="course-footer">

<div class="price">

${course.price}

</div>

<button class="details-btn">

Enroll

</button>

</div>

</div>

</div>

</div>

`;

}





/*=========================================================
        POPULAR COURSE TEMPLATE
=========================================================*/

function popularCard(course) {

    return `

<div class="swiper-slide">

<div class="course-card">

<div class="course-image">

<img src="${course.image}">

<span class="course-label">

${course.label}

</span>

</div>

<div class="course-content">

<h3>

${course.title}

</h3>

<p>

Live Class • Recorded Video • MCQ • PDF

</p>

<div class="course-meta">

<span>

${course.duration}

</span>

<span>

Lifetime Access

</span>

</div>

<div class="course-footer">

<div class="price">

${course.price}

</div>

<button class="details-btn">

Details

</button>

</div>

</div>

</div>

</div>

`;

}





/*=========================================================
            RENDER FUNCTIONS
=========================================================*/

App.renderRunningCourses = function () {

    if (!this.runningWrapper) return;

    this.runningWrapper.innerHTML =

        runningCourses.map(

            runningCard

        ).join("");

};



App.renderPopularCourses = function () {

    if (!this.popularWrapper) return;

    this.popularWrapper.innerHTML =

        popularCourses.map(

            popularCard

        ).join("");

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
            UTILITIES
=========================================================*/

const Utils = {

    qs(selector) {

        return document.querySelector(selector);

    },

    qsa(selector) {

        return document.querySelectorAll(selector);

    },

    create(element) {

        return document.createElement(element);

    },

    random(min, max) {

        return Math.floor(

            Math.random() * (max - min + 1)

        ) + min;

    },

    formatPrice(value) {

        return new Intl.NumberFormat(

            "en-BD"

        ).format(value);

    },

    sleep(ms) {

        return new Promise(

            resolve => setTimeout(resolve, ms)

        );

    }

};





/*=========================================================
            EVENTS
=========================================================*/

window.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

    }

);
/*=========================================================
    Module 2A
    Quick Tools + Statistics
=========================================================*/


/*=========================================================
                    CACHE ELEMENTS
=========================================================*/

App.cache = function () {

    this.runningWrapper = document.querySelector(".courseSwiper .swiper-wrapper");

    this.popularWrapper = document.querySelector(".popularSwiper .swiper-wrapper");

    this.toolGrid = document.querySelector(".tool-grid");

    this.statsSection = document.querySelector(".stats");

};



/*=========================================================
                QUICK TOOLS DATA
=========================================================*/

const quickTools = [

    {
        title: "MCQ",
        icon: "ri-file-list-3-line",
        color: "#8B5CF6",
        link: "#"
    },

    {
        title: "প্রশ্নব্যাংক",
        icon: "ri-book-open-line",
        color: "#2563EB",
        link: "#"
    },

    {
        title: "মক টেস্ট",
        icon: "ri-checkbox-circle-line",
        color: "#22C55E",
        link: "#"
    },

    {
        title: "বইপত্র",
        icon: "ri-file-pdf-line",
        color: "#EF4444",
        link: "#"
    },

    {
        title: "সকল কোর্স",
        icon: "ri-graduation-cap-line",
        color: "#F97316",
        link: "#"
    },

    {
        title: "GK",
        icon: "ri-global-line",
        color: "#06B6D4",
        link: "#"
    },

    {
        title: "Math",
        icon: "ri-calculator-line",
        color: "#10B981",
        link: "#"
    },

    {
        title: "English",
        icon: "ri-english-input",
        color: "#3B82F6",
        link: "#"
    },

    {
        title: "Vocabulary",
        icon: "ri-translate-2",
        color: "#9333EA",
        link: "#"
    },

    {
        title: "Routine",
        icon: "ri-calendar-event-line",
        color: "#DC2626",
        link: "#"
    }

];



/*=========================================================
                STATISTICS DATA
=========================================================*/

const statistics = [

    {

        number: "446K+",

        label: "Followers"

    },

    {

        number: "50K+",

        label: "Students"

    },

    {

        number: "520+",

        label: "Videos"

    },

    {

        number: "250+",

        label: "PDF"

    }

];





/*=========================================================
            QUICK TOOL TEMPLATE
=========================================================*/

function toolTemplate(tool) {

    return `

<a href="${tool.link}" class="tool">

<i class="${tool.icon}"

style="color:${tool.color}">

</i>

<h4>

${tool.title}

</h4>

</a>

`;

}





/*=========================================================
            STAT TEMPLATE
=========================================================*/

function statTemplate(item) {

    return `

<div class="stat">

<h3 class="counter"

data-count="${item.number.replace(/\D/g, '')}">

0

</h3>

<span>

${item.label}

</span>

</div>

`;

}





/*=========================================================
            RENDER QUICK TOOLS
=========================================================*/

App.renderQuickTools = function () {

    if (!this.toolGrid) return;

    this.toolGrid.innerHTML =

        quickTools

            .map(toolTemplate)

            .join("");

};





/*=========================================================
            RENDER STATISTICS
=========================================================*/

App.renderStatistics = function () {

    if (!this.statsSection) return;

    this.statsSection.innerHTML =

        statistics

            .map(statTemplate)

            .join("");

};





/*=========================================================
            COUNTER ANIMATION
=========================================================*/

App.animateCounters = function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =

            Number(

                counter.dataset.count

            );

        let count = 0;

        const speed = target / 70;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerHTML =

                    Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerHTML =

                    target + "+";

            }

        };

        update();

    });

};





/*=========================================================
            TOOL CLICK EFFECT
=========================================================*/

App.toolEffects = function () {

    const tools = document.querySelectorAll(".tool");

    tools.forEach(tool => {

        tool.addEventListener("click", () => {

            tool.style.transform = "scale(.92)";

            setTimeout(() => {

                tool.style.transform = "";

            }, 150);

        });

    });

};





/*=========================================================
            UPDATE INIT
=========================================================*/

const oldInit = App.init;

App.init = function () {

    oldInit.call(this);

    this.renderQuickTools();

    this.renderStatistics();

    this.toolEffects();

    setTimeout(() => {

        this.animateCounters();

    }, 600);

};
/*=========================================================
    Module 2B
    Blog System
=========================================================*/


/*=========================================================
                CACHE
=========================================================*/

App.cache = function () {

    this.runningWrapper = document.querySelector(".courseSwiper .swiper-wrapper");

    this.popularWrapper = document.querySelector(".popularSwiper .swiper-wrapper");

    this.toolGrid = document.querySelector(".tool-grid");

    this.statsSection = document.querySelector(".stats");

    this.blogGrid = document.querySelector(".blog-grid");

};



/*=========================================================
                BLOG DATA
=========================================================*/

const blogs = [

    {

        id: 1,

        title: "সোনালী ব্যাংক পরীক্ষার শেষ মুহূর্তের প্রস্তুতি",

        category: "Bank Job",

        date: "03 Aug 2026",

        image: "images/blog1.jpg",

        excerpt: "সোনালী ব্যাংকের লিখিত ও MCQ পরীক্ষার জন্য গুরুত্বপূর্ণ সাজেশন ও প্রস্তুতির কৌশল।",

        url: "#"

    },

    {

        id: 2,

        title: "স্বাস্থ্য সহকারী পরীক্ষার পূর্ণাঙ্গ সিলেবাস",

        category: "Health",

        date: "02 Aug 2026",

        image: "images/blog2.jpg",

        excerpt: "স্বাস্থ্য সহকারী পরীক্ষার আপডেটেড সিলেবাস ও প্রস্তুতির গাইডলাইন।",

        url: "#"

    },

    {

        id: 3,

        title: "BCS গণিত প্রস্তুতি ৩০ দিনে",

        category: "Math",

        date: "01 Aug 2026",

        image: "images/blog3.jpg",

        excerpt: "প্রতিদিন মাত্র এক ঘণ্টা পড়েই গণিত প্রস্তুতি সম্পন্ন করার পরিকল্পনা।",

        url: "#"

    },

    {

        id: 4,

        title: "বাংলাদেশ ব্যাংক MCQ গুরুত্বপূর্ণ প্রশ্ন",

        category: "Bank",

        date: "30 Jul 2026",

        image: "images/blog4.jpg",

        excerpt: "বাংলাদেশ ব্যাংকের পূর্ববর্তী পরীক্ষার গুরুত্বপূর্ণ MCQ প্রশ্নসমূহ।",

        url: "#"

    },

    {

        id: 5,

        title: "প্রাথমিক শিক্ষক নিয়োগ আপডেট",

        category: "Primary",

        date: "28 Jul 2026",

        image: "images/blog5.jpg",

        excerpt: "নিয়োগ বিজ্ঞপ্তি, পরীক্ষা তারিখ ও প্রস্তুতির গুরুত্বপূর্ণ নির্দেশনা।",

        url: "#"

    },

    {

        id: 6,

        title: "ইংরেজি Vocabulary মনে রাখার সহজ উপায়",

        category: "English",

        date: "25 Jul 2026",

        image: "images/blog6.jpg",

        excerpt: "প্রতিদিন মাত্র ১৫ মিনিটে Vocabulary আয়ত্ত করার কার্যকর কৌশল।",

        url: "#"

    }

];




/*=========================================================
            CATEGORY COLOR
=========================================================*/

function blogBadge(category) {

    switch (category) {

        case "Bank Job":

            return "#2563EB";

        case "Bank":

            return "#2563EB";

        case "Health":

            return "#22C55E";

        case "Math":

            return "#F97316";

        case "Primary":

            return "#9333EA";

        case "English":

            return "#06B6D4";

        default:

            return "#64748B";

    }

}





/*=========================================================
            BLOG TEMPLATE
=========================================================*/

function blogTemplate(blog) {

    return `

<article class="blog-card fade-up">

<div class="blog-image">

<img

loading="lazy"

src="${blog.image}"

alt="${blog.title}"

>

<span class="blog-badge"

style="background:${blogBadge(blog.category)}">

${blog.category}

</span>

</div>

<div class="blog-content">

<div class="blog-date">

<i class="ri-calendar-line"></i>

${blog.date}

</div>

<h4>

${blog.title}

</h4>

<p>

${blog.excerpt}

</p>

<a

href="${blog.url}"

class="read-more"

>

Read More

<i class="ri-arrow-right-line"></i>

</a>

</div>

</article>

`;

}





/*=========================================================
            RENDER BLOGS
=========================================================*/

App.renderBlogs = function () {

    if (!this.blogGrid) return;

    this.blogGrid.innerHTML =

        blogs

            .map(blogTemplate)

            .join("");

};





/*=========================================================
            BLOG HOVER EFFECT
=========================================================*/

App.blogEffects = function () {

    const cards = document.querySelectorAll(".blog-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

};





/*=========================================================
        IMAGE FALLBACK
=========================================================*/

App.blogFallback = function () {

    const images = document.querySelectorAll(".blog-card img");

    images.forEach(img => {

        img.onerror = function () {

            this.src = "images/placeholder.jpg";

        };

    });

};





/*=========================================================
            READ MORE
=========================================================*/

App.readMore = function () {

    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            alert("Blog Details Page Coming Soon.");

        });

    });

};





/*=========================================================
            SEARCH BLOG
=========================================================*/

App.searchBlog = function (keyword) {

    const result =

        blogs.filter(blog =>

            blog.title

                .toLowerCase()

                .includes(

                    keyword.toLowerCase()

                )

        );

    this.blogGrid.innerHTML =

        result

            .map(blogTemplate)

            .join("");

};





/*=========================================================
            UPDATE INIT
=========================================================*/

const previousInit = App.init;

App.init = function () {

    previousInit.call(this);

    this.renderBlogs();

    this.blogEffects();

    this.blogFallback();

    this.readMore();

};
/*=========================================================
    Module 2C
    PDF Library (Prototype)
=========================================================*/


//=========================================================
// PDF DATA
//=========================================================

const pdfs = [

    {
        id: 1,
        title: "Bank Math Shortcut",
        category: "Math",
        type: "Free",
        size: "2.5 MB",
        downloads: 2456,
        file: "#"
    },

    {
        id: 2,
        title: "English Vocabulary",
        category: "English",
        type: "Free",
        size: "1.8 MB",
        downloads: 1890,
        file: "#"
    },

    {
        id: 3,
        title: "BCS Premium Notes",
        category: "BCS",
        type: "Paid",
        size: "8.2 MB",
        downloads: 640,
        file: "#"
    },

    {
        id: 4,
        title: "Primary Question Bank",
        category: "Primary",
        type: "Paid",
        size: "6.4 MB",
        downloads: 890,
        file: "#"
    },

    {
        id: 5,
        title: "GK Special PDF",
        category: "GK",
        type: "Free",
        size: "3.1 MB",
        downloads: 3200,
        file: "#"
    },

    {
        id: 6,
        title: "Health Assistant Guide",
        category: "Health",
        type: "Paid",
        size: "4.8 MB",
        downloads: 740,
        file: "#"
    }

];



//=========================================================
// TEMPLATE
//=========================================================

function pdfTemplate(pdf) {

    return `

<div class="pdf-card">

<i class="ri-file-pdf-fill"></i>

<h4>${pdf.title}</h4>

<p>${pdf.category}</p>

<small>${pdf.size}</small>

<div style="margin:10px 0;">

<span class="${pdf.type === "Free" ? "free" : "paid"}">

${pdf.type}

</span>

</div>

<p style="font-size:12px;color:#777">

⬇ ${pdf.downloads} Downloads

</p>

<div style="margin-top:12px;display:flex;gap:8px;">

<button
class="download-btn"
onclick="downloadPDF(${pdf.id})">

${pdf.type === "Paid" ? "🔒 Unlock" : "⬇ Download"}

</button>

<button
class="download-btn"
style="background:#10B981"
onclick="viewPDF(${pdf.id})">

View

</button>

</div>

</div>

`;

}




//=========================================================
// RENDER
//=========================================================

App.renderPDFs = function (list = pdfs) {

    const container = document.querySelector(".pdf-grid");

    if (!container) return;

    container.innerHTML =

        list.map(pdfTemplate).join("");

};




//=========================================================
// SEARCH
//=========================================================

App.searchPDF = function (keyword) {

    keyword = keyword.toLowerCase();

    const result =

        pdfs.filter(pdf =>

            pdf.title.toLowerCase().includes(keyword) ||

            pdf.category.toLowerCase().includes(keyword)

        );

    App.renderPDFs(result);

};




//=========================================================
// BUTTON ACTIONS
//=========================================================

function downloadPDF(id) {

    const pdf = pdfs.find(item => item.id === id);

    if (!pdf) return;

    if (pdf.type === "Paid") {

        alert("Please purchase this PDF.");

        return;

    }

    alert("Downloading: " + pdf.title);

}



function viewPDF(id) {

    const pdf = pdfs.find(item => item.id === id);

    if (!pdf) return;

    alert("Opening: " + pdf.title);

}




//=========================================================
// INIT
//=========================================================

const initPDF = App.init;

App.init = function () {

    initPDF.call(this);

    this.renderPDFs();

};

/*=========================================================
    Module 2D + 2E
    Videos + Exam Routine (Prototype)
=========================================================*/


//=========================================================
// NOTE: Video section is hardcoded in index.html
// (Prototype - YouTube embeds served directly)
//=========================================================





//=========================================================
// EXAM ROUTINE DATA
//=========================================================

const routines = [

    {
        date: "04 Aug",
        course: "Bank Job",
        time: "8:00 PM"
    },

    {
        date: "05 Aug",
        course: "Primary",
        time: "7:30 PM"
    },

    {
        date: "06 Aug",
        course: "BCS Math",
        time: "9:00 PM"
    },

    {
        date: "07 Aug",
        course: "Health",
        time: "8:30 PM"
    },

    {
        date: "08 Aug",
        course: "GK Mock",
        time: "8:00 PM"
    }

];




//=========================================================
// RENDER ROUTINE
//=========================================================

App.renderRoutine = function () {

    const box = document.querySelector(".routine-table");

    if (!box) return;

    let html = `

<table>

<thead>

<tr>

<th>Date</th>

<th>Course</th>

<th>Time</th>

</tr>

</thead>

<tbody>

`;

    routines.forEach(item => {

        html += `

<tr>

<td>${item.date}</td>

<td>${item.course}</td>

<td>${item.time}</td>

</tr>

`;

    });

    html += `

</tbody>

</table>

`;

    box.innerHTML = html;

};




//=========================================================
// FINAL INIT
//=========================================================

const previousAppInit = App.init;

App.init = function () {

    previousAppInit.call(this);

    this.renderRoutine();

};




//=========================================================
// DONE
//=========================================================

console.log("Videos & Routine Loaded");

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

    const keyword = prompt("Search Course, PDF, Blog...");

    if (!keyword) return;

    // Search Blog
    if (App.searchBlog) App.searchBlog(keyword);

    // Search PDF
    if (App.searchPDF) App.searchPDF(keyword);

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