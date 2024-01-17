const container = document.querySelector('.container');
const content = document.querySelector('.content');
let scrollL;
let allScrollVal;
let percent;



window.addEventListener("scroll", function(e){
  scrollL = container.scrollLeft;
  // allScrollVal = container.scrollWidth;
  allScrollVal = 1202;
  percent = scrollL/allScrollVal*100;
  console.log(percent)
  content.style.transform = `translateX(${percent}%)`;
});

// window.addEventListener("scroll", function(e){
//   console.log('휠움직임');
//   //content.style.transform = `translateX(${percent}%)`;
//   console.log(percent)
// });