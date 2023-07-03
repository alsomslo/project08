$(function () {
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
  })


  $('.rgh li').on('click', function () {
    $('.rgh li').toggleClass('on').siblings().removeClass('on')
  })

  $('.mainslide').slick({

    autoplay: 5000,
    speed: 500,
    dots: true,
    arrows: false,

  })

  $('.maintap li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.maintap li').eq(idx).addClass('on').siblings().removeClass('on');
    $('.tap_detail li').eq(idx).addClass('on').siblings().removeClass('on');
  })





  $('.cases').slick({
    centerMode: true,
    centerPadding: '100px',
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.mainmenu li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.mainmenu li').eq(idx).addClass('on').siblings().removeClass('on');
    $('.pz_menu li').eq(idx).addClass('on').siblings().removeClass('on');
  })




});