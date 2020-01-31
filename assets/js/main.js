$(document).ready(function() {
  //slick
  $('.main_carousel').slick({
    autoplay:false,
    arrows:false,
    dots:true,
    fade:false,
    speed:900,
    autoplaySpeed:4000,
    slidesToShow: 1,
  });

 $('.rev_carousel').slick({
    autoplay:true,
    arrows:true,
    dots:false,
    fade:false,
    speed:400,
    autoplaySpeed:4000,
    slidesToShow: 1,
    nextArrow: "<i class=\"fa fa-angle-right\"></i>",
    prevArrow: "<i class=\"fa fa-angle-left\"></i>",
  });

$(function(){
        $('#main_menueu').slicknav({
        	'prependTo': '.main_menu_area',
        });
    });
$(function(){
        $('#bot_res_main_menueu').slicknav({
        	'prependTo': '.responsive_menue',
        });
    });


  
});






//Add Class On scroll up
lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $(".header_are").addClass("fixed-bar");
    } else {
        $(".header_are").removeClass("fixed-bar");
    }
    lastScroll = scroll;
});


//Wow Js

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();