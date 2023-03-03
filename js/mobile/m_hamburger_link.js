//모바일 햄버거 메뉴 스크롤 시  이벤트
var mml_id = 0;
var mmlc_scroll = 0;

$(".mm_menu_link > ul > li").click(function () {
  $(this).addClass("mml_cl").siblings().removeClass("mml_cl");
  mml_id = $(this).index() + 1;
  if (mml_id == 1) {
    $(".mm_menu_link_contents").animate({ scrollTop: 0}, 1000);
  } else if (mml_id == 2) {
    $(".mm_menu_link_contents").animate({ scrollTop: 1071}, 1000);
  } else if (mml_id == 3) {
    $(".mm_menu_link_contents").animate({ scrollTop: 2315}, 1000);
  } else {
    $(".mm_menu_link_contents").animate({ scrollTop: 4421}, 1000); 
  }
  console.log(mml_id);
});

mm_scroll();//스크롤 내릴 시 조건 영역에 메인 글자 색상 변경 함수

function mm_scroll() {
  $(".mm_menu_link_contents").scroll(function() {
    mmlc_scroll = $(this).scrollTop();
    if (mmlc_scroll <= 1070) {
      $(".mm_menu_link > ul > li:nth-of-type(1)")
        .addClass("mml_cl")
        .siblings()
        .removeClass("mml_cl");
    } else if (mmlc_scroll >= 1071 && mmlc_scroll <= 2314) {
      $(".mm_menu_link > ul > li:nth-of-type(2)")
        .addClass("mml_cl")
        .siblings()
        .removeClass("mml_cl");
    } else if (mmlc_scroll >= 2315 && mmlc_scroll <= 4420) {
      $(".mm_menu_link > ul > li:nth-of-type(3)")
        .addClass("mml_cl")
        .siblings()
        .removeClass("mml_cl");
    } else {
      $(".mm_menu_link > ul > li:nth-of-type(4)")
        .addClass("mml_cl")
        .siblings()
        .removeClass("mml_cl");
    }
  });
}

