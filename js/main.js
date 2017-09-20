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
    
    
/*send btn*/
$('.btn-send').click(function() {
$(this).hide(200);
$('.message-send').show(200);
    });
    
  /*MENU  Push the body and the menu over  */

  $('.hamburger').click(function() {

if ($(window).width() < 1025) {
  
     $('.menu').css({visibility: "visible"});
    $('.menu').animate({right: "0px"}, 200);
    
     $(this).hide(600);
    $('.icon-close').delay(150).show(400);
}
      
else {    

    $('.menu').css({visibility: "visible"});
    $('.menu').animate({right: "0px",}, 200);
     $(this).hide(600);
    $('.icon-close').delay(150).show(400);
    }  
  });
    
    $('.icon-close, li a').click(function() {
     
if ($(window).width() < 1025) {
        $('.menu').css({visibility: "hidden"});
        $('.menu').animate({right: "-90vw"}, 200);
        $('.hamburger').slideDown(500);
        $('.icon-close').hide(75);
    }
        
else{
        $('.menu').css({visibility: "hidden"});
        $('.menu').animate({right: "-33.6vw"}, 200);
        $('.hamburger').slideDown(500);
        $('.icon-close').hide(75);
    }
    });
    
      /*CONTACT  Push the body and th econtact over  */

  $('.contact-btn').click(function() {
if ($(window).width() < 1025) {

    $('.contact').css({visibility: "visible"});
    $('.contact').animate({right: "0"}, 200);
    $('.icon-close').delay(150).show(400); 
    
}
 else{
   
    $('.contact').css({visibility: "visible"});
    $('.contact').animate({right: "0"}, 200);
    $('.icon-close').delay(150).show(400);
     }
  });
    
      $('.icon-close').click(function() {
if ($(window).width() < 1025) {
        $('.contact').css({visibility: "hidden"});
        $('.contact').animate({right: "-90vw"}, 200);
        $('.icon-close').hide(75);
}
else{
        $('.contact').css({visibility: "hidden"});
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
/*tristate*/
$('img.hover-tristate').hover(function(){
    $(this).attr('src','img/browser-tristate-hover.jpg');
},function(){
     $(this).attr('src','img/browser-tristate.jpg'); 
});

/*devish*/
$('img.hover-devish').hover(function(){
    $(this).attr('src','img/browser-devish-hover.jpg');
},function(){
     $(this).attr('src','img/browser-devish.jpg'); 
});

/*ishb*/
$('img.hover-ishb').hover(function(){
    $(this).attr('src','img/browser-ishb-hover.jpg');
},function(){
     $(this).attr('src','img/browser-ishb.jpg'); 
});

/*marinelli*/
$('img.hover-marinelli').hover(function(){
    $(this).attr('src','img/browser-marinelli-hover.jpg');
},function(){
     $(this).attr('src','img/browser-marinelli.jpg'); 
});
    
/*show more*/
$('.btn-more').click(function() {
$('.work4,.work5').slideDown(600);
$(this).hide(600).delay(400)    
});


    
    
};


$(document).ready(main);