/* ==========================================================
   VELVI HERITAGE APP
   Premium JavaScript 2026
   PART 1 - CORE APP ENGINE
========================================================== */

"use strict";

/* ===============================
   DOM Ready
================================ */

document.addEventListener("DOMContentLoaded", () => {

    VelviApp.init();

});

/* ===============================
   Main Application
================================ */

const VelviApp = {

    init(){

        this.cache();

        this.mobileMenu();

        this.stickyHeader();

        this.smoothScroll();

        this.activeNavigation();

        console.log("Velvi Heritage App Loaded Successfully");

    },

/* ===============================
   Cache Elements
================================ */

    cache(){

        this.header=document.querySelector("header");

        this.menuButton=document.querySelector(".menu-toggle");

        this.navbar=document.querySelector(".navbar");

        this.navLinks=document.querySelectorAll(".navbar a");

    },

/* ===============================
   Mobile Menu
================================ */

    mobileMenu(){

        if(!this.menuButton || !this.navbar) return;

        this.menuButton.addEventListener("click",()=>{

            this.navbar.classList.toggle("active");

            this.menuButton.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

        this.navLinks.forEach(link=>{

            link.addEventListener("click",()=>{

                this.navbar.classList.remove("active");

                this.menuButton.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });

    },

/* ===============================
   Sticky Header
================================ */

    stickyHeader(){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>80){

                this.header?.classList.add("scrolled");

            }else{

                this.header?.classList.remove("scrolled");

            }

        });

    },

/* ===============================
   Smooth Scroll
================================ */

    smoothScroll(){

        document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

            anchor.addEventListener("click",(e)=>{

                const target=document.querySelector(anchor.getAttribute("href"));

                if(!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            });

        });

    },

/* ===============================
   Active Navigation
================================ */

    activeNavigation(){

        const sections=document.querySelectorAll("section[id]");

        window.addEventListener("scroll",()=>{

            let current="";

            sections.forEach(section=>{

                const top=section.offsetTop-120;

                const height=section.offsetHeight;

                if(pageYOffset>=top){

                    current=section.getAttribute("id");

                }

            });

            this.navLinks.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#"+current){

                    link.classList.add("active");

                }

            });

        });

    }

};
/* ==========================================================
   PART 2 - PREMIUM SCROLL SYSTEM
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Scroll Engine
================================ */

scrollSystem(){

    this.progressBar=document.getElementById("reading-progress");

    this.backButton=document.getElementById("backToTop");

    window.addEventListener("scroll",()=>{

        this.updateProgress();

        this.toggleBackToTop();

    });

},

/* ===============================
   Reading Progress
================================ */

updateProgress(){

    if(!this.progressBar) return;

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    this.progressBar.style.width=progress+"%";

},

/* ===============================
   Back To Top
================================ */

toggleBackToTop(){

    if(!this.backButton) return;

    if(window.scrollY>350){

        this.backButton.classList.add("show");

    }else{

        this.backButton.classList.remove("show");

    }

},

/* ===============================
   Scroll Top
================================ */

backToTop(){

    if(!this.backButton) return;

    this.backButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

});

/* ===============================
   Register Module
================================ */

const oldInit=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit();

    this.scrollSystem();

    this.backToTop();

};
/* ==========================================================
   PART 3 - PREMIUM SCROLL REVEAL ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Scroll Reveal
================================ */

scrollReveal(){

const elements=document.querySelectorAll(

".fade-up,.zoom-in,.slide-left,.slide-right,.timeline-item,.feature-card,.gallery-item,.stat-card,.place-card"

);

if(!elements.length) return;

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

},

{

threshold:.15,

rootMargin:"0px 0px -60px 0px"

}

);

elements.forEach(el=>observer.observe(el));

},

/* ===============================
   Hero Animation
================================ */

heroAnimation(){

const hero=document.querySelector(".hero");

if(!hero) return;

hero.classList.add("show");

},

/* ===============================
   Floating Effect
================================ */

floatingCards(){

document.querySelectorAll(".float").forEach(item=>{

item.style.animationDelay=

(Math.random()*2).toFixed(2)+"s";

});

},

/* ===============================
   Image Hover Effect
================================ */

imageEffects(){

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

}

});

/* ===============================
   Register Module
================================ */

const oldInit2=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

oldInit2();

this.scrollReveal();

this.heroAnimation();

this.floatingCards();

this.imageEffects();

};
/* ==========================================================
   PART 4 - PREMIUM GALLERY ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Gallery System
================================ */

