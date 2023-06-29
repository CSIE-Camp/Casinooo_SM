const icon_width = 104;
const icon_height = 104;
const num_icons = 5;
const time_per_icon = 500;
// let Mycase = Math.floor(Math.random() * 10); // 0 - 9
const randomNum = Math.floor(Math.random() * 8) + 2;

const roll = (reel, offset = 0, Mycase) => {
  const delta = 2 * Math.floor(Math.random() * 10);
  const style = getComputedStyle(reel),
  backgroundPositionY = parseFloat(style["background-position-y"]);
  return new Promise((resolve, reject) =>{
    // console.log("123:" + offset);
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms`;
    
    switch (Mycase){
      case 0:
      case 1:
        if(offset == 0){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      case 2:
      case 3:
      case 4:
        if(offset == 0 || offset == 1){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      case 5:
      case 6:
        reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        break;
      case 7:
        reel.style.backgroundPositionY =`${ 104 * 8 + (1014 * randomNum)}px`;
        break;
      case 8:
        reel.style.backgroundPositionY =`${ 104 * 2 + (1014 * randomNum)}px`;
        break;
      case 9:
        reel.style.backgroundPositionY =`${ 104 * 0 + (1014 * randomNum)}px`;
        break;        
        break;
      default:
        break;  
    }
    setTimeout(() => {
      resolve(delta)
    }, 8 + delta * time_per_icon)
  })
};

function rollAll() {
  let Mycase = Math.floor(Math.random() * 10); // 0 - 9

  const reelList = document.querySelectorAll('.slot > .reel');
  
  console.log(Mycase);
  
  // console.log(Math.floor(Math.random() * 10)); // 0 - 9

  Promise
  .all(  [...reelList].map((reel, i) => roll(reel, i, Mycase)))
  .then((delta) => {
    
    switch (Mycase){
      case 0:
        document.querySelector(".say").innerHTML = "0 代幣";
        break;
      case 1:
      case 2:
      case 3:
        document.querySelector(".say").innerHTML = "1 代幣";
        break;
      case 4:
      case 5:
      case 6:
        document.querySelector(".say").innerHTML = "3 代幣";
        break;
      case 7:
        document.querySelector(".say").innerHTML = "5 代幣";
        break;
      case 8:
        document.querySelector(".say").innerHTML = "7 代幣";
        break;
      case 9:
        document.querySelector(".say").innerHTML = "10 代幣";
        break;
      default:
        break;  
    }
    
  })
}


rollAll();

// const start = document.querySelector(".say");
//     start.addEventListener("click", function(e){
//     // console.log("test");
//     rollAll();
//     });