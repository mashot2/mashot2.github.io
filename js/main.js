$(document).ready(function () {
	//Fab functions
	$('button.btn-1').show();
	$('button.btn-2').hide();
	$(window).on('click', function () {
		$('.fab-options').removeClass('active');
		if ($('.fab-options').hasClass('active')) {
			$('button.btn-1').hide();
			$('button.btn-2').show();
		} else {
			$('button.btn-2').hide();
			$('button.btn-1').show();
		}
	});
	$(".fab").on("click", function (event) {
		$('.fab-options').toggleClass('active');
		$('img.help-img').src = '123';
		$('button.btn-1').toggle();
		$('button.btn-2').toggle();
		event.stopPropagation();
	});

	//Check scroll position to show or hide menu
	if ($(document).scrollTop() > 1) {
		$('.my-navbar').removeClass('hide');
		$('.my-number').addClass('hide');
		$('.my-btn').addClass('btn-outline-primary');
		$('.my-btn').removeClass('border-white');
		$('.my-btn').removeClass('text-white');
		$('.my-nav').removeClass('bg-transparent');
		$('.my-nav').addClass('bg-white');
		$('.my-nav').removeClass('navbar-in-top');
	} else {
		$('.my-number').removeClass('hide');
		$('.my-navbar').addClass('hide');
		$('.my-btn').removeClass('btn-outline-primary');
		$('.my-btn').addClass('border-white');
		$('.my-btn').addClass('text-white');
		$('.my-nav').addClass('bg-transparent');
		$('.my-nav').removeClass('bg-white');
		$('.my-nav').addClass('navbar-in-top');
	}

	// Main carousel function
	$('.fullBackground').fullClip({
		images: ['assets/slides/slider-1.jpg',
			'assets/slides/slider-2.jpg',
			'assets/slides/slider-3.jpg',
			'assets/slides/slider-4.jpg',
			'assets/slides/slider-5.jpg',
			'assets/slides/slider-6.jpg',
			'assets/slides/slider-7.jpg',
			'assets/slides/slider-8.jpg'],
		transitionTime: 1000,
		wait: 5000
	});

	// Change active class in navbar depend of scroll position
	$('a[href*=#]').bind('click', function (e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 600, function () {
			location.hash = target;
		});
		return false;
	});
});


$(window).scroll(function () {
	if ($(document).scrollTop() > 1) {
		$('.my-navbar').removeClass('hide');
		$('.my-number').addClass('hide');
		$('.my-btn').addClass('btn-outline-primary');
		$('.my-btn').removeClass('border-white');
		$('.my-btn').removeClass('text-white');
		$('.my-nav').removeClass('bg-transparent');
		$('.my-nav').addClass('bg-white');
		$('.my-nav').removeClass('navbar-in-top');
	} else {
		$('.my-number').removeClass('hide');
		$('.my-navbar').addClass('hide');
		$('.my-btn').removeClass('btn-outline-primary');
		$('.my-btn').addClass('border-white');
		$('.my-btn').addClass('text-white');
		$('.my-nav').addClass('bg-transparent');
		$('.my-nav').removeClass('bg-white');
		$('.my-nav').addClass('navbar-in-top');
	}

	var scrollDistance = $(window).scrollTop();
	// Assign active class to nav links while scolling
	$('.page-section').each(function (i) {
		if ($(this).position().top <= scrollDistance) {
			$('.navigation a.active').removeClass('active');
			$('.navigation a').eq(i).addClass('active');
		}
	});
}).scroll();
