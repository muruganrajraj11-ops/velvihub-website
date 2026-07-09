/* ==========================================================
   VelviHub Framework v1.0
   Professional JavaScript Framework
   Module : VH_CORE
   Author : VelviHub
   ========================================================== */

"use strict";

/* ==========================================================
   FRAMEWORK OBJECT
========================================================== */

const VelviHub = {

    version: "1.0.0",

    name: "VelviHub Framework",

    author: "VelviHub",

    modules: {},

    initialized: false

};

/* ==========================================================
   VH_CORE MODULE
========================================================== */

VelviHub.modules.core = {

    init() {

        console.log("======================================");
        console.log(" VelviHub Framework Loaded ");
        console.log(" Version :", VelviHub.version);
        console.log("======================================");

        document.documentElement.classList.add("vh-ready");

        VelviHub.initialized = true;

    }

};

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    VelviHub.modules.core.init();

});
/* ==========================================================
   MODULE : VH_DOM
   DOM Utility Functions
========================================================== */

VelviHub.modules.dom = {

    // Single Element
    get(selector) {
        return document.querySelector(selector);
    },

    // Multiple Elements
    getAll(selector) {
        return document.querySelectorAll(selector);
    },

    // Add Event
    on(element, event, callback) {

        if (element) {
            element.addEventListener(event, callback);
        }

    },

    // Add Class
    addClass(element, className) {

        if (element) {
            element.classList.add(className);
        }

    },

    // Remove Class
    removeClass(element, className) {

        if (element) {
            element.classList.remove(className);
        }

    },

    // Toggle Class
    toggleClass(element, className) {

        if (element) {
            element.classList.toggle(className);
        }

    },

    // Has Class
    hasClass(element, className) {

        if (!element) return false;

        return element.classList.contains(className);

    },

    // Show Element
    show(element) {

        if (element) {
            element.style.display = "";
        }

    },

    // Hide Element
    hide(element) {

        if (element) {
            element.style.display = "none";
        }

    }

};
/* ==========================================================
   MODULE : VH_NAVBAR
   Responsive Navigation System
========================================================== */

VelviHub.modules.navbar = {

    init() {

        const toggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".nav-menu");

        if (!toggle || !menu) return;

        // Open / Close Mobile Menu
        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");
            toggle.classList.toggle("active");

        });

        // Auto Close When Link Clicked
        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");
                toggle.classList.remove("active");

            });

        });

        // Close When Click Outside
        document.addEventListener("click", (event) => {

            if (
                !menu.contains(event.target) &&
                !toggle.contains(event.target)
            ) {

                menu.classList.remove("active");
                toggle.classList.remove("active");

            }

        });

    }

};
/* ==========================================================
   MODULE : VH_SCROLL
   Scroll Features
========================================================== */

VelviHub.modules.scroll = {

    init() {

        this.stickyHeader();
        this.scrollTopButton();
        this.progressBar();

    },

    // Sticky Header
    stickyHeader() {

        const header = document.querySelector(".header");

        if (!header) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("sticky");

            } else {

                header.classList.remove("sticky");

            }

        });

    },

    // Scroll To Top
    scrollTopButton() {

        const button = document.querySelector(".scroll-top");

        if (!button) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        });

        button.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    },

    // Reading Progress Bar
    progressBar() {

        const progress = document.querySelector(".reading-progress");

        if (!progress) return;

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percent = (scrollTop / docHeight) * 100;

            progress.style.width = percent + "%";

        });

    }

};
/* ==========================================================
   MODULE : VH_DARKMODE
   Dark / Light Theme System
========================================================== */

VelviHub.modules.darkmode = {

    init() {

        this.loadTheme();
        this.bindToggle();

    },

    // Load Saved Theme
    loadTheme() {

        const theme = localStorage.getItem("vh-theme");

        if (theme === "dark") {

            document.body.classList.add("dark-mode");

        }

    },

    // Toggle Theme
    bindToggle() {

        const button = document.querySelector(".theme-toggle");

        if (!button) return;

        button.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("vh-theme", "dark");

            } else {

                localStorage.setItem("vh-theme", "light");

            }

        });

    },

    // Enable Dark Mode
    enable() {

        document.body.classList.add("dark-mode");
        localStorage.setItem("vh-theme", "dark");

    },

    // Disable Dark Mode
    disable() {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("vh-theme", "light");

    },

    // Toggle Programmatically
    toggle() {

        document.body.classList.toggle("dark-mode");

        localStorage.setItem(
            "vh-theme",
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light"
        );

    }

};
/* ==========================================================
   MODULE : VH_SEARCH
   Universal Search System
========================================================== */

VelviHub.modules.search = {

    init() {

        this.bind();

    },

    bind() {

        const input = document.querySelector(".vh-search-input");

        if (!input) return;

        input.addEventListener("keyup", (event) => {

            this.filter(event.target.value);

        });

    },

    filter(keyword) {

        const items = document.querySelectorAll(".vh-search-item");

        keyword = keyword.toLowerCase().trim();

        items.forEach(item => {

            const text = item.textContent.toLowerCase();

            if (text.includes(keyword)) {

                item.style.display = "";

            } else {

                item.style.display = "none";

            }

        });

    },

    clear() {

        const input = document.querySelector(".vh-search-input");

        if (input) {

            input.value = "";

            this.filter("");

        }

    }

};
/* ==========================================================
   MODULE : VH_COPYCODE
   Professional Code Copy System
========================================================== */

