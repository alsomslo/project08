$(function () {
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
  })

  $('.maintap li').on('click', function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $('.maintap li').eq(idx).addClass('on').siblings().removeClass('on');
    $('.tap_detail li').eq(idx).addClass('on').siblings().removeClass('on');
  })



})