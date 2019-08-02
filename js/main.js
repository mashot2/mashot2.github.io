$(document).ready(function () {
	$.backstretch([
		"assets/slides/slider-1.jpg",
		"assets/slides/slider-2.jpg",
		"assets/slides/slider-3.jpg",
		"assets/slides/slider-4.jpg",
		"assets/slides/slider-5.jpg",
		"assets/slides/slider-6.jpg",
		"assets/slides/slider-7.jpg",
		"assets/slides/slider-8.jpg",
	], {
		fade: 1000,
		duration: 4000,
		preload: 0,
		start: 0
	});

	let freeLessonBtn = $('.freeLessonBtn'),
		myNav = $('nav'),
		myNavbar = $('.my-navbar'),
		myNumber = $('.my-number');
	//
	// if ($(document).scrollTop() > 1) {
	// } else {
	// }

	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			if (myNav.hasClass('in-top')) {
				myNav.removeClass('in-top');
			}
		} else {
			if (!myNav.hasClass('in-top')) {
				myNav.addClass('in-top');
			}
		}
	});

	/*
 * Replace all SVG images with inline SVG
 */
	$('img.svg').each(function () {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
});
