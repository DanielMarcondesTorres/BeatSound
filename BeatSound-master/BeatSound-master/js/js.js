
$(document).ready(function(){
  $('.slick-disponiveis').slick({
    centerMode: false,
    slidesToShow: 2,
    prevArrow: $('.slick-prev-disponiveis'),
    nextArrow: $('.slick-next-disponiveis'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
          infinite:false
        }
      }
    ]
  });
  $('.slick-andamento').slick({
    centerMode: false,
    slidesToShow: 4,
    prevArrow: $('.slick-prev-andamento'),
    nextArrow: $('.slick-next-andamento'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
          infinite:false
        }
      }
    ]
  });
  $('.slick-populares').slick({
    centerMode: false,
    slidesToShow: 2,
    prevArrow: $('.slick-prev-populares'),
    nextArrow: $('.slick-next-populares'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
          infinite:false
        }
      }
    ]
  });
});