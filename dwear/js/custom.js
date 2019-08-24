// review & rating start
$(document).ready(function() {
    $(".setReview > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(200);
            $(".setReview > a i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".setReview > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".setReview > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).siblings (".content").slideDown(200);
        }
    });
});

// review & rating end

$(document).ready(function () {
    $(".set li a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent('li').next(".content").slideUp(200);
            $(".set li a i").removeClass("fa-angle-down").addClass("fa-angle-right");
        } else {
            $(".set li a i").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-down");
            $(".set li a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this).parent('li').next(".content").slideDown(800);
        }
    });
});

$(document).ready(function () {
    $(".set2 > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next(".menuCont").slideUp(500);
            $(".set2 > a i").removeClass("fa-angle-down").addClass("fa-angle-right");
        } else {
            $(".set2 > a i").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-down");
            $(".set2 > a").removeClass("active");
            $(this).addClass("active");
            $(".menuCont").slideUp(200);
            $(this).next(".menuCont").slideDown(500);
        }
    });
});

$(document).on("click", function (event) {
    var $trigger = $(".header .headBtm ul li");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".droplist").slideUp("fast");
        $('.header .headBtm ul li a').removeClass('active');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});

$('.slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
});

$('.slider2').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.headBtm li a.listDesign').click(function () {
    $('.designDrop').slideToggle();
    $('.clthdroplist').slideUp();
});

$('.headBtm li a.clthlistshow').click(function () {
    $('.clthdroplist').slideToggle();
    $('.designDrop').slideUp();
});

$(document).click(function () {
    document.getElementById("myButton").onclick = function () {
        location.href = "index2.html";
    };
});

$('.signupBtn a').click(function () {
    $('.sidenav').css('left', '-255px');
    $('.hamburger').removeClass('is-active');
});


//Sidebar Start

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}


$(document).on('click', '.hamburger', function () {
    //$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
        $('#mySidenav').css('top', '80px');
    } else {
        $('#mySidenav').css('left', '-255px');
        $('#mySidenav').css('top', '80px');
    }
});


if ($(window).width() <= 414) {
    $('.hamburger').click(function () {

        if ($(this).hasClass('is-active')) {
            $('#mySidenav').css('left', '0px');

        } else {
            $('#mySidenav').css('left', '-255px');
        }
    });
}

//Sidebar End


//Menu List Start


$('.listing li a').click(function () {
    var dtype = $(this).attr('data-type');
    $('.list').hide();
    $("#" + dtype).fadeIn();
});


//Menu List End

$('.signOut').click(function () {
    $('.signoutBox').slideToggle();
});

//Design Nav End

//DesignNav Inner

$('.designTop_menu li a').click(function () {
    var dtype = $(this).attr('data-type');
    $('.listItems').hide();
    $("#" + dtype).slideDown();
});

//DesignNav Inner End

//All Design Box

$('.topList li a').click(function () {
    var dtype = $(this).attr('data-type');
    $('.allDesign').hide();
    $("#" + dtype).fadeIn();
});

//All Design Box End

//Product Details Page Start

$('.slides2').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,

    responsive: [{
            breakpoint: 561,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 3,
                'centerMode': 'true',
            }
        },
            ]
});

$('.unstyled li input').click(function(){
    if($('#customPrice').is(':checked')) {
       $('#prices').show(); 
   }
    else {
        $('#prices').hide(); 
    }
});

//Product Details Page End

// cart

$(".plus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});

// cart

$('.slides_food li').click(function () {
    var elmL = $(this).find('img').attr('src');
    $('.slide_img img').hide();
    $('.slide_img img').attr('src', elmL);
    $('.slide_img img').fadeIn();
});
$('.slides button.arrow_up').click(function () {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() + 10;
    //    var pos = (cP - eP) ;
    $('.slides ul').css('transform', 'translateX(' + -(lH) + 'px)');
});

$('.slides button.arrow_down').click(function () {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() - 10;
    $('.slides ul').css('transform', 'translateX(' + lH + 'px)');
});

//Product Details Page End

//Login Modal Start

$(document).ready(function () {
    $('.all').hide();
    $('.all1').show();
    $('.click').click(function () {
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.click').removeClass('active');
        $(this).addClass('active');
    });
});

//Signup Modal Start

$('.resetPswd').click(function () {
    $(this).parents('.login_box').hide();
    $(this).parents('.login_box').next('.signUp').show();
});

$('.loginBtn').click(function () {
    $(this).parents('.signUp').hide();
    $(this).parents('.signUp').prev('.login_box').show();
});

//Signup Modal End

//Login Modal End

$(document).ready(function () {

    var items = $(".pdt_sec .productInner");
    var numItems = items.length;
    var perPage = 9;

    items.slice(perPage).hide();

    $('#paginations').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&lt;",
        nextText: "&gt;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
});

//Pagination End

//Product Page End

$('.addAddress_btn').mouseover(function () {
    $(this).children('img.greenPluse').attr('src', 'img/plusewhite.png');
});

$('.addAddress_btn').mouseout(function () {
    $(this).children('img.greenPluse').attr('src', 'img/plus.png');
});

$('.header .headBtm ul li a').click(function () {
    $('.header .headBtm ul li a').removeClass('active');
    $(this).addClass('active');
});

$('.innerSlide img ').click(function () {
    var c_elm = $(this).attr('src');
    $('.slide_img img').attr('src', c_elm);
});


function billButton() {
    window.location.href = "payment.html";
}

// review & rating end

//Header Search Box Start

function autocomplete(inp, arr) {
  var currentFocus;
 
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
 
      this.parentNode.appendChild(a);
  
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);
autocomplete(document.getElementById("myInput2"), countries);

//Header Search Box End


if ($(window).width() <= 767) {
    $('.reviewBox').insertAfter($('.txt_wraper'));
}

$('.listAleft ul li a').mouseenter(function () {
    var imElm = $(this).parent('li').children('img').attr('src');
    $('.designImg img').attr('src', imElm).fadeIn();
});
