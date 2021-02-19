$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});


$(document).ready(function() {
	function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 1300);
  }
  $('[data-scroll]').on('click', scrollToSection);
}());




   $('#contact_form').submit(function (evt) {
                evt.preventDefault();
                var postdata = $(this).serialize();
                var url = $(this).attr('action');
                $.get(url, postdata, function (out) {
                    $("#contact_form")[0].reset();
                    $('.msg').removeClass('hidden');
                });
            });

   $( "button" ).click(function() {
  $( "div.success" ).fadeIn( 300 );
});