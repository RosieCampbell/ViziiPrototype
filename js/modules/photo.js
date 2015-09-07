registerModule("photo", photo_ui, photo, false);
var images = [];
var index = 0;
var prevVol = 0;

function photo_ui(div) {

    var imgurls = ['../img1.jpg', '../img2.jpg', '../img3.jpg', '../img4.jpg', '../1.jpg', '../9.jpg', '../4.jpg', '../10.jpg', '../6.jpg', '../2.jpg', '../8.jpg', '../7.jpg', '../5.jpg', '../11.jpg', 'http://www.djsets.co.uk/pixebay/rave.jpg', 'http://www.festivalawards.com/wp-content/uploads/Two-Days-A-Week-Festival.jpg', 'http://positivenews.org.uk/wp-content/uploads/2013/05/Sunrise-festival-matty-james2011-529-385x250.jpg', 'http://instashot.net/wp-content/uploads/2014/04/PARTY.jpg']
    for (var i = 0; i < imgurls.length; i++) {
        images[i] = new Image();
        images[i].src = imgurls[i];
    };

}

function photo() {

    if (images[index] && images[index].complete) {
        canvasContext.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
    if (volume > prevVol * 1.1) {
        index = Math.floor(Math.random() * images.length);
        console.log(index);
    }

    prevVol = volume;


}