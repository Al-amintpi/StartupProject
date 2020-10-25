$(document).ready(function(){

	$('.menu ul li a').click(function(){
		var value = $(this).attr('href');
		console.log(value);
		$('html, body').animate({
			scrollTop:$(value).offset().top
		}, 1000);
		return false;
	});

	$(".scrollbutton").click(function() { 
                $("html, body").animate({ 
                    scrollTop: $( 
                      'html, body').get(0).scrollHeight 
                }, 1000); 
            }); 

	$('.scrollTop').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 1000);
	});

	$('.test-popup').magnificPopup({
	 	type:'image'
	 });

	var next = "<i class='fas fa-caret-left'></i>";
	var prev = "<i class='fas fa-caret-right'></i>"
	$('.quote-content').owlCarousel({
		items:1,
		nav:true,
		dots:false,
		loop:true,
		navigation: true,
    	navText:[
    	next,
    	prev
    	]
  		 
	});

	$('.company-content').owlCarousel({
		items:4,
		nav:false,
		dots:false,
		loop:true,
		margin:10,
		navigation: true,
    	navText:[
    	next,
    	prev
    	],
    	responsive:{
        0:{
            items:1,
       
        },
        575:{
            items:2,
            
        },
        991:{
            items:3
            
        }
    }

  		 
	});
});


var owl = $('.single-team-member');
owl.owlCarousel({
		items:4,
		nav:false,
		dots:false,
		margin:10,
		loop:true,
		responsive:{
        0:{
            items:1,
       
        },
        575:{
            items:2,
            
        },
        991:{
            items:4
            
        }
    }

});
// Go to the next item
$('.nextBtn').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.prevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


$(window).scroll(function(){
	var value = $(this).scrollTop();
	console.log(value);
	
})


$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu').slideToggle(1000);
		return false;
	});
});


$(window).scroll(function(){
	var value = $(this).scrollTop();
	console.log(value);

	if(value>400){
	 		$('.scrollTop').show();
	 	}else{
	 		$('.scrollTop').hide();
	 	}
	if(value>500){
		$('.header-area').addClass('fixedmenu');
	}else{
		$('.header-area').removeClass('fixedmenu');
	}	
});