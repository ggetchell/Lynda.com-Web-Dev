const IMAGES = document.querySelectorAll)"img");

for ( let i = 0; i < IMAGES; i++ ) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.split(0, -8);
    let type = IMAGES[i].getAttribute("data-type");
    
    console.log(imgSrc);
}
