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

	// Collapse nav when link is clicked
	$(document).on('click', '.nav a', function(){
		$(".navbar-toggle").click();
	});

	runOnScroll();
	$(window).scroll(function() {
		runOnScroll();
	});

	function runOnScroll() {
		var scrolled = $(this).scrollTop(),
				$top = $('.top'),
				$brand = $('.navbar-brand'),
				winHeight = $(window).height(),
				docHeight = $(document).height(),
				full = docHeight-winHeight-292,
				scrollPercent = ((scrolled/full)*100-(292/full)*100)+'%';

		// Show/hide back to top button
		if(scrolled > 0) {
			$top.addClass('visible');
		} else {
			$top.removeClass('visible');
		}

		// Show/hide branding in the header
		if(scrolled >= 232) {
			$brand.addClass('visible');
		} else {
			$brand.removeClass('visible');
		}

		// Set pregress bar width
		$('.progressbar').width(scrollPercent);
	}

	$(document).on('click', '.show-source', function() {
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	});
});