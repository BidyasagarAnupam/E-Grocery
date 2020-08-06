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

// for preloader
var preloader = document.getElementById('loading');
window.addEventListener('load', function() {
    preloader.style.display = 'none';
})


