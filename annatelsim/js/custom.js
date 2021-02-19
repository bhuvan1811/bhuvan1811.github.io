$(window).scroll(function () {
    if ($(window).scrollTop() >=5) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});
//
//if ($(window).width() <= 767) {
//    $('.bannerLeft').insertAfter($('.bannerRgt'));
//}
//
//if ($(window).width() <= 767) {
//    $('.footer_left').insertAfter($('.footer_right'));
//}

$(document).ready(function(){
    $("#myModal").modal('show');
});
