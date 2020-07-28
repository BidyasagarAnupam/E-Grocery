// Display go to top button
var goToTop = document.getElementById("goToTop");
window.onscroll = function() {
    scrollFuntion();
}
 
function scrollFuntion() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goToTop.style.display = "flex";
    } else {
    goToTop.style.display = "none";
    }
}