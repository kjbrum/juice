$(function() {
	$('body')
		.scrollspy({ target: '.navbar-collapse' })
		.flowtype({
			minimum   : 320,
			maximum   : 780,
			minFont   : 12,
			maxFont   : 16,
		});

	$(document).on('click', '#main-navigation li a, .top, .navbar-brand', function() {
		var section = $(this).attr('href'),
				extra = -9;
		$('html, body').animate({scrollTop:$(section).offset().top+extra},{duration:1000});
		return false;
	});

});