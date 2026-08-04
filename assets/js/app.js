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
            VOCABULARY MODAL
=========================================================*/

App.initVocab = function () {

    const modal = document.getElementById("vocabModal");
    const closeBtn = document.getElementById("vocabModalClose");
    const homeView = document.getElementById("vocabHome");
    const quizView = document.getElementById("vocabQuiz");
    const resultView = document.getElementById("vocabResult");
    const listBtn = document.getElementById("vocabListBtn");
    const gameBtn = document.getElementById("vocabGameBtn");
    const questionEl = document.getElementById("vocabQuizQuestion");
    const optionsEl = document.getElementById("vocabQuizOptions");
    const progressEl = document.getElementById("vocabQuizProgress");
    const scoreEl = document.getElementById("vocabQuizScore");
    const prevBtn = document.getElementById("vocabPrevBtn");
    const nextBtn = document.getElementById("vocabNextBtn");
    const submitBtn = document.getElementById("vocabSubmitBtn");
    const resultIcon = document.getElementById("vocabResultIcon");
    const resultScore = document.getElementById("vocabResultScore");
    const resultComment = document.getElementById("vocabResultComment");
    const retryBtn = document.getElementById("vocabRetryBtn");

    // Question Bank - 10 questions in exact order
    const vocabQuestions = [
        {
            exam: "Bangladesh Bank AD - 2023",
            question: "'ABATE' এর সমার্থক শব্দ কোনটি?",
            options: ["Increase", "Diminish", "Create", "Produce"],
            answer: 1
        },
        {
            exam: "Sonali Bank Officer - 2024",
            question: "'BENEvolENT' এর সমার্থক শব্দ কোনটি?",
            options: ["Cruel", "Kind-hearted", "Selfish", "Rude"],
            answer: 1
        },
        {
            exam: "Janata Bank Senior Officer - 2022",
            question: "'FRUGAL' এর বিপরীত শব্দ কোনটি?",
            options: ["Thrifty", "Economical", "Extravagant", "Careful"],
            answer: 2
        },
        {
            exam: "Agrani Bank Officer - 2023",
            question: "'VACILLATE' এর সমার্থক শব্দ কোনটি?",
            options: ["Waver", "Decide", "Firm", "Resolve"],
            answer: 0
        },
        {
            exam: "Rupali Bank - 2023",
            question: "'MELANCHOLY' এর সমার্থক শব্দ কোনটি?",
            options: ["Gloomy", "Joyful", "Cheerful", "Lively"],
            answer: 0
        },
        {
            exam: "Combined 5 Bank Officer - 2024",
            question: "'PRUDENT' এর সমার্থক শব্দ কোনটি?",
            options: ["Foolish", "Wise", "Careless", "Hasty"],
            answer: 1
        },
        {
            exam: "Bangladesh Bank Officer Cash - 2022",
            question: "'DELETERIOUS' এর সমার্থক শব্দ কোনটি?",
            options: ["Harmless", "Harmful", "Useful", "Beneficial"],
            answer: 1
        },
        {
            exam: "Sonali Bank - 2023",
            question: "'CANDID' এর বিপরীত শব্দ কোনটি?",
            options: ["Honest", "Frank", "Deceitful", "Sincere"],
            answer: 2
        },
        {
            exam: "Janata Bank - 2024",
            question: "'LACONIC' এর সমার্থক শব্দ কোনটি?",
            options: ["Wordy", "Brief", "Lengthy", "Talkative"],
            answer: 1
        },
        {
            exam: "Bangladesh Bank - 2024",
            question: "'MUNDANE' এর সমার্থক শব্দ কোনটি?",
            options: ["Extraordinary", "Ordinary", "Excellent", "Special"],
            answer: 1
        }
    ];

    let currentIndex = 0;
    let answers = [];
    let score = 0;

    // Helper: Bangla number
    function toBanglaNumber(num) {
        const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return String(num).split("").map(d => bn[parseInt(d)] || d).join("");
    }

    // Show specific view
    function showView(view) {
        homeView.style.display = "none";
        quizView.style.display = "none";
        resultView.style.display = "none";
        view.style.display = "block";
    }

    // Render question
    function renderQuestion() {
        const q = vocabQuestions[currentIndex];
        questionEl.textContent = (currentIndex + 1) + ". " + q.question + " (" + q.exam + ")";
        progressEl.textContent = "প্রশ্ন " + toBanglaNumber(currentIndex + 1) + "/" + toBanglaNumber(vocabQuestions.length);
        scoreEl.textContent = "Score: " + score;

        optionsEl.innerHTML = "";
        q.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.textContent = String.fromCharCode(65 + i) + ". " + opt;
            if (answers[currentIndex] !== undefined && answers[currentIndex] === i) {
                btn.classList.add("selected");
            }
            btn.addEventListener("click", () => {
                answers[currentIndex] = i;
                renderQuestion();
            });
            optionsEl.appendChild(btn);
        });

        // Toggle nav buttons
        prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
        if (currentIndex === vocabQuestions.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "flex";
        } else {
            nextBtn.style.display = "flex";
            submitBtn.style.display = "none";
        }
    }

    // Open modal on Vocabulary tool click
    document.getElementById("vocabToolBtn").addEventListener("click", (e) => {
        e.preventDefault();
        showView(homeView);
        modal.classList.add("show");
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Start game
    gameBtn.addEventListener("click", () => {
        currentIndex = 0;
        answers = new Array(vocabQuestions.length).fill(undefined);
        score = 0;
        showView(quizView);
        renderQuestion();
    });

    // Navigation
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < vocabQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    });

    // Submit
    submitBtn.addEventListener("click", () => {
        score = 0;
        vocabQuestions.forEach((q, i) => {
            if (answers[i] === q.answer) score++;
        });

        resultScore.textContent = score + "/" + vocabQuestions.length;

        const pct = score / vocabQuestions.length;
        if (pct === 1) {
            resultIcon.textContent = "🏆";
            resultComment.textContent = "অসাধারণ! পারফেক্ট স্কোর! আপনি Vocabulary Master!";
        } else if (pct >= 0.8) {
            resultIcon.textContent = "🌟";
            resultComment.textContent = "খুব ভালো! আর একটু practice করলে পারফেক্ট হবে!";
        } else if (pct >= 0.6) {
            resultIcon.textContent = "👍";
            resultComment.textContent = "ভালো হয়েছে! Regular practice রাখুন।";
        } else if (pct >= 0.4) {
            resultIcon.textContent = "📚";
            resultComment.textContent = "আরও প্রস্তুতি দরকার। Vocabulary দিয়ে দৈনিক practice করুন।";
        } else {
            resultIcon.textContent = "💪";
            resultComment.textContent = "চিন্তা নেই! প্রতিটি ভুল থেকে শেখা যায়। আবার চেষ্টা করুন!";
        }

        showView(resultView);
    });

    // Retry
    retryBtn.addEventListener("click", () => {
        showView(homeView);
    });

    // List button stays disabled
    listBtn.addEventListener("click", () => {
        // No action - disabled
    });
};


