// Fixed Header Start
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $(".header").addClass("fixedHeader");
        // $('.sectionTop ').addClass('sectionTopScroll');
    } else {
        $(".header").removeClass("fixedHeader");
        // $('.sectionTop').removeClass('sectionTopScroll');
    }
});
// Fixed Header End

$('.navbar-toggler').on('click', function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $(this).parents('.navbar').find('.navbar-collapse').removeClass('show').addClass('showBox');
        // $('.navbar-expand-md .navbar-collapse').css('top', '-100%');
    } else {
        $(this).parents('.navbar').find('.navbar-collapse').removeClass('showBox').addClass('show');
        // $('.navbar-expand-md .navbar-collapse').css('top', '62px');
    }
});

// Navbar Button Style Start
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
});
// Navbar Button Style End

$(document).on('click', '.passwordToggleLink', function(){
    var pswdInput = $(this).parents('.passwordBox').find('input');
    if(pswdInput.attr('type') === 'password'){
        (pswdInput).attr('type', 'text');
    }else{
        (pswdInput).attr('type', 'password'); 
    }
});


// Sliders Start

// Home Banner Start
$(document).ready(function () {
    $(".homeBannerSlider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
    });
});
$(document).ready(function () {
    $(".customerSlider").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3500,
        arrows: false,
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        pauseOnHover: false,
    });
});
// Home Banner End

// Sliders End

// Scroll to top start
$(document).on('click', '.scrollTop a', function(){
    // $("html, body").animate({ scrollTop: 0 }, "slow");
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// Scroll to top end

// Equipments Load More Start 
$(document).ready(function () {
    $(".equipmentCards").slice(0, 15).show();
    if ($(".equipmentCards:hidden").length != 0) {
        $(".showEquipmentsMore").show();
    }
    $(".showEquipmentsMore").on("click", function (e) {
        e.preventDefault();
        $(".equipmentCards:hidden").slice(0, 3).slideDown();
        if ($(".equipmentCards:hidden").length == 0) {
            $(".showEquipmentsMore").css("display", 'none');
        }
    });
})
// Equipments Load More End