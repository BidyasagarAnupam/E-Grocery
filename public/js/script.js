// var width = window.outerWidth;
// console.log(width);
// if(width > 1395) {
//     console.log(width + " omg");
// } else {
//     console.log(width + " omgggggggg");

// }


// for dropdown menu
function openMenu() {
    var dropDown = document.getElementById("dropDown");
    dropDown.classList.toggle("active");
}
function openMenuLogIn() {
    var dropDownLogin = document.getElementById("dropDownLogin");
    dropDownLogin.classList.toggle("active");
}
// for active any option
function activeHome() {    
    var home = document.getElementById("home");
    var account = document.getElementById("createAccount");
    var login = document.getElementById("login");
    var shop = document.getElementById("allShop");
    var about = document.getElementById("aboutUs");
    var dropDown = document.getElementById("dropDown");
    var dropDownLogin = document.getElementById("dropDownLogin");

    home.classList.add("active");
    account.classList.remove("active");
    login.classList.remove("active");
    shop.classList.remove("active");
    about.classList.remove("active");
    dropDown.classList.remove("active");
    dropDownLogin.classList.remove("active");

}
function activeAccount() {    
    var account = document.getElementById("createAccount");
    var home = document.getElementById("home");
    var login = document.getElementById("login");
    var shop = document.getElementById("allShop");
    var about = document.getElementById("aboutUs");
    var dropDown = document.getElementById("dropDown");
    var dropDownLogin = document.getElementById("dropDownLogin");

    account.classList.add("active");
    home.classList.remove("active");
    login.classList.remove("active");
    shop.classList.remove("active");
    about.classList.remove("active");
    dropDown.classList.remove("active");
    dropDownLogin.classList.remove("active");



}
function activeLogin() {    
    var login = document.getElementById("login");
    var home = document.getElementById("home");
    var account = document.getElementById("createAccount");
    var shop = document.getElementById("allShop");
    var about = document.getElementById("aboutUs");
    var dropDown = document.getElementById("dropDown");
    var dropDownLogin = document.getElementById("dropDownLogin");

    login.classList.add("active");
    home.classList.remove("active");
    account.classList.remove("active");
    shop.classList.remove("active");
    about.classList.remove("active");
    dropDown.classList.remove("active");
    dropDownLogin.classList.remove("active");



}
function activeShop() {    
    var shop = document.getElementById("allShop");
    var home = document.getElementById("home");
    var account = document.getElementById("createAccount");
    var login = document.getElementById("login");
    var about = document.getElementById("aboutUs");
    var dropDown = document.getElementById("dropDown");
    var about = document.getElementById("aboutUs");
    var dropDownLogin = document.getElementById("dropDownLogin");

    shop.classList.add("active");
    home.classList.remove("active");
    account.classList.remove("active");
    login.classList.remove("active");
    about.classList.remove("active");
    dropDown.classList.remove("active");
    dropDownLogin.classList.remove("active");



}
function activeAboutUs() {    
    var about = document.getElementById("aboutUs");
    var home = document.getElementById("home");
    var account = document.getElementById("createAccount");
    var login = document.getElementById("login");
    var shop = document.getElementById("allShop");
    var dropDown = document.getElementById("dropDown");
    var dropDownLogin = document.getElementById("dropDownLogin");

    about.classList.add("active");
    home.classList.remove("active");
    account.classList.remove("active");
    login.classList.remove("active");
    shop.classList.remove("active");
    dropDown.classList.remove("active");
    dropDownLogin.classList.remove("active");

}
// Slidding images
var start = 0;
var images = [];
var time = 3000;

images[0] = '../img/slidding/pic1.jpg';
images[1] = '../img/slidding/pic2.jpg';
images[2] = '../img/slidding/pic3.jpg';
images[3] = '../img/slidding/pic4.jpg';
images[4] = '../img/slidding/pic5.jpg';

function changeImg() {
    document.slide.src = images[start];

    if(start < images.length - 1) {
        start++;
    } else {
        start = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;


///////////////////////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////////////////

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