/*=========================================================
            BOOK INFO MODAL
=========================================================*/

App.initBookInfo = function () {

    const modal = document.getElementById("bookInfoModal");
    const closeBtn = document.getElementById("bookInfoClose");
    const buyBtn = document.getElementById("bookInfoBuyBtn");
    const titleEl = document.getElementById("bookInfoTitle");
    const descEl = document.getElementById("bookInfoDesc");
    const priceEl = document.getElementById("bookInfoPrice");
    const oldEl = document.getElementById("bookInfoOld");

    // Book descriptions
    const bookDescriptions = {
        "Bank Suggestions Book": "ব্যাংক জব পরীক্ষার জন্য সম্পূর্ণ সাজেশন ও গাইড। প্রতিটি ব্যাংকের পূর্ববর্তী প্রশ্ন বিশ্লেষণসহ গুরুত্বপূর্ণ টপিক কভার করা হয়েছে।",
        "BCS Preliminary Book": "BCS প্রিলিমিনারি পরীক্ষার জন্য পূর্ণাঙ্গ প্রস্তুতি গাইড। বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান সহ সব বিষয়ের সাজেশন।",
        "English Exclusive Notes": "ইংরেজি গ্রামার, Vocabulary ও Comprehension এর এক্সক্লুসিভ নোট। চাকরির পরীক্ষার জন্য অত্যন্ত কার্যকর।",
        "GK Book - Jakir Sir": "সাধারণ জ্ঞানের সম্পূর্ণ বই। বাংলাদেশ ও আন্তর্জাতিক বিষয়সহ গুরুত্বপূর্ণ তথ্য একত্রে সাজানো।",
        "Math Exclusive Notes": "গণিতের এক্সক্লুসিভ নোট। অঙ্কের শর্টকাট টেকনিক ও গুরুত্বপূর্ণ সূত্রসহ সহজ সমাধান পদ্ধতি।",
        "Shikhok Nibondhon Exclusive": "শিক্ষক নিবন্ধন পরীক্ষার জন্য এক্সক্লুসিভ প্রস্তুতি বই। বিগত বছরের প্রশ্ন ও সাজেশনসহ।"
    };

    // Open book info modal on Buy Now click
    document.querySelectorAll(".buy-now-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const bookName = btn.dataset.book || "বই";
            const bookPrice = btn.dataset.price || "৳0";
            const bookOld = btn.dataset.old || "৳0";
            titleEl.textContent = bookName;
            descEl.textContent = bookDescriptions[bookName] || "এই বইয়ের বিস্তারিত বিবরণ শীঘ্রই আসছে।";
            priceEl.textContent = bookPrice;
            oldEl.textContent = bookOld;
            modal.classList.add("show");
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Buy button - close book modal and open enrollment modal
    buyBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        // Open the enrollment modal
        const enrollModal = document.getElementById("enrollModal");
        if (enrollModal) {
            enrollModal.classList.add("show");
            // Go to step 1
            document.getElementById("enrollStep1").style.display = "block";
            document.getElementById("enrollStep2").style.display = "none";
            document.getElementById("enrollStep3").style.display = "none";
            document.getElementById("enrollStep4").style.display = "none";
        }
    });
};


