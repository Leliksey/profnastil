$('.whyUs__wrapper-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slider__content').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:false,
    touchDrag: false,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
});

$('.partners__slider').owlCarousel({
    loop:true,
    margin:250,
    nav:true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})


$('.production__slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
});

$('.products__view-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    mouseDrag:false,
    touchDrag: false,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:true,
    startPosition: 'ps10',
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})

// $('.products__view-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     mouseDrag:false,
//     touchDrag: false,
//     pullDrag:false,
//     freeDrag:false,
//     URLhashListener:true,
//     startPosition: 'ps10',
//     dots:true,
//     autoplay:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:1
//         }
//     }
// });

// $('.products__color-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     mouseDrag:true,
//     touchDrag: false,
//     pullDrag:false,
//     freeDrag:false,
//     URLhashListener:true,
//     dots:true,
//     autoplay:false,
//     responsive:{
//         0:{
//             items:3
//         },
//         768:{
//             items:5
//         }
//     }
// });

$('.products__tabs-slider').owlCarousel({
    loop:true,
    nav:true,
    mouseDrag:true,
    touchDrag: false,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:true,
    startPosition: 'ps10',
    center:true,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        768:{
            items:3
        }
    }
});





$('.products__view-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.products__color-slider'
  });
  $('.products__color-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.products__view-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }
        
      ]
  });