VelviHub.modules.copycode = {

    init() {

        this.bind();

    },

    bind() {

        const buttons = document.querySelectorAll(".copy-btn");

        if (!buttons.length) return;

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                this.copy(button);

            });

        });

    },

    copy(button) {

        const block = button.closest(".code-block");

        if (!block) return;

        const code = block.querySelector("code");

        if (!code) return;

        navigator.clipboard.writeText(code.innerText)
            .then(() => {

                const oldText = button.innerText;

                button.innerText = "Copied ✓";

                button.classList.add("copied");

                setTimeout(() => {

                    button.innerText = oldText;

                    button.classList.remove("copied");

                }, 2000);

            })
            .catch(error => {

                console.error("Copy Failed :", error);

            });

    }

};
/* ==========================================================
   MODULE : VH_TOAST
   Professional Toast Notification System
========================================================== */

VelviHub.modules.toast = {

    container: null,

    init() {

        this.createContainer();

    },

    createContainer() {

        if (document.querySelector(".vh-toast-container")) {

            this.container = document.querySelector(".vh-toast-container");
            return;

        }

        this.container = document.createElement("div");
        this.container.className = "vh-toast-container";

        document.body.appendChild(this.container);

    },

    show(message, type = "success", duration = 3000) {

        if (!this.container) {

            this.createContainer();

        }

        const toast = document.createElement("div");

        toast.className = `vh-toast vh-toast-${type}`;

        toast.innerHTML = `
            <span class="vh-toast-message">${message}</span>
        `;

        this.container.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("show");

        }, 100);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {

                toast.remove();

            }, 300);

        }, duration);

    },

    success(message) {

        this.show(message, "success");

    },

    error(message) {

        this.show(message, "error");

    },

    warning(message) {

        this.show(message, "warning");

    },

    info(message) {

        this.show(message, "info");

    }

};
/* ==========================================================
   MODULE : VH_FAQ
   Professional FAQ Accordion System
========================================================== */

VelviHub.modules.faq = {

    init() {

        this.bind();

    },

    bind() {

        const items = document.querySelectorAll(".faq-item");

        if (!items.length) return;

        items.forEach(item => {

            const question = item.querySelector(".faq-question");
            const answer = item.querySelector(".faq-answer");

            if (!question || !answer) return;

            // Initially Hide
            answer.style.display = "none";

            question.addEventListener("click", () => {

                const opened = item.classList.contains("active");

                // Close All
                items.forEach(faq => {

                    faq.classList.remove("active");

                    const faqAnswer = faq.querySelector(".faq-answer");

                    if (faqAnswer) {

                        faqAnswer.style.display = "none";

                    }

                });

                // Open Selected
                if (!opened) {

                    item.classList.add("active");

                    answer.style.display = "block";

                }

            });

        });

    },

    open(index) {

        const items = document.querySelectorAll(".faq-item");

        if (!items[index]) return;

        items[index]
            .querySelector(".faq-question")
            .click();

    },

    closeAll() {

        document.querySelectorAll(".faq-item").forEach(item => {

            item.classList.remove("active");

            const answer = item.querySelector(".faq-answer");

            if (answer) {

                answer.style.display = "none";

            }

        });

    }

};
/* ==========================================================
   MODULE : VH_TABS
   Professional Tabs System
========================================================== */

VelviHub.modules.tabs = {

    init() {

        this.bind();

    },

    bind() {

        const tabGroups = document.querySelectorAll(".vh-tabs");

        if (!tabGroups.length) return;

        tabGroups.forEach(group => {

            const buttons = group.querySelectorAll(".vh-tab-btn");
            const panels = group.querySelectorAll(".vh-tab-panel");

            if (!buttons.length || !panels.length) return;

            // First Tab Active
            buttons[0].classList.add("active");
            panels[0].classList.add("active");

            buttons.forEach((button, index) => {

                button.addEventListener("click", () => {

                    // Remove Active
                    buttons.forEach(btn => btn.classList.remove("active"));
                    panels.forEach(panel => panel.classList.remove("active"));

                    // Add Active
                    button.classList.add("active");

                    if (panels[index]) {
                        panels[index].classList.add("active");
                    }

                });

            });

        });

    },

    open(groupSelector, index) {

        const group = document.querySelector(groupSelector);

        if (!group) return;

        const buttons = group.querySelectorAll(".vh-tab-btn");

        if (buttons[index]) {

            buttons[index].click();

        }

    }

};
/* ==========================================================
   MODULE : VH_MODAL
   Professional Modal System
========================================================== */

