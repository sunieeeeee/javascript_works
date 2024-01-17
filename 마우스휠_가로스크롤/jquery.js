$(function(){
  const WINDOW = $(window);
  const SLIDECONTAINER = $('.slide_container')
  const SLIDEWRAP = $('.slide_wrap');
  const SLIDECONTENT = $('.slide_content');
  const SLIDEINNER = $('.slide_inner');
  const SLIDE = $('.slide');

  let slideTop = SLIDEWRAP.offset().top;
  let slideWid = SLIDE.width();
  let slideInner = SLIDEINNER.width();
  let slideWidPer = Math.ceil((slideWid/slideInner)*100) ;
  let scrollTop;
  let scrollPercent;


    $('html, body').animate({scrollTop: '0'},100);

  
 
    //setTimeout(function(){$(window).prop("location", location.href);},100);100;

  
  

  function horizonScroll(){
    scrollTop = scrollTop - slideTop;  // sticky 부분부터 scrollTop 0 으로 맞추기
    scrollPercent = Math.ceil((scrollTop /(slideTop + SLIDEWRAP.height())) *100) //ceil : 올림
    -(slideWidPer/2);
    scrollPercent > 100 ? scrollPercent=100 : scrollPercent=scrollPercent;
    scrollPercent < 0 ? scrollPercent=0 : scrollPercent=scrollPercent;
    
    SLIDEINNER.css('transform', `translateX(-${scrollPercent}%)`);
  }

  function slideOn(){
    for(let i=0; i<SLIDE.length; i++){
      if(SLIDECONTENT.offset().left+300 >= $(SLIDE[i]).offset().left){
        $(SLIDE).removeClass('on');
        $(SLIDE[i]).addClass('on')
      }
    }
  }

  WINDOW.on('scroll', function(e){
    scrollTop = $(this).scrollTop();    

    if(scrollTop >= slideTop&& scrollTop <= SLIDECONTAINER.height()){ 
      horizonScroll();
      slideOn();
    } 
  });
  
  







  //  참고사이트 : https://bokartstudio.tistory.com/35

  /*
    클론사이트 참고 : 
    https://www.thehyundaiseoul.com/art_culture/
    https://www.thehyundaiseoul.com/floor_1/
  */
  
  









});







