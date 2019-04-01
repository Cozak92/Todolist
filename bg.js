const bg = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(numbers){
    const image = new Image();
    image.src = `images/${numbers+1}.jpg`;
    image.classList.add("bgImage");
    bg.appendChild(image);
    console.dir(bg.classList);
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();