gallery(){

this.galleryItems=document.querySelectorAll(".gallery-item");

this.galleryImages=document.querySelectorAll(".gallery-item img");

if(!this.galleryImages.length) return;

this.galleryImages.forEach((image,index)=>{

image.dataset.index=index;

image.addEventListener("click",(e)=>{

this.openLightbox(index);

});

});

},

/* ===============================
   Create Lightbox
================================ */

createLightbox(){

if(document.querySelector("#lightbox")) return;

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<div class="lightbox-overlay">

<span class="lightbox-close">&times;</span>

<img class="lightbox-image" src="" alt="">

<button class="lightbox-prev">&#10094;</button>

<button class="lightbox-next">&#10095;</button>

</div>

`;

document.body.appendChild(lightbox);

this.lightbox=document.getElementById("lightbox");

this.lightboxImage=document.querySelector(".lightbox-image");

this.closeButton=document.querySelector(".lightbox-close");

this.prevButton=document.querySelector(".lightbox-prev");

this.nextButton=document.querySelector(".lightbox-next");

this.closeButton.onclick=()=>this.closeLightbox();

this.lightbox.onclick=(e)=>{

if(e.target===this.lightbox){

this.closeLightbox();

}

};

this.prevButton.onclick=()=>this.previousImage();

this.nextButton.onclick=()=>this.nextImage();

},

/* ===============================
   Open Image
================================ */

openLightbox(index){

this.currentImage=index;

this.createLightbox();

this.lightbox.style.display="flex";

this.lightboxImage.src=this.galleryImages[index].src;

document.body.style.overflow="hidden";

},

/* ===============================
   Close
================================ */

closeLightbox(){

this.lightbox.style.display="none";

document.body.style.overflow="";

},

/* ===============================
   Next Image
================================ */

nextImage(){

this.currentImage++;

if(this.currentImage>=this.galleryImages.length){

this.currentImage=0;

}

this.lightboxImage.src=

this.galleryImages[this.currentImage].src;

},

/* ===============================
   Previous Image
================================ */

previousImage(){

this.currentImage--;

if(this.currentImage<0){

this.currentImage=this.galleryImages.length-1;

}

this.lightboxImage.src=

this.galleryImages[this.currentImage].src;

},

/* ===============================
   Keyboard Support
================================ */

galleryKeyboard(){

document.addEventListener("keydown",(e)=>{

if(!this.lightbox ||

this.lightbox.style.display!=="flex") return;

if(e.key==="Escape"){

this.closeLightbox();

}

if(e.key==="ArrowRight"){

this.nextImage();

}

if(e.key==="ArrowLeft"){

this.previousImage();

}

});

}

});

/* ===============================
   Register Module
================================ */

const oldInit3=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

oldInit3();

this.gallery();

this.galleryKeyboard();

};
/* ==========================================================
   PART 5 - PREMIUM COUNTER ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Counter Animation
================================ */

counterAnimation(){

const counters=document.querySelectorAll("[data-counter]");

if(!counters.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

this.startCounter(entry.target);

observer.unobserve(entry.target);

}

});

},{threshold:.4});

counters.forEach(counter=>{

observer.observe(counter);

});

},

/* ===============================
   Start Counter
================================ */

startCounter(counter){

const target=parseInt(counter.dataset.counter);

const duration=2000;

const startTime=performance.now();

const update=(currentTime)=>{

const progress=Math.min(

(currentTime-startTime)/duration,

1

);

const value=Math.floor(progress*target);

counter.textContent=value.toLocaleString();

if(progress<1){

requestAnimationFrame(update);

}else{

counter.textContent=target.toLocaleString();

}

};

requestAnimationFrame(update);

},

/* ===============================
   Progress Bars
================================ */

progressBars(){

const bars=document.querySelectorAll(".progress-fill");

if(!bars.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width=entry.target.dataset.width;

entry.target.style.width=width+"%";

observer.unobserve(entry.target);

}

});

},{threshold:.4});

bars.forEach(bar=>{

bar.style.width="0%";

observer.observe(bar);

});

},

/* ===============================
   Circle Progress
================================ */

circleProgress(){

document.querySelectorAll(".circle-progress").forEach(circle=>{

const percent=circle.dataset.percent;

circle.style.setProperty("--percent",percent);

});

}

});

/* ===============================
   Register Module
================================ */

const oldInit4=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

oldInit4();

this.counterAnimation();

this.progressBars();

this.circleProgress();

};
/* ==========================================================
   PART 6 - PREMIUM SEARCH & FILTER ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Initialize Search
================================ */

searchSystem(){

    this.searchInput=document.querySelector("#searchInput");
    this.searchItems=document.querySelectorAll(".search-item");
    this.filterButtons=document.querySelectorAll(".filter-btn");

    this.liveSearch();
    this.categoryFilter();

},

/* ===============================
   Live Search
================================ */

liveSearch(){

    if(!this.searchInput) return;

    this.searchInput.addEventListener("input",(e)=>{

        const keyword=e.target.value.toLowerCase().trim();

        this.searchItems.forEach(item=>{

            const text=item.textContent.toLowerCase();

            if(text.includes(keyword)){

                item.style.display="";

            }else{

                item.style.display="none";

            }

        });

    });

},

/* ===============================
   Category Filter
================================ */

categoryFilter(){

    if(!this.filterButtons.length) return;

    this.filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            this.filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const category=button.dataset.filter;

            this.filterItems(category);

        });

    });

},

/* ===============================
   Filter Items
================================ */

filterItems(category){

    this.searchItems.forEach(item=>{

        const itemCategory=item.dataset.category;

        if(category==="all" || category===itemCategory){

            item.style.display="";

        }else{

            item.style.display="none";

        }

    });

},

/* ===============================
   Search Result Counter
================================ */

resultCounter(){

    const counter=document.querySelector("#resultCount");

    if(!counter) return;

    const visible=[...this.searchItems].filter(item=>{

        return item.style.display!=="none";

    });

    counter.textContent=`${visible.length} Results`;

}

});

/* ===============================
   Auto Update Result Count
================================ */

document.addEventListener("input",()=>{

    VelviApp.resultCounter();

});

document.addEventListener("click",()=>{

    VelviApp.resultCounter();

});

/* ===============================
   Register Module
================================ */

const oldInit5=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit5();

    this.searchSystem();

    this.resultCounter();

};
/* ==========================================================
   PART 7 - PREMIUM DARK MODE ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Theme Initialization
================================ */

themeSystem(){

    this.themeButton=document.querySelector("#themeToggle");

    this.loadTheme();

    this.themeToggle();

    this.detectSystemTheme();

},

/* ===============================
   Load Saved Theme
================================ */

loadTheme(){

    const theme=localStorage.getItem("velvi-theme");

    if(theme){

        document.documentElement.setAttribute("data-theme",theme);

    }

},

/* ===============================
   Toggle Theme
================================ */

themeToggle(){

    if(!this.themeButton) return;

    this.themeButton.addEventListener("click",()=>{

        const current=

        document.documentElement.getAttribute("data-theme");

        const next=current==="dark"

            ? "light"

            : "dark";

        document.documentElement.setAttribute(

            "data-theme",

            next

        );

        localStorage.setItem(

            "velvi-theme",

            next

        );

        this.updateThemeIcon(next);

    });

},

/* ===============================
   Update Theme Icon
================================ */

updateThemeIcon(theme){

    if(!this.themeButton) return;

    this.themeButton.innerHTML=

        theme==="dark"

        ? "☀️"

        : "🌙";

},

/* ===============================
   Detect System Theme
================================ */

detectSystemTheme(){

    if(localStorage.getItem("velvi-theme")) return;

    const dark=window.matchMedia(

        "(prefers-color-scheme: dark)"

    ).matches;

    const theme=dark ? "dark" : "light";

    document.documentElement.setAttribute(

        "data-theme",

        theme

    );

    this.updateThemeIcon(theme);

},

/* ===============================
   Watch System Theme
================================ */

watchTheme(){

    const media=window.matchMedia(

        "(prefers-color-scheme: dark)"

    );

    media.addEventListener("change",(e)=>{

        if(localStorage.getItem("velvi-theme")) return;

        const theme=e.matches

            ? "dark"

            : "light";

        document.documentElement.setAttribute(

            "data-theme",

            theme

        );

        this.updateThemeIcon(theme);

    });

}

});

/* ===============================
   Register Module
================================ */

const oldInit6=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit6();

    this.themeSystem();

    this.watchTheme();

};
/* ==========================================================
   PART 8 - PREMIUM NOTIFICATION & LOADER ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Initialize UI System
================================ */

uiSystem(){

    this.createToast();

    this.networkStatus();

    this.pageLoader();

},

/* ===============================
   Toast Notification
================================ */

createToast(){

    if(document.querySelector("#toast")) return;

    const toast=document.createElement("div");

    toast.id="toast";

    document.body.appendChild(toast);

},

showToast(message,type="success"){

    const toast=document.querySelector("#toast");

    if(!toast) return;

    toast.className=`toast ${type}`;

    toast.innerHTML=message;

    toast.classList.add("show");

    clearTimeout(this.toastTimer);

    this.toastTimer=setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

},

/* ===============================
   Page Loader
================================ */

pageLoader(){

    window.addEventListener("load",()=>{

        const loader=document.querySelector("#pageLoader");

        if(loader){

            loader.classList.add("hide");

            setTimeout(()=>{

                loader.remove();

            },600);

        }

    });

},

/* ===============================
   Network Status
================================ */

networkStatus(){

    window.addEventListener("online",()=>{

        this.showToast(

            "✅ Internet Connected",

            "success"

        );

    });

    window.addEventListener("offline",()=>{

        this.showToast(

            "❌ Internet Disconnected",

            "error"

        );

    });

},

/* ===============================
   Success Message
================================ */

success(message){

    this.showToast(message,"success");

},

/* ===============================
   Error Message
================================ */

error(message){

    this.showToast(message,"error");

},

/* ===============================
   Warning Message
================================ */

warning(message){

    this.showToast(message,"warning");

}

});

/* ===============================
   Register Module
================================ */

const oldInit7=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit7();

    this.uiSystem();

};
/* ==========================================================
   PART 9 - PERFORMANCE & PWA ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Performance Engine
================================ */

performanceSystem(){

    this.lazyImages();

    this.registerServiceWorker();

    this.monitorPerformance();

    this.visibilityHandler();

    this.globalErrorHandler();

},

/* ===============================
   Lazy Loading Images
================================ */

lazyImages(){

    const images=document.querySelectorAll("img[data-src]");

    if(!images.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const img=entry.target;

            img.src=img.dataset.src;

            img.removeAttribute("data-src");

            img.classList.add("loaded");

            observer.unobserve(img);

        });

    },{

        rootMargin:"100px"

    });

    images.forEach(img=>observer.observe(img));

},

/* ===============================
   Service Worker
================================ */

registerServiceWorker(){

    if("serviceWorker" in navigator){

        window.addEventListener("load",()=>{

            navigator.serviceWorker.register("sw.js")

            .then(()=>{

                console.log("Service Worker Registered");

            })

            .catch(err=>{

                console.error(err);

            });

        });

    }

},

/* ===============================
   Performance Monitor
================================ */

monitorPerformance(){

    window.addEventListener("load",()=>{

        const time=

        performance.now().toFixed(2);

        console.log(

        `Page Loaded in ${time} ms`

        );

    });

},

/* ===============================
   Page Visibility
================================ */

visibilityHandler(){

    document.addEventListener(

    "visibilitychange",()=>{

        if(document.hidden){

            console.log("App Paused");

        }else{

            console.log("App Active");

        }

    });

},

/* ===============================
   Global Error Handler
================================ */

globalErrorHandler(){

    window.addEventListener(

    "error",(event)=>{

        console.error(

        "Application Error:",

        event.message

        );

    });

}

});

/* ===============================
   Register Module
================================ */

const oldInit8=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit8();

    this.performanceSystem();

};
/* ==========================================================
   PART 10 - FINAL PRODUCTION ENGINE
========================================================== */

Object.assign(VelviApp,{

/* ===============================
   Production Mode
================================ */

production(){

    console.log("%cVelvi Heritage App",
    "color:#16a34a;font-size:18px;font-weight:bold;");

    console.log("Production Mode Enabled");

},

/* ===============================
   Device Detection
================================ */

detectDevice(){

    const width=window.innerWidth;

    if(width<768){

        document.body.classList.add("mobile");

    }else if(width<1024){

        document.body.classList.add("tablet");

    }else{

        document.body.classList.add("desktop");

    }

},

/* ===============================
   Browser Compatibility
================================ */

browserCheck(){

    if(!("IntersectionObserver" in window)){

        alert("Your browser is outdated. Please update.");

    }

},

/* ===============================
   Window Resize
================================ */

resizeHandler(){

    window.addEventListener("resize",()=>{

        document.body.classList.remove(

            "mobile",

            "tablet",

            "desktop"

        );

        this.detectDevice();

    });

},

/* ===============================
   Memory Cleanup
================================ */

cleanup(){

    window.addEventListener("beforeunload",()=>{

        console.log("Cleaning Resources...");

    });

},

/* ===============================
   Application Information
================================ */

appInfo(){

    return{

        name:"Velvi Heritage",

        version:"1.0.0",

        developer:"VelviHub",

        status:"Production"

    };

},

/* ===============================
   Debug Mode
================================ */

debug(){

    console.table(this.appInfo());

}

});

/* ===============================
   Register Final Module
================================ */

const oldInit9=VelviApp.init.bind(VelviApp);

VelviApp.init=function(){

    oldInit9();

    this.production();

    this.detectDevice();

    this.browserCheck();

    this.resizeHandler();

    this.cleanup();

    this.debug();

};
