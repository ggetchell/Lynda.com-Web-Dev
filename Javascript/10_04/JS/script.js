const IMAGES = document.querySelectorAll("img");

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;
    
    for ( let 1 = 0; i < 5; i++ ) {
        markup[i] = imaSrc + "-" + width + ".jpg" + width + "w";
        width += 400;
    }
    
    return markup.join();
}

for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
    let Srcset = makeSrcset(imgSrc);
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}
