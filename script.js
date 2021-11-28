/* Transparent Header turns White Background with Black Text on Scroll */
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function scrollToTop() {
    window.scrollTo(0,0);
}