$(function() {
	$('body')
		.scrollspy({ target: '.navbar-collapse' })
		.flowtype({
			minimum   : 320,
			maximum   : 780,
			minFont   : 12,
			maxFont   : 16,
		});

	$('[data-toggle="popover"]').popover({
		html: true
	});

	$(document).on('click', '#main-navigation li a, .top, .navbar-brand, .overview-links a', function() {
		var section = $(this).attr('href'),
				extra = -9;
		$('html, body').animate({scrollTop:$(section).offset().top+extra},{duration:500});
		return false;
	});

	setTop();
	$(window).scroll(function() {
		setTop();
	});

	function setTop() {
		var $top = $('.top'),
				$brand = $('.navbar-brand');
		if($(this).scrollTop() > 0) {
			$top.addClass('visible');
		} else {
			$top.removeClass('visible');
		}

		if($(this).scrollTop() >= 232) {
			$brand.addClass('visible');
		} else {
			$brand.removeClass('visible');
		}
	}

	$(document).on('click', '.show-source', function() {
	  $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });
	});
});