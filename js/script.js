
const On = document.querySelector(".header-area");
const Slide = document.querySelector(".main-area .swiper-box #main-swipe .swiper-wrapper .color" );

Slide.addEventListener(function(){
  On.classList("on");
  console.log(Slide);
});