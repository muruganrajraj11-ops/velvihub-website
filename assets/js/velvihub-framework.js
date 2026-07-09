/* ==========================================================
   VelviHub Framework v1.0
   Professional JavaScript Framework
   Version : 1.0
   ========================================================== */

"use strict";

const VelviHub = {

    init() {
        console.log("VelviHub Framework Loaded");
    }

};

document.addEventListener("DOMContentLoaded", () => {

    VelviHub.init();

});
/* ==========================================================
   MOBILE MENU
========================================================== */

mobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

},
