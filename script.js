navbar = document.getElementById("navbar");
navElements = document.getElementById("nav-elements");

// pour recuperer l'information du Scroll!
window.addEventListener("scroll", function(){
    const scroll = this.document.documentElement.scrollTop;

    console.log(scroll)

    if (scroll > 200) {
        navbar.style.height = "7vh";
        navElements.style.height = "7vh";
        navbar.style.background = "rgba(52, 187, 255, 0.884)"
    } else {
        navbar.style.height = "15vh ";
        navElements.style.height = "15vh";
        navbar.style.background = "#34BDFF"
    }
})