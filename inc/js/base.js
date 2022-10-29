$(window).ready(function() {
    // $(".page-header").load("html/page-header.html");
    // $(".page-footer").load("html/page-footer.html");
	
});


$(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 240) {
		$(".btn-gotop").fadeIn();
	  } else {
		$(".btn-gotop").fadeOut();
	  }
	});
	$(".btn-gotop,.f-logo").click(function() {
	  $('body, html').animate({
		scrollTop: 0
	  }, 500);
	});

	$("#navbar-example a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		} 
	  });
});


$(document).ready(function(){
	// Add smooth scrolling on all links inside the navbar
	$("#myScrollspy a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  }  // End if
	});
  });