window.addEventListener('DOMContentLoaded', () => {
    const header__nav = document.querySelector('.header__nav'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__nav.classList.toggle('header__nav_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__nav.classList.toggle('header__nav_active');
        })
    })
})

$(document).ready(function() {
    
    /* Fixed Header */ 
    let header = $(".header__nav");
    let promo = $(".promo");
    let promoH = promo.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $(".header__nav");
    let navToggle = $(".header__navToggle");

    checkScroll(scrollPos, promoH)

    $(window).on("scroll resize", function() {
        promoH = promo.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, promoH);
    });

    function checkScroll(scrollPos, promoH) {
        if( scrollPos > promoH ) {
            header.addClass("header__nav_fixed");
        } else {
            header.removeClass("header__nav_fixed");
        }
    }

    // Smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

    $('.solutions__item').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
              },
        ]
    });
});