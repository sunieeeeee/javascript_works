//요소 선택
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");
const image = document.querySelectorAll(".image");
const countHtml = document.querySelector(".count");
const IMAGE_WIDTH = -(image[0].clientWidth) ;    //한번 움직일 때 이동해야 할 거리

let count = 1
let curPos = 0;
let position = 0;   //현재 .images의 위치값
let imageLen = image.length;
let imageWidth = image[0].clientWidth 


function next(){
  position += IMAGE_WIDTH;
  curPos ++;
  images.style.transform = `translateX(${position}px)`;
  
  count++;
  countHtml.innerHTML = count;
  
  if( curPos ==  imageLen-1){
    nextBtn.setAttribute("disabled", 'true')
  }else{
    prevBtn.removeAttribute("disabled")
  }
}

function prev(){
  position -= IMAGE_WIDTH;
  curPos --;
  images.style.transform = `translateX(${position}px)`;

  count--;
  countHtml.innerHTML = count;

  if( curPos == 0 ){
    prevBtn.setAttribute("disabled", 'true')
  }else{
    nextBtn.removeAttribute("disabled")
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);















/*
  <모바일>
  touchstart : 스크린에 손가락이 닿을 때 발생
  touchmove : 스크린에 손가락이 닿은 채로 움직일 때 발생
  touchend : 스크린에서 손가락을 뗄 때 발생
  touchcancel
    : 시스템에서 이벤트를 취소실킬 때 발생
      정확한 발생 조건은 브라우저마다 다르다.
      터치를 취소한다는 것에 대한 표준이 정의되지 않아
      각 브라우저마다 다르게 발생하여 touchend 이벤트로 간주해도 무방하다.

  참고링크 : https://devinus.tistory.com/46
            https://d2.naver.com/helloworld/80243
*/
// images.addEventListener("touchstart",function(e){
//   console.log()
// });