/*=========================================================
            COURSE INFO MODAL
=========================================================*/

App.initCourseInfo = function () {

    const modal = document.getElementById("courseInfoModal");
    const closeBtn = document.getElementById("courseInfoClose");
    const enrollBtn = document.getElementById("courseInfoEnrollBtn");
    const nameEl = document.getElementById("courseInfoName");
    const priceEl = document.getElementById("courseInfoPrice");

    // Open course info modal on Enroll Now click
    document.querySelectorAll(".enroll-now-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const courseName = btn.dataset.course || "কোর্স";
            const coursePrice = btn.dataset.price || "৳0";
            nameEl.textContent = courseName;
            priceEl.textContent = coursePrice;
            modal.classList.add("show");
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Enroll Now button - close info modal and open payment modal
    enrollBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        // Open the enrollment modal
        const enrollModal = document.getElementById("enrollModal");
        if (enrollModal) {
            enrollModal.classList.add("show");
            // Go to step 1
            document.getElementById("enrollStep1").style.display = "block";
            document.getElementById("enrollStep2").style.display = "none";
            document.getElementById("enrollStep3").style.display = "none";
            document.getElementById("enrollStep4").style.display = "none";
        }
    });
};



/*=========================================================
            ENROLLMENT MODAL
=========================================================*/

