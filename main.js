const icon_width = 104;
const icon_height = 104;
const num_icons = 5;
const time_per_icon = 500;
// let Mycase = Math.floor(Math.random() * 10); // 0 - 9
const randomNum = Math.floor(Math.random() * 5) + 4;

const roll = (reel, offset = 0, Mycase) => {
  const delta = 2 * Math.floor(Math.random() * 10);
  const style = getComputedStyle(reel);
  const bgPosY = parseFloat(style["background-position-y"]);
  const tarBgPosY = bgPosY + delta * icon_height;
  const normTarBgPosY = tarBgPosY % bgPosY * (num_icons * icon_height); 
  // console.log(backgroundPositionY);
  return new Promise((resolve, reject) =>{
    // console.log("123:" + offset);
    reel.style.transition = `background-position-y ${8 + delta * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
    
    switch (Mycase){
      case 0:
        if(offset == 0){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      case 1:
        if(offset == 0 || offset == 1){
          reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        }
        else {
          reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        }
        break;
      case 2:
      case 3:
      case 4:
        reel.style.backgroundPositionY =`${ 104 * 6 + (1014 * randomNum)}px`;
        break;
      case 5:
      case 6:
      case 7:
        reel.style.backgroundPositionY =`${ 104 * 8 + (1014 * randomNum)}px`;
        break;
      case 8:
        reel.style.backgroundPositionY =`${ 104 * 2 + (1014 * randomNum)}px`;
        break;
      case 9:
        reel.style.backgroundPositionY =`${ 104 * 0 + (1014 * randomNum)}px`;
        break;
      case 10:
        reel.style.backgroundPositionY =`${ 104 * 4 + (1014 * randomNum)}px`;
        break;
      default:
        break;  
    }
    setTimeout(() => {
      reel.style.transition = `none`;
			// reel.style.backgroundPositionY = `${normTarBgPosY}px`;
      resolve(delta % num_icons)
    }, 8 + delta * time_per_icon)
  })
};

function rollAll() {
  let Mycase = Math.floor(Math.random() * 10); // 0 - 9
  const random_sm = Math.floor(Math.random() * 100); // 0 - 99
  if(random_sm ===99 || random_sm === 69 || random_sm === 89 || random_sm === 79){
    Mycase = 10;
  }
  const reelList = document.querySelectorAll('.slot > .bor_reel > .reel');
  
  console.log(Mycase);
  
  // console.log(Math.floor(Math.random() * 10)); // 0 - 9

  Promise
  .all(  [...reelList].map((reel, i) => roll(reel, i, Mycase)))
  .then((delta) => {
    let money_str = 0;
    switch (Mycase){
      case 0:
        money_str = "-2 代幣";
        break;
      case 1:
        money_str = "-10 代幣";
        break;
      case 2:
      case 3:
      case 4:
        money_str = "+1 代幣";
        break;
      case 5:
      case 6:
      case 7:
        money_str = "+3 代幣";
        break;
      case 8:
        money_str = "+5 代幣";
        break;
      case 9:
        money_str = "+8 代幣";
        break;
      case 10:
        money_str = "彩蛋!!(+1pt)";
        break;
      default:
        break;  
    }
    document.querySelector(".say").innerHTML = money_str;
    const body_animation = document.querySelector('body');
    body_animation.classList.add("win2");
    setTimeout(() =>{
      body_animation.classList.remove("win2");
    }, 2500);
  })

}

function init_slot(){
  const reelList = document.querySelectorAll('.slot > .bor_reel > .reel');
  document.querySelector(".say").innerHTML = "點我開始";
  [...reelList].map((reel) => {
    reel.style.backgroundPositionY = 0;
  });

}

const start_btn = document.querySelector('.say');
start_btn.addEventListener("click", (e) => {
  init_slot();
  document.querySelector(".say").innerHTML = "請稍候...";

  // console.log(e.target);
  setTimeout("rollAll()", 0);
})

// const start = document.querySelector(".say");
//     start.addEventListener("click", function(e){
//     // console.log("test");
//     rollAll();
//     });
