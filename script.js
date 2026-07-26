/* ==========================================
   THAKAR WATCH CO.
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Mobile Menu
    =========================== */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

        });

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.add("hidden");

            });

        });

    }

    /* ===========================
       Smooth Scrolling
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* ===========================
       Sticky Header Shadow
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("shadow-xl");

        } else {

            header.classList.remove("shadow-xl");

        }

    });

    /* ===========================
       Reveal on Scroll
    =========================== */

    const revealItems = document.querySelectorAll(
        "section, .feature-card, .product-card, .service-card, .review-card"
    );

    revealItems.forEach(item => {

        item.classList.add("reveal");

    });

    const reveal = () => {

        const trigger = window.innerHeight * 0.88;

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("active");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);

    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (pageYOffset >= top && pageYOffset < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("text-yellow-400");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("text-yellow-400");

            }

        });

    });

    /* ===========================
       Appointment Form
    =========================== */

    const form = document.getElementById("appointmentForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const date = document.getElementById("date").value;
            const message = document.getElementById("message").value.trim();

            if (name.length < 2) {

                alert("Please enter your name.");

                return;

            }

            if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, "").slice(-10))) {

                alert("Please enter a valid mobile number.");

                return;

            }

            const whatsappMessage =
`Hello Thakar Watch Co.

I'd like to book an appointment.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date || "Not specified"}

Requirement:
${message || "General enquiry"}

`;

            const url =
                "https://wa.me/919810279795?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(url, "_blank");

            form.reset();

        });

    }

    /* ===========================
       Counter Animation
    =========================== */

    const counters = document.querySelectorAll("h3");

    counters.forEach(counter => {

        const text = counter.innerText;

        if (!text.includes("+") && !text.includes("★")) return;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let value = 0;

        const interval = setInterval(() => {

            value += Math.ceil(number / 40);

            if (value >= number) {

                value = number;

                clearInterval(interval);

            }

            counter.innerText = text.replace(number, value);

        }, 40);

    });

    /* ===========================
       Lazy Loading Images
    =========================== */

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

    });

    /* ===========================
       Footer Year
    =========================== */

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} Thakar Watch Co. All Rights Reserved.`;

    }

});