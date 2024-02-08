$(function () {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        centeredSlides: true,
        // centeredSlidesBounds: true,
        direction: "vertical",
        spaceBetween: 16,
        slidesPerView: 3,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        autoHeight: true,
        initialSlide: 2,
        breakpoints: {
            0: {
                direction: "horizontal",
                slidesPerView: 5,
            },
            1200: {
                direction: "vertical",
                slidesPerView: 3,
            },
        }
    });
    var galleryTop = new Swiper(".gallery-top", {
        direction: "horizontal",
        autoHeight: true,
        spaceBetween: 10,
        initialSlide: 2,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        a11y: {
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
        },
        keyboard: {
            enabled: true,
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    galleryTop.on("slideChangeTransitionStart", function () {
        galleryThumbs.slideTo(galleryTop.activeIndex);
    });
    galleryThumbs.on("transitionStart", function () {
        galleryTop.slideTo(galleryThumbs.activeIndex);
    });
});