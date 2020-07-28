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