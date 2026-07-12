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
