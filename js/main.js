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
		fade: 750,
		duration: 8000,
		preload: 0,
		start: 2
	});

	let freeLessonBtn = $('.freeLessonBtn'),
		myNav = $('.my-nav'),
		myNavbar = $('.my-navbar'),
		myNumber = $('.my-number');

	if ($(document).scrollTop() > 1) {
		if (myNav.hasClass('bg-transparent')) {
			myNav.removeClass('bg-transparent');
			myNav.removeClass('navbar-in-top');
			myNav.addClass('bg-white');
		}
		if (myNavbar.hasClass('d-none')) {
			myNumber.addClass('d-none');
			myNavbar.removeClass('d-none');
		}
		if (freeLessonBtn.hasClass('border-white')) {
			freeLessonBtn.removeClass('border-white');
			freeLessonBtn.removeClass('text-white');
			freeLessonBtn.addClass('border-primary');
			freeLessonBtn.addClass('text-primary');
		}
	} else {
		if (myNav.hasClass('bg-white')) {
			myNav.addClass('navbar-in-top');
			myNav.addClass('bg-transparent');
			myNav.removeClass('bg-white');
		}
		if (myNumber.hasClass('d-none')) {
			myNumber.removeClass('d-none');
			myNavbar.addClass('d-none');
		}
		if (freeLessonBtn.hasClass('border-primary')) {
			freeLessonBtn.removeClass('border-primary');
			freeLessonBtn.removeClass('text-primary');
			freeLessonBtn.addClass('border-white');
			freeLessonBtn.addClass('text-white');
		}
	}

	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			if (myNav.hasClass('bg-transparent')) {
				myNav.removeClass('navbar-in-top');
				myNav.removeClass('bg-transparent');
				myNav.addClass('bg-white');
			}
			if (myNavbar.hasClass('d-none')) {
				myNumber.addClass('d-none');
				myNavbar.removeClass('d-none');
			}
			if (freeLessonBtn.hasClass('border-white')) {
				freeLessonBtn.removeClass('border-white');
				freeLessonBtn.removeClass('text-white');
				freeLessonBtn.addClass('border-primary');
				freeLessonBtn.addClass('text-primary');
			}
		} else {
			if (myNav.hasClass('bg-white')) {
				myNav.addClass('navbar-in-top');
				myNav.addClass('bg-transparent');
				myNav.removeClass('bg-white');
			}
			if (myNumber.hasClass('d-none')) {
				myNumber.removeClass('d-none');
				myNavbar.addClass('d-none');
			}
			if (freeLessonBtn.hasClass('border-primary')) {
				freeLessonBtn.removeClass('border-primary');
				freeLessonBtn.removeClass('text-primary');
				freeLessonBtn.addClass('border-white');
				freeLessonBtn.addClass('text-white');
			}
		}
	});

	/*
 * Replace all SVG images with inline SVG
 */
$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
});
