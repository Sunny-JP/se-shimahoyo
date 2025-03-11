// Cafi Net JavaScript Document
$(function () {
	// scroll
	$('a[href^=#]').click(function () {
		var id = $($(this).attr('href')).offset().top;
		$('body,html').animate({ scrollTop: id }, 500, 'swing');
		return false;
	});
	// pc nav
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('#nav').stop(true).animate({ 'top': '0' }, 'fast', 'swing');
		} else {
			$('#nav').stop(true).animate({ 'top': '85' }, 'fast', 'swing');
		}
	});
});