// Fixed Header Start
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $(".header").addClass("fixedHeader");
  } else {
    $(".header").removeClass("fixedHeader");
  }
});
// Fixed Header End

$(".navbar-toggler").on("click", function () {
  if ($(this).parents(".navbar").find(".navbar-collapse").hasClass("show")) {
    $(this)
      .parents(".navbar")
      .find(".navbar-collapse")
      .removeClass("show")
      .addClass("showBox");
  } else {
    $(this)
      .parents(".navbar")
      .find(".navbar-collapse")
      .removeClass("showBox")
      .addClass("show");
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

$(document).on("click", ".passwordToggleLink", function () {
  var pswdInput = $(this).parents(".passwordBox").find("input");
  if (pswdInput.attr("type") === "password") {
    pswdInput.attr("type", "text");
    $(this).parents('.passwordBox').find('.passwordToggle a').html('Hide');
  } else {
    pswdInput.attr("type", "password");
    $(this).parents('.passwordBox').find('.passwordToggle a').html('Show');
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
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='./img/bannerLeft.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='./img/bannerRight.svg'>",
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
    cssEase: "linear",
    infinite: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
// Home Banner End

// Sliders End

// Scroll to top start
$(document).on("click", ".scrollTop a", function () {
  // $("html, body").animate({ scrollTop: 0 }, "slow");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Scroll to top end

// Equipments / Gallery Load More Start
$(document).ready(function () {
  $(".equipmentCards").slice(0, 15).show();
  if ($(".equipmentCards:hidden").length != 0) {
    $(".showEquipmentsMore").show();
  }
  $(".showEquipmentsMore").on("click", function (e) {
    e.preventDefault();
    $(".equipmentCards:hidden").slice(0, 3).slideDown();
    if ($(".equipmentCards:hidden").length == 0) {
      $(".showEquipmentsMore").css("display", "none");
    }
  });
});

$(document).ready(function () {
  $(".galleryImageBoxSec").slice(0, 7).show();
  if ($(".galleryImageBoxSec:hidden").length != 0) {
    $(".showGalleryMore").show();
  }
  $(".showGalleryMore").on("click", function (e) {
    e.preventDefault();
    $(".galleryImageBoxSec:hidden").slice(0, 4).slideDown();
    if ($(".galleryImageBoxSec:hidden").length == 0) {
      $(".showGalleryMore").css("display", "none");
    }
  });
});

// Equipments / Gallery Load More End

// Product Buy Slider Start
$(document).ready(function () {
  $(".addedProductSlider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='./img/productSlidePrev.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='./img/productSlideNext.png'>",
  });
});
// Product Buy Slider End

// Product Details Accordion Start
$(document).on("click", ".accordionHeadItem", function () {
  if ($(this).parents(".accordionBox").hasClass("active")) {
    $(this).parents(".accordionBox").removeClass("active");
    $(this).parents(".accordionBox").find(".accordionContent").slideUp();
  } else {
    $(".accordionHeadItem").parents(".accordionBox").removeClass("active");
    $(".accordionHeadItem")
      .parents(".accordionBox")
      .find(".accordionContent")
      .slideUp();
    $(this).parents(".accordionBox").addClass("active");
    $(this).parents(".accordionBox").find(".accordionContent").slideDown();
  }
});
// Product Details Accordion End

// Quantity Counter Start
$(document).ready(function () {
  $(".plusCounter").click(function () {
    var count = $(this).parent(".updateQtyCounter").find(".qtyCountInput");
    count.val(Number(count.val()) + 1);
  });

  $(".minusCounter").click(function () {
    var count = $(this).parent(".updateQtyCounter").find(".qtyCountInput");
    var amount = Number(count.val());
    if (amount > 0) {
      count.val(amount - 1);
    }
  });
});
// Quantity Counter End

// Tracking Page Scroll to Section Start
$(document).on("click", ".scrollToOrderLink", function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#order-detail").offset().top - 90,
    },
    500
  );
});
// Tracking Page Scroll to Section End

// New Products Slider Start
$(document).ready(function () {
  $(".newProductsSlider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "16px",
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='./img/bannerLeft2.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='./img/bannerRight2.svg'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
// New Products Slider End

// Gallery Detail Modal Toggle Start
$(document).on('click', '.galleryOverlay a', function(){
  $('#productDetailModal').modal('show');
  var prodImage = $(this).parents('.galleryImageBox').find('.prodDetailImg').find('img').attr('src');
  $('#productDetailModal').find('.productDetailImage').attr('src', prodImage);
})
// Gallery Detail Modal Toggle End

// Menu Overlay Start
$(document).on('click', '.menuOverlay', function(){
  $(".navbar").find(".navbar-collapse").removeClass("show").addClass("showBox");
})
// Menu Overlay End