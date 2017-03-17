$(document).ready(function(){


   

//instent click on nav li
   $("#a1").click(function() {
      $(this).addClass('active');
      $('#a2 , #a3').removeClass('active');
   });
   $("#a2").click(function() {
      $(this).addClass('active');
      $('#a1 , #a3').removeClass('active');
   });
   $("#a3").click(function() {
      $(this).addClass('active');
      $('#a2 , #a1').removeClass('active');
   });


//calc r and l ofMain
 function calcRl() {
   var leftS = $(".side-bar-1").outerWidth();
   leftS += 10;
   $(".main-bar").css('left', leftS);
   var rightS = $(".side-bar-3").outerWidth();
   rightS += 10;
   $(".main-bar").css('right', rightS);
 }
//calcTop-calcHei
   var navHei = $(".ul-1").outerHeight();
   var headerHei = $("header").outerHeight();
//calcTop
function calcTop() {
  var top = navHei + headerHei + 5;
  $(".side-bar-1 , .side-bar-3 , .main-bar").css('top', top );
}
//calcHei
function calcH() {
   var winHei = $(window).outerHeight();
   var acHei = winHei - navHei - headerHei - 17;
   $(".main-bar").height(acHei);
   var taya = acHei/2 - 3;
   $(".side-bar-3, .side-bar-4 , .side-bar-2 , .side-bar-1").height(taya);
 } 





//on load 
 calcRl();
 calcTop();
 calcH();
//on resize
$(window).resize(function() {
  calcRl();
  //calcTop();
  calcH();
});
  

});
















