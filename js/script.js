$(document).ready(function(){
    $(".main-nav>li").hover(function(){
      $(this).find(".sub-nav").stop().slideToggle(200);
   });

   /*언어선택*/
   $('.language').click(function(){
        $(this).find('.global-language').slideToggle(150);
   })

   $('.slidein:first-child').show();

   $(".arr-left").click(function(e){
      e.preventDefault();
      showSlide(--slideIndex);
   });

   $(".arr-right").click(function(e){
      e.preventDefault();
      showSlide(++slideIndex);
   });

   setInterval("showSlide(++slideIndex)", 3000);



/* datepicker  $('start').datetimepicker({}); */ 
    $('#check-in').datetimepicker({
        format:'Y년 m월 d일',
        onShow:function(ct){
            this.setOptions({
                maxDate: $('#check-out').val()? $('#check-out').val():false
            })
        },
        timepicker:false,
        lang:'kr'
    });
    $("#check-out").datetimepicker({
        format:'Y년 m월 d일',
        onShow:function(ct){
            this.setOptions({
                minDate : $('#check-in').val()? $('#check-in').val():false
            })
        },
        timepicker:false,
        lang:'kr'
    });

}); //jquery




var slideIndex = 1;

// function slideView(n){
//    showSlide(slideIndex += n);
// }

function showSlide(e) {
  if(e > 5){
      slideIndex = 1;
  }else if(e < 1){
      slideIndex = 5;
  }else{
      slideIndex = e;
  }
  console.log(slideIndex);
  $('.slidein').fadeOut(300);
  $(".slidein:nth-child("+slideIndex+")").fadeIn(300);
}




// this는 main-nav 하위에 subnav에서 찾아라


