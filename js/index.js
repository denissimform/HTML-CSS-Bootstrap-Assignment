var multipleCardCarousel = document.querySelector(
    "#multiItemCarouselExampleControls"
);

var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
});
var carouselWidth = $(".multi-item-carousel-inner")[0].scrollWidth;
var cardWidth = $(".multi-item-carousel-item").width();
var scrollPosition = 0;
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