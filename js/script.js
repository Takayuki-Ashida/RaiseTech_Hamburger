$(function(){
//   // 1. 変数mqlにMediaQueryListを格納
// const mql = window.matchMedia('(min-width: 1100px)');

// // 2. メディアクエリに応じて実行したい処理を関数として定義
// const handleMediaQuery = function(mql) {
//   if (mql.matches) {
//     // 1100px以上の場合の処理
//     $('h4').removeClass('js-menu');
//     // console.log('1100px以上');
//   } else {
//     // 1100px未満の場合の処理
//     $('h4').addClass('.js-menu');
//     // console.log('1100px未満');
//   }
// };
  $('.js-menu').click(function(){
    $('.is-menu').fadeIn();
  });
  // $('.js-menu-close').click(function(){
  //   $('.is-menu').fadeOut();
  // });
  $('.js-menu-close').click(function(){
    $('.is-menu').removeAttr('style');
  });
  
  $('.js-menu').click(function(){
    $('.is-bg').fadeIn();
  });
  $('.js-menu-close').click(function(){
    $('.is-bg').fadeOut(200);
  });


});