App.initEnrollment = function () {

    // Courses by category
    const coursesByCategory = {
        bank: [
            { name: "Bank MCQ + Written Combo", price: 2499 },
            { name: "Bank Math Crash Course", price: 1499 },
            { name: "Bank English Paid Course", price: 1299 },
            { name: "Bank GK & Computer", price: 999 }
        ],
        primary: [
            { name: "Primary Teacher Complete", price: 1499 },
            { name: "Primary Math Masterclass", price: 999 },
            { name: "Primary English Course", price: 899 },
            { name: "Primary Question Bank Pack", price: 799 }
        ],
        somajseba: [
            { name: "Somaj Seba Complete Batch", price: 1699 },
            { name: "Shastho Sohokari Course", price: 1499 },
            { name: "Somaj Seba Question Bank", price: 899 }
        ],
        nibondhon: [
            { name: "Shikhok Nibondhon Complete", price: 1999 },
            { name: "Sebamulok Nibondhon Course", price: 1799 },
            { name: "Nibondhon Online Crash", price: 1299 }
        ],
        bcs: [
            { name: "BCS Math Crash Course", price: 1299 },
            { name: "BCS GK Premium", price: 899 },
            { name: "BCS English Course", price: 1099 },
            { name: "BCS Full Package", price: 2999 }
        ]
    };

    // Category titles
    const categoryTitles = {
        bank: "ব্যাংক কোর্স সমূহ",
        primary: "প্রাথমিক শিক্ষক কোর্স সমূহ",
        somajseba: "সমাজসেবা কোর্স সমূহ",
        nibondhon: "শিক্ষক নিবন্ধন কোর্স সমূহ",
        bcs: "BCS কোর্স সমূহ"
    };

    // DOM refs
    const modal = document.getElementById("enrollModal");
    const enrollBtn = document.getElementById("enrollBtn");
    const step1 = document.getElementById("enrollStep1");
    const step2 = document.getElementById("enrollStep2");
    const step3 = document.getElementById("enrollStep3");
    const step4 = document.getElementById("enrollStep4");
    const courseList = document.getElementById("enrollCourseList");
    const catTitle = document.getElementById("enrollCatTitle");

    let selectedCourse = null;
    let selectedMethod = null;
    let currentStep = 1;

    // Show modal
    function openModal() {
        modal.classList.add("show");
        goToStep(1);
    }

    // Close modal
    function closeModal() {
        modal.classList.remove("show");
        // Reset
        selectedCourse = null;
        selectedMethod = null;
        document.getElementById("manualPayment").style.display = "none";
        document.querySelectorAll(".payment-method").forEach(m => m.classList.remove("active"));
        document.getElementById("trxId").value = "";
        document.getElementById("senderMobile").value = "";
    }

    // Navigate steps
    function goToStep(step) {
        currentStep = step;
        step1.style.display = step === 1 ? "block" : "none";
        step2.style.display = step === 2 ? "block" : "none";
        step3.style.display = step === 3 ? "block" : "none";
        step4.style.display = step === 4 ? "block" : "none";
    }

    // Open modal on CTA button click
    enrollBtn.addEventListener("click", openModal);

    // Close buttons
    document.getElementById("enrollClose").addEventListener("click", closeModal);
    document.getElementById("enrollClose2").addEventListener("click", closeModal);
    document.getElementById("enrollClose3").addEventListener("click", closeModal);

    // Back buttons
    document.getElementById("enrollBack2").addEventListener("click", () => goToStep(1));
    document.getElementById("enrollBack3").addEventListener("click", () => goToStep(2));

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Category selection
    document.querySelectorAll(".enroll-category").forEach(cat => {
        cat.addEventListener("click", () => {
            const category = cat.dataset.category;
            catTitle.textContent = categoryTitles[category] || "কোর্স নির্বাচন";

            // Render courses
            courseList.innerHTML = "";
            (coursesByCategory[category] || []).forEach(course => {
                const item = document.createElement("div");
                item.className = "enroll-course-item";
                item.innerHTML = `
                    <div class="enroll-course-name">${course.name}</div>
                    <div class="enroll-course-price">৳${course.price}</div>
                `;
                item.addEventListener("click", () => {
                    selectedCourse = course;
                    // Show payment step
                    document.getElementById("paymentOrder").innerHTML = `
                        <p><strong>📚 কোর্স:</strong> ${course.name}</p>
                        <p><strong>💰 ফি:</strong> ৳${course.price}</p>
                    `;
                    document.getElementById("payAmount").textContent = "৳" + course.price;
                    document.getElementById("manualPayment").style.display = "none";
                    document.querySelectorAll(".payment-method").forEach(m => m.classList.remove("active"));
                    selectedMethod = null;
                    goToStep(3);
                });
                courseList.appendChild(item);
            });

            goToStep(2);
        });
    });

    // Payment method selection
    document.querySelectorAll(".payment-method").forEach(method => {
        method.addEventListener("click", () => {
            if (method.disabled) return;
            // Toggle active
            document.querySelectorAll(".payment-method").forEach(m => m.classList.remove("active"));
            method.classList.add("active");
            selectedMethod = method.dataset.method;
            // Show manual payment form for bKash/Nagad
            document.getElementById("manualPayment").style.display = "block";
        });
    });

    // Submit payment
    document.getElementById("paymentSubmitBtn").addEventListener("click", () => {
        const senderMobile = document.getElementById("senderMobile").value.trim();
        const trxId = document.getElementById("trxId").value.trim();
        if (!selectedMethod) {
            alert("পেমেন্ট মেথড নির্বাচন করুন!");
            return;
        }
        if (!senderMobile) {
            alert("আপনার মোবাইল নম্বর লিখুন!");
            return;
        }
        if (senderMobile.length < 11) {
            alert("সঠিক মোবাইল নম্বর লিখুন!");
            return;
        }
        if (!trxId) {
            alert("TRX ID লিখুন!");
            return;
        }
        // Show success
        goToStep(4);
    });

    // Done button
    document.getElementById("enrollDoneBtn").addEventListener("click", closeModal);
};



