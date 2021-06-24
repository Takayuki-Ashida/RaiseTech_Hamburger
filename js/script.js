$(function () {

  $(window).on('load resize', function () {
    var w = $(window).width();
    var x = 1200;
    if (w <= x) {
      $('#SideMenu').addClass('js-menu'),
        $('.js-menu').click(function () {
          $('.is-menu').fadeIn();
        }),
        $('.js-menu').click(function () {
          $('.is-bg').fadeIn();
        });
    } else {
      $('#SideMenu').removeClass('js-menu')
    }
  });


  $('.js-menu-close').click(function () {
    $.when(
      // 先に実行したい処理をここ
      $('.is-menu').fadeOut()

    ).done(function () {
      // その後実行したい処理をここ
      $('.is-menu').removeAttr('style');
    });
  });



  $('.js-menu-close').click(function () {
    $('.is-bg').fadeOut(),
      $('.is-bg').removeAttr('style')
  });
});

