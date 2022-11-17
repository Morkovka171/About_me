$('.carousel__wrapper').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 1150,
          settings: {
            arrows: false,
          }
        }
      ]
});