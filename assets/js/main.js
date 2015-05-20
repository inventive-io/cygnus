(function ($) {
	var $document = $(document);

	$document.ready(function () {
		$('.project').on('click', function() {
			var index = $(this).data('index');
			var $focus = $('.focus[data-index="' + index + '"]');

			$focus.removeClass('focus--slide-out');
			$focus.addClass('focus--slide-in');
		});

		$('.focus__nav').on('click', function() {
			$('.focus').addClass('focus--slide-out');
		});

		$document.on('scroll', function() {
			var threshold = $('.section--projects').offset().top;
			if ($document.scrollTop() > threshold) {
				$('.header__background').addClass('header__background--slide-in');
			} else {
				$('.header__background').removeClass('header__background--slide-in');
			}
		});
    });

})(jQuery);