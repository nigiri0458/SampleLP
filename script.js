                                                            //  S w i p e r . j s
var swiper = new Swiper('.swiper-container', {
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

                                                            // A n i m e . j s

                                        // t o p
// Wrap every letter in a span
var textOutlineWrapper = document.querySelector('.top-upper-text-outline');
textOutlineWrapper.innerHTML = textOutlineWrapper.textContent.replace(/\S/g, "<span class='letter-outline'>$&</span>");

var textInsideWrapper = document.querySelector('.top-upper-text-inside');
textInsideWrapper.innerHTML = textInsideWrapper.textContent.replace(/\S/g, "<span class='letter-inside'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.top-upper-text-outline .letter-outline',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 100 * (i+1)
});

anime.timeline({loop: false})
.add({
    targets: '.top-upper-text-inside .letter-inside',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 200,
    delay: (el, i) => 1700 + 100 * (i+1)
});

                                        // t o p - m i d
anime({
    targets: '.top-mid',
    opacity: [0,1],
    translateY: -100,
    duration: 1000,
    delay: 3000
});                  

                                        // m i d 2 - s l i d e
//var banana1 = new Waypoint({
//  element: document.querySelector('.banana1'),
//  handler: function() {
//    anime({
//        targets: '.banana1',
//        opacity: 1,
//        translateX: 500,
//        duration: 3000,
//        loop: false
//    });
//  },
//  offset: '20%'
//})          

var mid2PercentValue = document.querySelector('.mid2-percent-value');


var mid2PercentPoint = new Waypoint({
    element: mid2PercentValue,
    handler: function(){
        anime({
            targets: mid2PercentValue,
            innerHTML: [0, 100],
            round: 1,
            duration: 2000,
            easing: 'easeOutQuint'
        });

        this.destroy();
    },
    offset: '80%'
})

                                                            //m i d 4 - s l i d e
/*
var windowWidth = window.innerWidth;

var mid4PreSlide1 = document.querySelector('.mid4-pre-slide1');
var mid4Slide1 = document.querySelector('.mid4-slide1-wrapper');

if(windowWidth > 480){
var mid4PreSlide1Point = new Waypoint({
    element: mid4PreSlide1,
    handler: function(){
        anime({
            targets: mid4PreSlide1,
            translateX: windowWidth - 15,
            duration: 1000,
            easing: 'easeOutQuint'
        });

        anime({
            targets: mid4Slide1,
            translateX: windowWidth - 15,
            duration: 1500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });
    },
    offset: '70%'
})
}




var mid4PreSlide2 = document.querySelector('.mid4-pre-slide2');
var mid4Slide2 = document.querySelector('.mid4-slide2-wrapper');

var mid4PreSlide2Point = new Waypoint({
    element: mid4PreSlide2,
    handler: function(){
        anime({
            targets: mid4PreSlide2,
            translateX: -windowWidth + 15,
            duration: 1000,
            easing: 'easeOutQuint'
        });

        anime({
            targets: mid4Slide2,
            translateX: -windowWidth + 15,
            duration: 1500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });
    },
    offset: '70%'
})





var mid4PreSlide3 = document.querySelector('.mid4-pre-slide3');
var mid4Slide3 = document.querySelector('.mid4-slide3-wrapper');

var mid4PreSlide3Point = new Waypoint({
    element: mid4PreSlide3,
    handler: function(){
        anime({
            targets: mid4PreSlide3,
            translateX: windowWidth - 15,
            duration: 1000,
            easing: 'easeOutQuint'
        });

        anime({
            targets: mid4Slide3,
            translateX: windowWidth - 15,
            duration: 1500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });
    },
    offset: '70%'
})





var mid4PreSlide4 = document.querySelector('.mid4-pre-slide4');
var mid4Slide4 = document.querySelector('.mid4-slide4-wrapper');

var mid4PreSlide4Point = new Waypoint({
    element: mid4PreSlide4,
    handler: function(){
        anime({
            targets: mid4PreSlide4,
            translateX: -windowWidth + 15,
            duration: 1000,
            easing: 'easeOutQuint'
        });

        anime({
            targets: mid4Slide4,
            translateX: -windowWidth + 15,
            duration: 1500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });
    },
    offset: '70%'
})





var mid4PreSlide5 = document.querySelector('.mid4-pre-slide5');
var mid4Slide5 = document.querySelector('.mid4-slide5-wrapper');

var mid4PreSlide5Point = new Waypoint({
    element: mid4PreSlide5,
    handler: function(){
        anime({
            targets: mid4PreSlide5,
            translateX: windowWidth - 15,
            duration: 1000,
            easing: 'easeOutQuint'
        });

        anime({
            targets: mid4Slide5,
            translateX: windowWidth - 15,
            duration: 1500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });
    },
    offset: '70%'
})
*/


                                                        //m i d 5     p a r r a l l a x





                                                        //m i d 5    s l i d e
                                                        /*
var mid5Slide1 = document.querySelector('.mid5-exp1');

var mid5Slide1Point = new Waypoint({
    element: mid5Slide1,
    handler: function(){
        anime({
            targets: mid5Slide1,
            translateY: -50,
            duration: 1000,
            opacity: 1,
            easing: 'easeOutQuint'
        });
    },
    offset: '60%'
})




var mid5Slide2 = document.querySelector('.mid5-exp2');

var mid5Slide2Point = new Waypoint({
    element: mid5Slide2,
    handler: function(){
        anime({
            targets: mid5Slide2,
            translateY: -50,
            duration: 1000,
            opacity: 1,
            easing: 'easeOutQuint'
        });
    },
    offset: '60%'
})




var mid5Slide3 = document.querySelector('.mid5-exp3');

var mid5Slide3Point = new Waypoint({
    element: mid5Slide3,
    handler: function(){
        anime({
            targets: mid5Slide3,
            translateY: -50,
            duration: 1000,
            opacity: 1,
            easing: 'easeOutQuint'
        });
    },
    offset: '60%'
})
*/


                                                        //m i d 7    s l i d e
/*
var mid7SlideTop = document.querySelector('.mid7-slide-top');

var mid7SlideTopPoint = new Waypoint({
    element: mid7SlideTop,
    handler: function(){
        anime({
            targets: '.mid7-slide-top-item1',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
        });

        anime({
            targets: '.mid7-slide-top-item2',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });

        anime({
            targets: '.mid7-slide-top-item3',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 400
        });
    },
    offset: '60%'
})




var mid7SlideBottom = document.querySelector('.mid7-slide-bottom');

var mid7SlideBottomPoint = new Waypoint({
    element: mid7SlideBottom,
    handler: function(){
        anime({
            targets: '.mid7-slide-bottom-item1',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
        });

        anime({
            targets: '.mid7-slide-bottom-item2',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });

        anime({
            targets: '.mid7-slide-bottom-item3',
            translateY: -100,
            duration: 800,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 400
        });
    },
    offset: '60%'
})
*/

                                                            //m i d 1 0 - p r i c e
var mid10Price = document.querySelector('.price');

var mid10PricePoint = new Waypoint({
    element: mid10Price,
    handler: function(){
        anime({
            targets: '.price-1',
            translateY: -80,
            duration: 500,
            easing: 'easeOutQuint',
            opacity: 1
        });

        anime({
            targets: '.price-2',
            translateY: -80,
            duration: 500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 200
        });

        anime({
            targets: '.price-3',
            translateY: -80,
            duration: 500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 400
        });

        anime({
            targets: '.price-4',
            translateY: -80,
            duration: 500,
            easing: 'easeOutQuint',
            opacity: 1,
            delay: 600
        });
    },
    offset: '60%'
})


