$('#top-btn') .click (function () {
    $('html,body') .animate ({
        scrollTop: 0
    },700);
});

// (function() {
//     var appear = false;
//     var pagetop = $('#page-top');
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {  
//         if (appear == false) {
//           appear = true;
//           pagetop.stop().animate({
//             'right': '0px' 
//           }, 300); 
//         }
//       } else {
//         if (appear) {
//           appear = false;
//           pagetop.stop().animate({
//             'right': '-50px' 
//         },300);
//        }
//       }
//     });
//     pagetop.click(function () {
//       $('body, html').animate({ scrollTop: 0 }, 500)
//       return false;
//     });
//   });

$("#hamburger") .click(function () {
    $(this) .toggleClass ("active");
    $(".menu-content") .toggleClass ("open");
});

const child = ".child" ;
$(child) .hide ();
$("#menu > li") .hover (function () {
    $(child, this) .stop() .slideDown(300);

}, function () {
    $(child, this) .stop ().slideUp(300);
});
// var scroll = new SmoothScroll('a[href*="#"]', {
//     header: '#header',
//     speed: 1000,
// });

// $('.title') .fadeIn (300);

var slideWidth = $('.slide').outerWidth();
var slideNum = $('.slide').length;

var slideSetWidth = slideWidth * slideNum; 
$('.slideSet').css('width', slideSetWidth);

var slideWidth = $('.slide').outerWidth(); 
var slideNum = $('.slide').length - 1; 
var slideSetWidth = slideWidth * slideNum;  
$('.slideSet').css('width', slideSetWidth);

$('.slideSet').animate({
    left: -slideWidth
  });

  var sliding = function(){
    $('.slideSet').animate({
      left: -slideWidth
    });
  }

  $('.slider-next').click(function(){
    sliding();
  });

  var slideCurrent = 0; 

  var sliding = function(){
    $('.slideSet').animate({
      left: slideCurrent * -slideWidth
    });
  }

  $('.slider-prev').click(function(){
    slideCurrent--;
    sliding();
  });

  $('.slider-next').click(function(){
    slideCurrent++;
    sliding();
  });

  var sliding = function(){
    if( slideCurrent < 0 ){
        slideCurrent = slideNum - 1;
    }else if( slideCurrent > slideNum - 1){ // slideCUrrent >= slideNumでも可
        slideCurrent = 0;
    }
  $('.slideSet').animate({
        left: slideCurrent * -slideWidth
      });
  }

  $('.slideSet').stop().animate({
    left: slideCurrent * -slideWidth
  });