var videos = document.getElementsByTagName("video");

function checkScroll() {
    var fraction = 0.8; // Play when 80% of the player is visible.

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

$(".header__lang .button").click(function() {
    $(this).parent().find(".button").removeClass("button__active");
    $(this).addClass("button__active");
});

$(".header__burger").click(function() {
    $(".burger__menu").addClass("active");
});
$(".burger__close").click(function() {
    $(".burger__menu").removeClass("active");
});

if ($(window).width() < 768) {
    $(".whyUs__wrapper").addClass("whyUs__wrapper-slider");
    $(".technology .whyUs__wrapper").removeClass("whyUs__wrapper-slider");
}
$( window ).resize(function() {
    if ($(window).width() < 768) {
        $(".whyUs__wrapper").addClass("whyUs__wrapper-slider");
    }
    else {

        $(".whyUs__wrapper").removeClass("whyUs__wrapper-slider");
    }
  });


$(".whyUs__info .btn__prev").click(function() {
    $(".whyUs__wrapper .owl-prev").click();
});
$(".whyUs__info .btn__next").click(function() {
    $(".whyUs__wrapper .owl-next").click();
});


$(".slider__button").click(function() {
    $(".slider__content .owl-next").click();
});

$(".partners__prev").click( function() {
    $(".partners__slider .owl-prev").click();
});
$(".partners__next").click(function() {
    $(".partners__slider .owl-next").click();
});


$(".experience__block").on("mouseover", function() {
    $(this).parent().find(".experience__block").removeClass("experience__block_white");
    $(this).addClass("experience__block_white");
});

$(".production__info-button").on("click", function() {
    $(this).parent().parent().parent().find(".production__item ").removeClass("bg__none");
    $(this).parent().parent().parent().find(".production__item .production__info").removeClass("hide");
    $(this).parent().parent().parent().find(".production__item .production__slider").addClass("hide");


    $(this).parent().addClass("hide");
    $(this).parent().parent().find(".production__slider").removeClass("hide");
    $(this).parent().parent().addClass("bg__none");
});


$(".slider img").on("mouseover", function() {
    if ($(this).parent().prev().hasClass("center")) {
        $(this).parent().parent().find(".center").addClass("not__center");
    }
});
$(".slider__content img").on("mouseleave", function() { 
    $(this).parent().parent().find(".not__center").removeClass("not__center");
});

$(".products__view-items > div:not(:first-child)").addClass("hide");
$(".products__tabs-prev").on("click", function() {
    
    let owl = $('.products__view-items');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel', [100]);
    if($(".products__tab-active").hasClass("first")) {
        $(".first").removeClass("products__tab-active");
        $(".last").addClass("products__tab-active");
        // $(this).addClass("disabled");
    } else {
        // $(this).parent().find(".disabled").removeClass("disabled");
        $(".products__tab-active").prev().addClass("products__tab-active");
        $(".products__tab-active").next().removeClass("products__tab-active");
    };
    $(".products__view-items").find(".owl-item").find("div").addClass("hide");
    $(".products__view-items").find(".active div").removeClass("hide");
    $(".products__view-items").find(".products__h75").removeClass("hide");
    $(".products__view-items").find(".products__h75 *").removeClass("hide");

    $(".products__tabs-slider .owl-prev").click();
});


$(".products__tabs-next").on("click", function() {
    let owl = $('.products__view-items');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel', [100]);
    if($(".products__tab-active").hasClass("last")) {
        $(".last").removeClass("products__tab-active");
        $(".first").addClass("products__tab-active");
        // $(this).addClass("disabled");
    } else {
        // $(this).parent().find(".disabled").removeClass("disabled");
        $(".products__tab-active").next().addClass("products__tab-active");
        $(".products__tab-active").prev().removeClass("products__tab-active");
    };
    $(".products__view-items").find(".owl-item").find("div").addClass("hide");
    $(".products__view-items").find(".active").find("div").removeClass("hide");
    
    $(".products__tabs-slider .owl-next").click();
});

$(".products__tab").on("click", function() {
    $(this).parent().find(".products__tab-active").removeClass("products__tab-active");
    $(this).addClass("products__tab-active");

    var timeOut = function () {
    $(".products__view-items").find(".owl-item").find("div").addClass("hide");
    $(".products__view-items").find(".owl-item.active").find("div").removeClass("hide");
    }
    setTimeout(timeOut, 500);
    
    // if($(this).hasClass("first")) {
    //     $(this).parent().parent().find(".disabled").removeClass("disabled");
    //     $(this).parent().parent().find(".products__tabs-prev").addClass("disabled");
    // } else if ($(this).hasClass("last")) {
    //     $(this).parent().parent().find(".disabled").removeClass("disabled");
    //     $(this).parent().parent().find(".products__tabs-next").addClass("disabled");
    // } else {
    //     $(this).parent().parent().find(".disabled").removeClass("disabled");
    // }

});


$(".products__item-prev").on("click", function() {
    $(".products__color-slider .owl-prev").click();
    // let owl = $('.products__view-slider');
    // owl.owlCarousel();
    // owl.trigger('prev.owl.carousel', [500]);
});
$(".products__item-next").on("click", function() {
    $(".products__color-slider .owl-next").click();
    // let owl = $('.products__view-slider');
    // owl.owlCarousel();
    // owl.trigger('next.owl.carousel', [500]);
});

if ($(window).width() < 768) {
    $(".products__tabs-list").addClass("products__tabs-slider");
}