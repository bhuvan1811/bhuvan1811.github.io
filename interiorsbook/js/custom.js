$(".movesA").hide();
$(".movesa").show();
$(".sign_body li a").click(function () {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".sign_body li a").removeClass("active");
    $(this).addClass("active");
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});


$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    }
    else {
        var id = $(this).data('id');

        $('.tab').find('span').removeClass('color');
        $(this).find('span').addClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs').slideUp();
        $('#tab' + id).slideDown();
    }
});
$("select").niceSelect();

//Date Picker

$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

//Date Picker End


$('.moreless-button').click(function() {
    $(this).parent("#section_read").children('div.article').find('.moretext').slideToggle();
    $(this).children('img').toggleClass('rotate');
});

// $(window).resize(function(){
//         if ($(this).width() <= 414) { 
//           $('.article').css({
//               "height":"40px",
//               "overflow":"hidden"
//           });
//         }     
// });

// $('.moreless-button').click(function() {
//     if($(window).width() <= 414) {
//         $(this).parent("#section_read").children('div.article').css("height","initial");
//     }
// });

// $('.moreless-button').click(function() {
//     if($(window).width() <= 414){
//         $(this).prev('.article').toggleClass('inheight');
//     }
// });