VelviHub.modules.modal = {

    init() {

        this.bind();

    },

    bind() {

        // Open Modal
        document.querySelectorAll("[data-vh-modal]").forEach(button => {

            button.addEventListener("click", () => {

                const target = button.getAttribute("data-vh-modal");

                this.open(target);

            });

        });

        // Close Modal
        document.querySelectorAll(".vh-modal-close").forEach(button => {

            button.addEventListener("click", () => {

                this.close(button.closest(".vh-modal"));

            });

        });

        // Close When Clicking Background
        document.querySelectorAll(".vh-modal").forEach(modal => {

            modal.addEventListener("click", (event) => {

                if (event.target === modal) {

                    this.close(modal);

                }

            });

        });

        // ESC Key Close
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                document.querySelectorAll(".vh-modal.active").forEach(modal => {

                    this.close(modal);

                });

            }

        });

    },

    open(selector) {

        const modal = document.querySelector(selector);

        if (!modal) return;

        modal.classList.add("active");

        document.body.classList.add("vh-modal-open");

    },

    close(modal) {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.classList.remove("vh-modal-open");

    },

    closeAll() {

        document.querySelectorAll(".vh-modal").forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.classList.remove("vh-modal-open");

    }

};
/* ==========================================================
   MODULE : VH_LOADER
   Professional Loading System
========================================================== */

VelviHub.modules.loader = {

    loader: null,

    init() {

        this.loader = document.querySelector(".vh-loader");

        // Page Loaded
        window.addEventListener("load", () => {

            this.hide();

        });

    },

    show() {

        if (!this.loader) return;

        this.loader.classList.add("active");

        document.body.classList.add("vh-loading");

    },

    hide() {

        if (!this.loader) return;

        this.loader.classList.remove("active");

        document.body.classList.remove("vh-loading");

    },

    toggle() {

        if (!this.loader) return;

        this.loader.classList.toggle("active");

        document.body.classList.toggle("vh-loading");

    },

    button(button) {

        if (!button) return;

        button.disabled = true;

        button.dataset.text = button.innerHTML;

        button.innerHTML = "Loading...";

    },

    buttonDone(button) {

        if (!button) return;

        button.disabled = false;

        button.innerHTML = button.dataset.text;

    }

};
/* ==========================================================
   MODULE : VH_PROGRESS
   Professional Progress Components
========================================================== */

VelviHub.modules.progress = {

    init() {

        this.linear();
        this.circular();

    },

    // Linear Progress
    linear() {

        document.querySelectorAll(".vh-progress").forEach(progress => {

            const value = parseInt(progress.dataset.value || 0, 10);

            const bar = progress.querySelector(".vh-progress-bar");

            if (!bar) return;

            setTimeout(() => {

                bar.style.width = value + "%";

            }, 300);

        });

    },

    // Circular Progress
    circular() {

        document.querySelectorAll(".vh-circle-progress").forEach(circle => {

            const value = parseInt(circle.dataset.value || 0, 10);

            const radius = 54;
            const circumference = 2 * Math.PI * radius;

            const progress = circle.querySelector(".progress-ring");

            if (!progress) return;

            progress.style.strokeDasharray = circumference;

            progress.style.strokeDashoffset =
                circumference - (value / 100) * circumference;

            const text = circle.querySelector(".progress-value");

            if (text) {

                text.textContent = value + "%";

            }

        });

    },

    // Update Progress
    set(selector, value) {

        const progress = document.querySelector(selector);

        if (!progress) return;

        const bar = progress.querySelector(".vh-progress-bar");

        if (!bar) return;

        bar.style.width = value + "%";

    }

};
/* ==========================================================
   MODULE : VH_ANIMATION
   Professional Animation Engine
========================================================== */

VelviHub.modules.animation = {

    observer: null,

    init() {

        this.createObserver();
        this.observe();

    },

    createObserver() {

        this.observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("vh-animate");

                }

            });

        }, {

            threshold: 0.15

        });

    },

    observe() {

        document.querySelectorAll("[data-vh-animation]").forEach(element => {

            this.observer.observe(element);

        });

    },

    refresh() {

        this.observe();

    }

};
/* ==========================================================
   MODULE : VH_INIT
   Framework Initializer
========================================================== */

VelviHub.modules.init = {

    start() {

        console.log("========================================");
        console.log("   VelviHub Framework v1.0");
        console.log("   Initializing Modules...");
        console.log("========================================");

        const modules = [

            "navbar",
            "scroll",
            "darkmode",
            "search",
            "copycode",
            "toast",
            "faq",
            "tabs",
            "modal",
            "loader",
            "progress",
            "animation"

        ];

        modules.forEach(module => {

            if (

                VelviHub.modules[module] &&
                typeof VelviHub.modules[module].init === "function"

            ) {

                VelviHub.modules[module].init();

            }

        });

        console.log("========================================");
        console.log("VelviHub Framework Ready");
        console.log("Loaded Modules :", modules.length);
        console.log("Version :", VelviHub.version);
        console.log("========================================");

    }

};

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    VelviHub.modules.core.init();

    VelviHub.modules.init.start();
VelviHub.modules.progress.init();
});
