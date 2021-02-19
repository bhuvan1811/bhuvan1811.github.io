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

// Fixed Header Start

    $(window).scroll(function () {
    
        if ($(window).scrollTop() >= 1) {
            $('.header').addClass('fixedHeader');
        } else {
            $('.header').removeClass('fixedHeader');
        }
    });
  
  // Fixed Header End

  // Sidebar Start

    $('.navbar-toggler').click(function () {
        if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
            $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
        } else {
            $('.navbar-expand-md .navbar-collapse').css('left', '0px');
        }
    });
  
  // Sidebar End

  // Navbar Button Style Start

    $(document).ready(function(){
        $('.navbar-toggler').click(function(){
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active')
            }
            else{
                $(this).addClass('active')
            }
        });
    });
  
  // Navbar Button Style End

  // Contact Form Country Select Start

    $(function () {
        $('select').selectpicker();
    });

// Contact Form Country Select End

// Testimonial Slider Start
        
$('.reviewSlider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,

    responsive: [{
      breakpoint:1200,
          settings: {
          slidesToShow: 2,
  }},

  {
      breakpoint: 768,
          settings: {
          slidesToShow: 1.3,
  }},

  {
      breakpoint: 561,
          settings: {
          slidesToShow: 1,
  }},

]

});

// Testimonial Slider End

// Video Slider Start

$(document).ready(function(){
  $('.videoSlider').slick({
  slidesToShow: 1,
  dots:true,
  arrows: false,
  centerMode: true,
  });
});

// Video Slider End

$(function(){
	$(".bannerContent .typed").typed({
        strings: ["Logistics", 
                "Food Delivery", 
                "Grocery Delivery", 
                "Package Delivery", 
                "Medicine Delivery", 
                "Healthcare"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 150,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		// cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// Contact Number With Flag and Country Code Start

var input = document.querySelector("#phone");
window.intlTelInput(input, {
    nationalMode: false,
    utilsScript: "https://appxhub.com/js/utils.js",
});

$('#phone').click(function() {
    var elmcode = $(this).prev('.iti__flag-container').find('ul.iti__country-list').find('.iti__active').find(".iti__dial-code").text();
    $(this).val(elmcode + ' - ');
});

// Contact Number With Flag and Country Code End

// Modal Contact Number With Flag and Country Code Start

var input = document.querySelector("#phone2");
window.intlTelInput(input, {
    nationalMode: false,
    utilsScript: "https://appxhub.com/js/utils.js",
});

$('#phone2').click(function() {
    var elmcode = $(this).prev('.iti__flag-container').find('ul.iti__country-list').find('.iti__active').find(".iti__dial-code").text();
    $(this).val(elmcode + ' - ');
});

// Modal Contact Number With Flag and Country Code End