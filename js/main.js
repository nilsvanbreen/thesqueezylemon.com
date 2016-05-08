var main = function() {
/*preload gifs delay*/
    function preloader() {
	if (document.getElementById) {
		document.getElementById("preloader1").style.background = "url('../img/browser-tristate.gif') no-repeat -9999px -9999px;";
		document.getElementById("preloader2").style.background = "url('../img/browser-devish.gif') no-repeat -9999px -9999px;";
		document.getElementById("preloader3").style.background = "url('../img/browser-ishb.gif') no-repeat -9999px -9999px;";
        document.getElementById("preloader4").style.background = "url('../img/browser-marinelli.gif') no-repeat -9999px -9999px;";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
    /*web*/
$("#laptop").waypoint(function(){
    $("#laptop").attr("src","img/icon-web1.gif");
}, { offset: '80%'});
    
 /*branding*/
$("#speaker, #speaker-p").waypoint(function(){
    $("#speaker, #speaker-p").attr("src","img/icon-branding1.gif");
}, { offset: '80%'});
    
    /*web*/ 
$("#hand, #hand-p").waypoint(function(){
    $("#hand, #hand-p").attr("src","img/icon-uiux1.gif");
}, { offset: '80%'});

    /*team button*/
    
$("#btnshake").waypoint(function(){
    $('#btnshake').addClass('shake');
}, { offset: '70%'});

$("#btnshake").waypoint(function(){
    $('#btnshake').removeClass('shake');
}, { offset: '110%'});
    
    
  /*MENU  Push the body and the menu over  */

  $('.hamburger').click(function() {

if ($(window).width() < 1025) {
      $('body').animate({
      right: "90vw"
    }, 200);
    
    $('.menu').animate({right: "0"}, 200);
     $(this).hide(600);
    $('.icon-close').delay(150).show(400);
}
else {    
    $('body').animate({
      right: "33.6vw"
    }, 200);
    
    $('.menu').animate({right: "0px"}, 200);
     $(this).hide(600);
    $('.icon-close').delay(150).show(400);
    }  
  });
    
    $('.icon-close, li a').click(function() {
     
if ($(window).width() < 1025) {
        $('body').animate({right: "0"}, 200);
        $('.menu').animate({right: "-90vw"}, 200);
        $('.hamburger').slideDown(500);
        $('.icon-close').hide(75);
    }
        
else{
        $('body').animate({right: "0"}, 200);
        $('.menu').animate({right: "-33.6vw"}, 200);
        $('.hamburger').slideDown(500);
        $('.icon-close').hide(75);
    }
    });
    
      /*CONTACT  Push the body and th econtact over  */

  $('.contact-btn').click(function() {
if ($(window).width() < 1025) {
    $('body').animate({
      right: "90vw"
    }, 200);
    
    $('.contact').animate({right: "0"}, 200);
    $('.icon-close').delay(150).show(400); 
    
}
 else{
    $('body').animate({
      right: "33.6vw"
    }, 200);
    
    $('.contact').animate({right: "0"}, 200);
    $('.icon-close').delay(150).show(400);
     }
  });
    
      $('.icon-close').click(function() {
if ($(window).width() < 1025) {
      $('body').animate({
            right: "0"
        }, 200);
        $('.contact').animate({right: "-90vw"}, 200);
        $('.icon-close').hide(75);
}
else{
        $('body').animate({
            right: "0"
        }, 200);
        $('.contact').animate({right: "-33.6vw"}, 200);
        $('.icon-close').hide(75);
    }
    });
    /*smooth scroll on link click anchor */  
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
    
/*rotate text*/
        
$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

/*show more*/
$('.btn-more').click(function() {
$('.work3,.work4').slideDown(600);
$(this).hide(600).delay(400)    
});


    
    
};


$(document).ready(main);