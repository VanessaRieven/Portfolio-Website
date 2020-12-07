
$('.scroll').click(function(e) {
	e.preventDefault();
	var url = this.href;
	var urlHash = this.hash;
	var parts = url.split('#');
	var trgt = parts[1];
	var target_offset = $('#'+trgt).offset();
	var target_top = target_offset.top;

	$('html, body').animate({
		scrollTop:target_top
	}, 500);
	if($('nav.dots a').hasClass('active')) {
		$('nav.dots a').removeClass('active');
	}
	if (urlHash == '#section-1') {
		$('nav.dots a.scroll-1').addClass('active');
	}
	if (urlHash == '#section-2') {
		$('nav.dots a.scroll-2').addClass('active');
	}
	if (urlHash == '#section-3') {
		$('nav.dots a.scroll-3').addClass('active');
	}
	if (urlHash == '#section-4') {
		$('nav.dots a.scroll-4').addClass('active');
  }
  if (urlHash == '#section-5') {
		$('nav.dots a.scroll-5').addClass('active');
	}
});


$('.hamburger, nav.main ul li a').on('click', function(e) {
	e.preventDefault();
	$('.hamburger').toggleClass('is-open');
	$('nav.main ul').toggleClass('is-open');
});

