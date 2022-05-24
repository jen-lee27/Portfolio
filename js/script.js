//letter tokenizing for all elements of the incoming element
let tokenize = function(elem) {
    document.querySelectorAll("." + elem + " .split").forEach(elem => {
        let text = elem.innerText;
        let split = text.split('').join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
        //** aria-hidden to take web standardization into account(screen readers)
        elem.innerHTML = split;
        elem.setAttribute("aria-label", text);
    });    
};

tokenize("loading");
document.querySelectorAll(".loading .split span").forEach((span, index) => {
    setTimeout(() => {
        span.classList.add("show");
    }, 50 * index);
})

// upon page load
window.onload = function() {
    //once everything has been loaded, remove loading screen
    document.querySelector(".loading").remove();

    //header text animation
    tokenize("header");
    document.getElementById("header").querySelectorAll(".split span").forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("show");
        }, 50 * index);
    })

    let navOffset = document.getElementById("nav").offsetTop;
    
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        //nav
        if(scrollTop >= navOffset)
            nav.classList.add("on");
        else
            nav.classList.remove("on");

        //skills section
        document.querySelectorAll(".s-skills .card").forEach((elem, index) => {
            if(scrollTop >= elem.offsetTop - this.window.innerHeight/2) {
                document.querySelector(".s-skills .card:nth-child(" + (index + 1) + ")").classList.add("show");
            }
        });
    });
};
