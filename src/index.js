
//geting elementes from html
const left = document.getElementById("left");
const right = document.getElementById("right");
const navmobile = document.querySelector(".mobile-nav-container")
const hero = document.getElementById("heroimg");
const desktopHero = document.querySelector(".hero-img")
const mobile = window.matchMedia("screen and (max-width: 764px");
const burgerButton = document.querySelectorAll(".burgerButton")
const menu = document.getElementById("top-menu")
const main = document.querySelector("main")
//delaring global vars
const mobileHeroImg = ["./images/mobile-image-hero-1.jpg", "./images/mobile-image-hero-2.jpg","./images/mobile-image-hero-3.jpg"];
const dekstopHeroImg = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg","./images/desktop-image-hero-3.jpg"];
var i = 0; //reminder location for hero img

//opening event listener for hero carrusel
left.addEventListener("click", changeheroLeft);
right.addEventListener("click", changeheroRigth);
// for burgerbutton validation
function validation(event) {
  if (event.matches){
    burgerButton[0].addEventListener("click", hideShow);
    burgerButton[1].addEventListener("click", hideShow);
  }
    else
    {
      burgerButton[0].removeEventListener("click", hideShow);
      burgerButton[1].removeEventListener("click", hideShow);
    }
    console.log(event.matches)
  }
  //top menu active when match.media
  validation(mobile);
function hideShow() {
  if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
      main.classList.remove("is-background")
      navmobile.classList.remove("zindex")
  }
  else {
      menu.classList.add("is-active")
      main.classList.add("is-background")
      navmobile.classList.add("zindex")
      
      }
}


//hero rotation function

function changeheroLeft() {      
  if (i > 0 ) {
    i--
  }else{
    i =2
  } 
  hero.src=mobileHeroImg[i]
  desktopHero.firstElementChild.srcset= dekstopHeroImg[i]
}
      
function changeheroRigth() {      
  if (i < 2 ) {
    i++
  }else{
    i =0
  } 
  hero.src=mobileHeroImg[i]
  desktopHero.firstElementChild.srcset= dekstopHeroImg[i]
}
   

