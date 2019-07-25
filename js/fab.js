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
	
});