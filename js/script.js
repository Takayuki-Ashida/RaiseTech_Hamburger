$(function(){
      $('.js-menu-close').click(function(){
      $.when(
        // 先に実行したい処理をここ
        $('.is-menu').fadeOut()
      
      ).done(function(){ 
        // その後実行したい処理をここ
          $('.is-menu').removeAttr('style');
      });
    });
    $('.js-menu').click(function(){
      $('.is-menu').fadeIn();
    });

    $(window).resize(function(){
      var w = $(window).width();
      var x = 1200;
      if (w < x) {
          // スマホ時の処理
          $('.js-menu').click(function(){
            $('.is-bg').fadeIn();
          });
      } else {
          // ＰＣ時の処理
          
          
      }return false
    });
      
    $('.js-menu-close').click(function(){
      $('.is-bg').fadeOut();
    });
});