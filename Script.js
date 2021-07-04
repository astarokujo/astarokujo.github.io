
//JQuery for the nav menu. It toggles class names icon, back and topnav back and forward with responsive, so when the pages are at the size of mobile pages, the class attributes will shrink for the menu
	$(document).ready(function(){
		$(".icon").click(function(){
			$(this).toggleClass(" responsive");
			$(".topnav").toggleClass(" responsive");
			$(".back").toggleClass(" back2");
			//Makes the back class swtich with back2
		}); 
		

  var x =  screen.height + "px";
  document.getElementById("screen").style.height = x;

//This javascript changes the colour of the navmenu when it scrolls to a certain part of the page
		var scroll_start = 0;
		var startchange = $('#startchange');
		var offset = startchange.offset();

		
		if (startchange.length){
			$(document).scroll(function() { 
				scroll_start = $(this).scrollTop();
			
			if(scroll_start > offset.top) {
				$(".back").css('background-color', '#f0f0f0');	
				$(".back").css('height', '#f0f0f0');
				document.getElementById("logo").src = "covindicatorlogo.png";
				$(".text").css('color', '#19334d');	
				$(".text").css('font-family', 'verdana');
				
				 
			} else {
					$('.back').css('background-color', 'rgba(0,0,0,0.2)');
					document.getElementById("logo").src = "CGLongWhite.png"
					$(".text").css('color', 'white');
					$(".text").css('font-family', 'verdana');
					}
			});
			
		}
	});