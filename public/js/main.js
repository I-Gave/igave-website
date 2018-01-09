$(document).ready(() => {
	/* ======= Fixed Header animation ======= */
    $(window).on('scroll load', () => {
         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-scrolled');
         }         else {
             $('#header').removeClass('header-scrolled');
         }
    });

    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

     $('#rewards .upper-wrapper').matchHeight();
     $('#team .item-inner').matchHeight();
});