/*=========================================================
            DEMO EXAM / QUIZ
=========================================================*/

App.initQuiz = function () {

    // Question Bank - Bangla, English, Math mixed
    const questionBank = [
        // Bangla Questions
        { q: "বাংলাদেশের স্বাধীনতা ঘোষণা করা হয় কত সালে?", options: ["১৯৬৯", "১৯৭১", "১৯৭৫", "১৯৮০"], answer: 1 },
        { q: "বাংলা নববর্ষ পহেলা বৈশাখ কোন মাসে পালিত হয়?", options: ["চৈত্র", "বৈশাখ", "আষাঢ়", "ফাল্গুন"], answer: 1 },
        { q: "জাতীয় কবি কাজী নজরুল ইসলামের জন্ম কোন জেলায়?", options: ["চুরুলিয়া", "বর্ধমান", "ঢাকা", "চট্টগ্রাম"], answer: 0 },
        { q: "'আমার সোনার বাংলা' গানটি কার লেখা?", options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জসীমউদ্দীন", "সুকান্ত ভট্টাচার্য"], answer: 0 },
        { q: "বাংলাদেশের জাতীয় ফুল কী?", options: ["গোলাপ", "পদ্ম", "শাপলা", "সূর্যমুখী"], answer: 2 },
        // English Questions
        { q: "What is the synonym of 'Abundant'?", options: ["Scarce", "Plentiful", "Rare", "Empty"], answer: 1 },
        { q: "Choose the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Reciive"], answer: 1 },
        { q: "What is the antonym of 'Brave'?", options: ["Courageous", "Bold", "Cowardly", "Heroic"], answer: 2 },
        { q: "Fill in the blank: He ____ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
        { q: "The opposite of 'Ancient' is:", options: ["Old", "Modern", "Aged", "Antique"], answer: 1 },
        // Math Questions
        { q: "১২ + ২৮ = ?", options: ["৩০", "৪০", "৫০", "৬০"], answer: 1 },
        { q: "১৫ × ৬ = ?", options: ["৬০", "৭০", "৮০", "৯০"], answer: 3 },
        { q: "১০০ ÷ ৪ = ?", options: ["২০", "২৫", "৩০", "৫০"], answer: 1 },
        { q: "একটি ত্রিভুজের তিন কোণের সমষ্টি কত?", options: ["৯০°", "১৮০°", "২৭০°", "৩৬০°"], answer: 1 },
        { q: "৫০ এর ২০% কত?", options: ["৫", "১০", "১৫", "২০"], answer: 1 },
        { q: "৬৪ এর বর্গমূল কত?", options: ["৬", "৭", "৮", "৯"], answer: 2 },
        { q: "পরবর্তী সংখ্যা: ২, ৪, ৬, ৮, ?", options: ["৯", "১০", "১১", "১২"], answer: 1 },
        { q: "৪৫ + ৩৭ = ?", options: ["৭২", "৮২", "৯২", "১০২"], answer: 1 },
        { q: "একটি ডজন = কতটি?", options: ["১০", "১২", "১৪", "১৬"], answer: 1 },
        { q: "৯ ✕ ৯ = ?", options: ["৭৯", "৮১", "৮৯", "৯১"], answer: 1 }
    ];

    // DOM refs
    const setupView = document.getElementById("examSetup");
    const quizView = document.getElementById("quizView");
    const resultView = document.getElementById("quizResult");
    const startBtn = document.getElementById("startExamBtn");
    const retryBtn = document.getElementById("retryBtn");
    const questionEl = document.getElementById("quizQuestion");
    const optionsEl = document.getElementById("quizOptions");
    const progressEl = document.getElementById("quizProgress");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    let currentQuestions = [];
    let currentIndex = 0;
    let answers = [];
    let score = 0;

    // Shuffle and pick 10 random questions
    function getRandomQuestions() {
        const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 10);
    }

    // Convert Bangla digits to English digits
    function toBanglaNumber(num) {
        const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return String(num).split("").map(d => bn[parseInt(d)] || d).join("");
    }

    // Render current question
    function renderQuestion() {
        const q = currentQuestions[currentIndex];
        questionEl.textContent = (currentIndex + 1) + ". " + q.q;
        progressEl.textContent = "প্রশ্ন " + toBanglaNumber(currentIndex + 1) + "/" + toBanglaNumber(currentQuestions.length);

        optionsEl.innerHTML = "";
        q.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option";
            btn.textContent = String.fromCharCode(65 + i) + ". " + opt;
            if (answers[currentIndex] !== undefined && answers[currentIndex] === i) {
                btn.classList.add("selected");
            }
            btn.addEventListener("click", () => {
                answers[currentIndex] = i;
                renderQuestion();
            });
            optionsEl.appendChild(btn);
        });

        // Toggle nav buttons
        prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
        if (currentIndex === currentQuestions.length - 1) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "flex";
        } else {
            nextBtn.style.display = "flex";
            submitBtn.style.display = "none";
        }

        // Disable next if no answer selected
        nextBtn.disabled = answers[currentIndex] === undefined;
        nextBtn.style.opacity = answers[currentIndex] === undefined ? ".4" : "1";
    }

    // Start exam
    startBtn.addEventListener("click", () => {
        currentQuestions = getRandomQuestions();
        currentIndex = 0;
        answers = new Array(currentQuestions.length).fill(undefined);
        score = 0;
        setupView.style.display = "none";
        resultView.style.display = "none";
        quizView.style.display = "block";
        renderQuestion();
    });

    // Navigation
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < currentQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        }
    });

    // Submit and show result
    submitBtn.addEventListener("click", () => {
        score = 0;
        currentQuestions.forEach((q, i) => {
            if (answers[i] === q.answer) score++;
        });

        quizView.style.display = "none";
        resultView.style.display = "block";

        // Show result
        document.getElementById("resultScore").textContent = score + "/" + currentQuestions.length;
        document.getElementById("resultUser").textContent = "Jakir-এর ফলাফল";

        // Icon and comment based on score
        const icon = document.getElementById("resultIcon");
        const comment = document.getElementById("resultComment");
        const pct = score / currentQuestions.length;

        if (pct >= 0.9) {
            icon.textContent = "🏆";
            comment.textContent = "অসাধারণ Jakir! আপনি একজন মেধাবী শিক্ষার্থী। এই ধারা অব্যাহত রাখুন!";
        } else if (pct >= 0.7) {
            icon.textContent = "🌟";
            comment.textContent = "খুব ভালো Jakir! আরেকটু অনুশীলন করলেই পারফেক্ট!";
        } else if (pct >= 0.5) {
            icon.textContent = "👍";
            comment.textContent = "ভালো হয়েছে Jakir! আরও মনোযোগ দিয়ে পড়াশোনা করুন।";
        } else if (pct >= 0.3) {
            icon.textContent = "📚";
            comment.textContent = "আরও প্রস্তুতি দরকার Jakir। নিয়মিত অনুশীলন করুন, সফলতা আসবেই!";
        } else {
            icon.textContent = "💪";
            comment.textContent = "চিন্তা নেই Jakir! প্রতিটি ভুল থেকে শেখা যায়। আবার চেষ্টা করুন!";
        }
    });

    // Retry
    retryBtn.addEventListener("click", () => {
        resultView.style.display = "none";
        setupView.style.display = "block";
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

        App.initVocab();

        App.initBookInfo();

        App.initCourseInfo();

        App.initEnrollment();

        App.initQuiz();

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