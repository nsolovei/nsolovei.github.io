$(function(){
//Pop-up window
	$('.js_open_popup').click(function(e){
		e.preventDefault();
	    $('.js_popap').show();
	});
	$('.js_close').click(function(){
		$('.js_popap').hide();
	});
// Panel expand	
	$('.js_panel-expand').click(function(){
		$('.js_user-menu').show(300);
		$('.js_panel-expand').hide();
	});

//Slider
	$('.slider').slick({
	  	dots: false,
	 	infinite: true,
		// speed: 300,
	    arrows: false,
	    responsive: [{
	    	breakpoint: 1024,
	    	settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
		    }
		},]
	});

})


