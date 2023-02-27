$(document).ready(function () {
    let multipleCardCarousel = document.querySelector(
        "#multiItemCarouselExampleControls"
    );

    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    let carouselWidth = $(".multi-item-carousel-inner")[0].scrollWidth;
    let cardWidth = $(".multi-item-carousel-item").width();
    let scrollPosition = 0;
    $(".multi-item-carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $(".multi-item-carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
    $(".multi-item-carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $(".multi-item-carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
});