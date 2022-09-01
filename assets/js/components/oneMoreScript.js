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
