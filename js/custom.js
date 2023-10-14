$(function(){

	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});

	$(window).load(function () {
		
		$(".splash").fadeOut(1000,function () {
				
			$(this).remove();
			
		});
	});
	
	var itemsOwl = $('#itemsOwl');
	 
	  itemsOwl.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	
	var clientsOwl = $('#clientsOwl');
	 
	  clientsOwl.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [991,2], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  

	  

	var x = $(".Count strong").text();
	
    $(".Count span.plus").click(function () {
    	x++;
    	$(".Count strong").text(x);
    });
    $(".Count span.minus").click(function () {
		
		if(x > 1) {
			x--;
			var $this = $(".Count strong");
			$(".Count strong").text(x);
		}
    });
	  

	/****** Start Tabs ******/
	
	$(".tabsBtn li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	  
  	$( ".selectmenu" ).selectmenu();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	
	
});
