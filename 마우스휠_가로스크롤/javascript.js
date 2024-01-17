
const SLIDECONTAINER = document.querySelector('.slide_container');
const SLIDEWRAP = document.querySelector('.slide_wrap');
const SLIDECONTENT = document.querySelector('.slide_content');
const SLIDEINNER = document.querySelector('.slide_inner');
const SLIDE = document.querySelectorAll('.slide');
const html = document.querySelector('html');
const body = document.querySelector('body');

let slideTop = SLIDEWRAP.offsetTop;
let slideWid = SLIDE[0].clientWidth;
let slideInner = SLIDEINNER.clientWidth;
let slideWidPer = Math.ceil((slideWid/slideInner)*100) ;
let scrollTop;
let scrollPercent;

window.onload = function(){
  setTimeout(function(){scrollTo(0,0);},100)
}

function horizonScroll(){
  scrollTop = window.scrollY - slideTop;
  scrollPercent = Math.ceil(scrollTop /(slideTop + SLIDEWRAP.clientHeight) *100)-(slideWidPer/2);

  scrollPercent > 100 ? scrollPercent=100 : scrollPercent=scrollPercent;
  scrollPercent < 0 ? scrollPercent=0 : scrollPercent=scrollPercent;

  SLIDEINNER.style.transform = `translateX(-${scrollPercent}%)`;
}

// function slideOn(){
//   SLIDE.forEach(function(item, idx){
//     if(SLIDECONTENT.offsetLeft+300 >= SLIDE[idx].offsetLeft){
//       for(let i=0; i<item.length; i++){
//         item[idx].classList.remove('on');
//         item[i].classList.add('on');
//         console.log(item[idx]);
//       }
//     }
//   });
// }






window.addEventListener('scroll', function(){
  scrollTop = this.scrollY;

  if(scrollTop >= slideTop && scrollTop <= SLIDECONTAINER.clientHeight){
    horizonScroll();
    slideOn();
    console.log(scrollPercent)
  } 
});









