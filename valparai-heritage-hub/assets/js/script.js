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
