//태안군 소식 탭메뉴
var nwstb_box = 0;
var winWidth_nwt = 0;
var ntdn = 0;
var ntl = 0 ;
var ntl_box = 0;
var ntl_txt = 0;
var pnt_box = 0;
winWidth_nwt = $("body").width();
  $(window).resize(function(){
  winWidth_nwt = $("body").width();
});


if(winWidth_nwt < 801){
$(".news_tab").click(function(){
  $(".news_tab > li").toggleClass("mns_fx");
  $(".news_tab > li.news_tab_select > a > img").toggleClass("nst_trans");
});

$(".news_tab > li").click(function(){
  ntl = $(this).index() + 1;
  ntl_box = $(this).index();
  ntl_txt =  $(".news_tab > li:nth-of-type("+ntl+")").attr("data-nts")
  $(".news_tab > li.news_tab_select > a > span:nth-of-type(2)").text(ntl_txt);
  $("#news_tab_box"+ntl_box+"").addClass("news_tab_box_show").siblings().removeClass("news_tab_box_show");  
})
}

if(winWidth_nwt > 800) {
  $(".news_tab > li").click(function(){
    pnt_box = $(this).index();
    $(this).addClass("news_tab_select").siblings().removeClass("news_tab_select");
    $(".news_tab > li:last-of-type").removeClass("news_tab_select");
    $("#news_tab_box"+pnt_box+"").addClass("news_tab_box_show").siblings().removeClass("news_tab_box_show");  
  })
}