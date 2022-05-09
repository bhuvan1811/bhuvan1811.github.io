// Fixed Header Start
$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $(".header").addClass("fixedHeader");
        // $('.sectionTop ').addClass('sectionTopScroll');
    } else {
        $(".header").removeClass("fixedHeader");
        // $('.sectionTop').removeClass('sectionTopScroll');
    }
});
// Fixed Header End

$('.navbar-toggler').click(function() {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $(this).parents('.navbar').find('.navbar-collapse').removeClass('show').addClass('showBox');
        // $('.navbar-expand-md .navbar-collapse').css('top', '-100%');
    } else {
        $(this).parents('.navbar').find('.navbar-collapse').removeClass('showBox').addClass('show');
        // $('.navbar-expand-md .navbar-collapse').css('top', '62px');
    }
});

// Navbar Button Style Start
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
});
// Navbar Button Style End

// Faqs Dropdown Start
$(document).on('click', '.faqsDropdown', function(){
    if($(this).parents('.faqsListSection').hasClass('activeDropdown')){
        $(this).parents('.faqsListSection').removeClass('activeDropdown');
        $(this).parents('.faqsListSection').find('.faqAnswer').slideUp();
    }
    else{
        $('.faqsDropdown').parents('.faqsListSection').removeClass('activeDropdown');
        $('.faqsDropdown').parents('.faqsListSection').find('.faqAnswer').slideUp();
        $(this).parents('.faqsListSection').addClass('activeDropdown');
        $(this).parents('.faqsListSection').find('.faqAnswer').slideDown();
    }
});
// Faqs Dropdown End

// Client Slider Start
$(document).ready(function() {
    $(".primeCustSlider").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        pauseOnHover: false,
        
        // responsive: [{
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 3,
        //         },
        //     },
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 561,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    });
});
// Client Slider End

// Expressive UI Slider Start
$('.expressiveUiSlider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: false,
    fade: true,
});
// Expressive UI Slider End

// Testimonial Slider Start
$(document).ready(function() {
    var helpers = {
        addZeros: function(n) {
            return n < 100 ? "0" + n : "" + n;
        },
    };

    function sliderInit() {
        var $slider = $(".testimonialSlider");
        $slider.each(function() {
            var $sliderParent = $(this).parent();
            $(this).slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: false,
                speed: 1000,
                slidesToShow: 1,
                adaptiveHeight: false,
                infinite: true,
            });
            if ($(this).find(".testimonialSlider").length > 1) {
                $(this).siblings(".slidesCounter").show();
            }
            $(this).on("afterChange", function(event, slick, currentSlide) {
                $sliderParent.find(".slidesCounter .active").html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find(".slick-slide").not(".slick-cloned").length;
            $sliderParent.find(".slidesCounter .totalSlides").html(helpers.addZeros(sliderItemsNum));
        });
    }
    sliderInit();
});
// Testimonial Slider End