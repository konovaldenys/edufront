var html = document.documentElement,
	body = document.body,
	isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

html.className = html.className.replace('no-js', '');

if(isTouchDevice) {
	html.className += ' touch';
	body.style.cursor = 'pointer';
}
else {
	html.className += ' no-touch';
}
/*
 * Custom scripts
 */
(function ($) {
    $('.screenshots-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.feedback-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

})(jQuery);