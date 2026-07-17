// Reading Progress Bar

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (winScroll / height) * 100;

    document.getElementById("reading-progress").style.width =
        progress + "%";

});
// Mobile Menu

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("menu-open");

    });

}
// Gallery Image Click Effect

document.querySelectorAll(".gallery-image").forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});
// Smooth Scroll Reveal

const revealItems = document.querySelectorAll(
".timeline-item, .info-card, .gallery-image"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

revealItems.forEach(item=>observer.observe(item));
/* ===== Mobile Menu ===== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

}
