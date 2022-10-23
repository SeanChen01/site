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
	$(".btn-gotop").click(function() {
	  $('body, html').animate({
		scrollTop: 0
	  }, 500);
	});
});