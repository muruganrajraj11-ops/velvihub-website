/* ==========================
   Reading Progress Bar
========================== */

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("reading-progress");

    if (progressBar) {

        const winScroll =
            document.documentElement.scrollTop || document.body.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (winScroll / height) * 100;

        progressBar.style.width = progress + "%";

    }

});


/* ==========================
   Mobile Menu
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


/* ==========================
   Gallery Image Click
========================== */

document.querySelectorAll(".gallery-image").forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});


/* ==========================
   Scroll Reveal
========================== */

const revealItems = document.querySelectorAll(
".timeline-item, .info-card, .gallery-image"
);

if (revealItems.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    revealItems.forEach(item => observer.observe(item));

}


/* ==========================
   Premium Back To Top
========================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
