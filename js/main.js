$(function () {
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');


  })
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');

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

  $('.mainproduct .product_tap li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.mainproduct .product_tap li').eq(idx).addClass('on').siblings().removeClass('on');
    $('.left_box .grap').eq(idx).addClass('on').siblings().removeClass('on');

  })
  $('.mainnews .news_tap .menu_box').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.mainnews .news_tap .menu_box').eq(idx).addClass('on').siblings().removeClass('on');
    $('.news .img_box').eq(idx).addClass('on').siblings().removeClass('on');

  })

  $('.mainproduct .img_tap .alsom').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.mainproduct .img_tap .alsom').eq(idx).addClass('on').siblings().removeClass('on');
    $('.left_box  .slolo figure').eq(idx).addClass('on').siblings().removeClass('on');

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