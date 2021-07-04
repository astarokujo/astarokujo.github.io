
var slideIndex = 1;
//The slideindex variable is initialized at one, as that is the first slide number
showSlides(slideIndex);
//The function showSlides will take in the slideIndex number
	function plusSlides(n) {
		//Whenever function plusSlides is called, it takes in the given number from one of the 3 imagegallery html files and adds it to slideIndex before sending it to the showSlide function
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		//Whenever function currentSlide is called, it takes in the given number from one of the 3 imagegallery html files and makes it equal to slideIndex before sending it to the showSlide function
		showSlides(slideIndex = n);
	}
	function showSlides(n) {
		//showSlides takes in a number that represents itself to be slideIndex, which determines what slide the user will access for the image gallery
		var i;
		//Variable i declared here for multiple for loops
		var slides = document.getElementsByClassName("mySlides");
		//Variable slides gets the class name mySlides from the imagegallery html files which allows it to access/change its properties
		var dots = document.getElementsByClassName("dot");
		//Variable dots gets the class name dot from the imagegallery html files which allows it to access/change its properties
		if (n > slides.length) {
		//If slideIndex (which is recognized to be n in the function) is bigger than slides' length, then slideIndex will equal one
			slideIndex = 1;
		}    
		if (n < 1) {
			//If one is greater than slideIndex/n, the actual slideIndex variable will be slides.length
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			//For loop goes over slide's length and sets the display of all of its elements (except the current slide) to be none
			slides[i].style.display = "none";  
		}
		
		slides[slideIndex-1].style.display = "block";  
		//This makes only the current slide to be displayed as a block
	}