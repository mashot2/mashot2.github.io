$(document).ready(function () {
	$.backstretch([
		"slides/slider-1.jpg",
		"slides/slider-2.jpg",
		"slides/slider-3.jpg",
		"slides/slider-4.jpg",
		"slides/slider-5.jpg",
		"slides/slider-6.jpg",
		"slides/slider-7.jpg",
		"slides/slider-8.jpg",
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
});
