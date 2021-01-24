const Bg = document.querySelector("body");

const ImgNum=7;

function paintImage(imgNum){
    const image = new Image();
    image.src =`BGImg/${imgNum+1}.jpg`; 
    image.classList.add("bgImage");
    Bg.prepend(image);
}




function genRandom() {
    const number = Math.floor(Math.random() * ImgNum);
    return number;
    paintImage();
  }
 

  function init(){
      const randomNumber = genRandom();
      paintImage(randomNumber);

    setInterval(genRandom, 5000);
  }

  init();