// Настройки для карусели
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

// Настройка для бургера
const burger = document.getElementById('burger');
const toggleMenu = () => {
  const menu = document.getElementById('menu');
  const header = document.getElementById('header');

  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
    header.classList.remove("expanded");
  } else {
    menu.classList.add("opened");
    header.classList.add("expanded");
  }

}
burger.addEventListener('click', () => toggleMenu() )
