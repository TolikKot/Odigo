$(function () {

	// BURGER TOGGLE
	$('.menu__icon').click(function (event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

	
	// FIXED HEADER
	var header = $('#header');
	var mainScreen = $('#main-screen');
	var mainScreenH = mainScreen.innerHeight();
	var scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, mainScreenH);

	$(window).on('scroll resize', function () {
		var mainScreenH = mainScreen.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, mainScreenH);
	});

	function checkScroll(scrollPos, mainScreenH) {
		if (scrollPos > mainScreenH ) { header.addClass('fixed'); } else if (scrollPos < mainScreenH ) {
			header.removeClass('fixed');
		}
	};
	

	// IBG
	function ibg() {
		$.each($('div>.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();


	// SMOOTH SCROLL
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		var elementId = $(this).data('scroll');
		var elementOffset = $(elementId).offset().top;

		$('.menu__list a').removeClass('link-active');
		$(this).addClass('link-active');
	
		$('.menu__body').removeClass('active');
		$('.menu__icon').removeClass('active');
		$('body').removeClass('lock');
		
		$('html, body').animate({ scrollTop: elementOffset - 15 }, 1500);
	});


	// FIXED BUTTON UP
	$(function() {
		$('.scrollup').click(function() {
		  $("html, body").animate({
			 scrollTop:0
		  },1000);
		})
	 })
	 $(window).scroll(function() {
		if ($(this).scrollTop()>300) {
		  $('.scrollup').fadeIn();
		}
		else {
		  $('.scrollup').fadeOut();
		}
	 });




	
	
	
})