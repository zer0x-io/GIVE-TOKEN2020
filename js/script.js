var vh = $(window).height();
console.log(vh);

var c2 = $('#container-2').offset().top;
var c3 = $('#container-3').offset().top;
var c4 = $('#container-4').offset().top;
var c5 = $('#container-5').offset().top;
var c6 = $('#container-6').offset().top;

$(window).scroll(function() {    
    var s = $(window).scrollTop();
    console.log(s);

    if(s >= 0.6*c2){
    	$('#container-2').css({'opacity':'1', 'transform':'translate(0%)'});
    }
    if(s >= 0.7*c3){
    	$('#container-3').css({'opacity':'1', 'transform':'translate(0%)'});
    }
    if(s >= 0.8*c4){
    	$('#container-4').css({'opacity':'1', 'transform':'translate(0%)'});
    }
    if(s >= 0.8*c5){
    	$('#container-5').css({'opacity':'1', 'transform':'translate(0%)'});
    }
    if(s >= 0.7*c6){
    	$('#container-6').css({'opacity':'1', 'transform':'translate(0%)'});	
    }
})

