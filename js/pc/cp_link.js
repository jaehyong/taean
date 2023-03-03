//메인 링크 관련 이벤트
var cp_box = 0;
//민원안내
$(".cp_main_link > li:nth-of-type(1) > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).parent("li").find(".cp_sub_link").addClass("csl_active");
  $(this).parent("li").siblings().find(".cp_sub_link").removeClass("csl_active");
  $(this).parent("li").find("span").addClass("cml_sp");
  $(this).parent("li").siblings().find("span").removeClass("cml_sp");
  $(this).parent("li").find("img").addClass("cml_img");
  $(this).parent("li").siblings().find("img").removeClass("cml_img");
  $("#cp_cb_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
  $("#cp_sub_link > li:first-of-type > a").addClass("csl_txt").parent("li").siblings().find("a").removeClass("csl_txt");
  $("#cp_sub_link > li:first-of-type > a > img").addClass("csl_ac").parents("li").siblings().find("img").removeClass("csl_ac");
});

//지방세안내
$(".cp_main_link > li:nth-of-type(2) > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).parent("li").find(".cp_sub_link").addClass("csl_active");
  $(this).parent("li").siblings().find(".cp_sub_link").removeClass("csl_active");
  $(this).parent("li").find("span").addClass("cml_sp");
  $(this).parent("li").siblings().find("span").removeClass("cml_sp");
  $(this).parent("li").find("img").addClass("cml_img");
  $(this).parent("li").siblings().find("img").removeClass("cml_img");
  $("#local_tax_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
  $("#lt_sub_link > li:first-of-type > a").addClass("csl_txt").parent("li").siblings().find("a").removeClass("csl_txt");
  $("#lt_sub_link > li:first-of-type > a > img").addClass("csl_ac").parents("li").siblings().find("img").removeClass("csl_ac");
});
//여권발급안내
$(".cp_main_link > li:nth-of-type(3) > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).parent("li").find(".cp_sub_link").addClass("csl_active");
  $(this).parent("li").siblings().find(".cp_sub_link").removeClass("csl_active");
  $(this).parent("li").find("span").addClass("cml_sp");
  $(this).parent("li").siblings().find("span").removeClass("cml_sp");
  $(this).parent("li").find("img").addClass("cml_img");
  $(this).parent("li").siblings().find("img").removeClass("cml_img");
  $("#passport_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
//전자민원창구
$(".cp_main_link > li:nth-of-type(4) > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).parent("li").find(".cp_sub_link").addClass("csl_active");
  $(this).parent("li").siblings().find(".cp_sub_link").removeClass("csl_active");
  $(this).parent("li").find("span").addClass("cml_sp");
  $(this).parent("li").siblings().find("span").removeClass("cml_sp");
  $(this).parent("li").find("img").addClass("cml_img");
  $(this).parent("li").siblings().find("img").removeClass("cml_img");
  $("#e-cp_box1").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
  $("#e-cp_sub_link > li:first-of-type > a").addClass("csl_txt").parent("li").siblings().find("a").removeClass("csl_txt");
  $("#e-cp_sub_link > li:first-of-type > a > img").addClass("csl_ac").parents("li").siblings().find("img").removeClass("csl_ac");
});
//종합신고센터
$(".cp_main_link > li:nth-of-type(5) > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).parent("li").find(".cp_sub_link").addClass("csl_active");
  $(this).parent("li").siblings().find(".cp_sub_link").removeClass("csl_active");
  $(this).parent("li").find("span").addClass("cml_sp");
  $(this).parent("li").siblings().find("span").removeClass("cml_sp");
  $(this).parent("li").find("img").addClass("cml_img");
  $(this).parent("li").siblings().find("img").removeClass("cml_img");
  $("#dec_box2").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
  $("#dec_sub_link > li:nth-of-type(2) > a").addClass("csl_txt").parent("li").siblings().find("a").removeClass("csl_txt");
  $("#dec_sub_link > li:nth-of-type(2) > a > img").addClass("csl_ac").parents("li").siblings().find("img").removeClass("csl_ac");
});

//민원안내 서브 링크 관련 이벤트
$("#cp_sub_link > li > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).addClass("csl_txt");
  $(this).parent("li").siblings().find("a").removeClass("csl_txt");
  $(this).find("img.csl_link_arrow").addClass("csl_ac");
  $(this).parent("li").siblings().find("img.csl_link_arrow").removeClass("csl_ac");
  $("#cp_cb_box"+cp_box+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});

//지방세안내 서브 링크 관련 이벤트
$("#lt_sub_link > li > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).addClass("csl_txt");
  $(this).parent("li").siblings().find("a").removeClass("csl_txt");
  $(this).find("img.csl_link_arrow").addClass("csl_ac");
  $(this).parent("li").siblings().find("img.csl_link_arrow").removeClass("csl_ac");
  $("#local_tax_box"+cp_box+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});
//여권발급 서브 링크 관련 이벤트

//전자민원창구 서브 링크 관련 이벤트
$("#e-cp_sub_link > li > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).addClass("csl_txt");
  $(this).parent("li").siblings().find("a").removeClass("csl_txt");
  $(this).find("img.csl_link_arrow").addClass("csl_ac");
  $(this).parent("li").siblings().find("img.csl_link_arrow").removeClass("csl_ac");
  $("#e-cp_box"+cp_box+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});

//종합신고센터 서브 링크 관련 이벤트
$("#dec_sub_link > li > a").click(function(){
  cp_box = $(this).parent("li").index() + 1;
  $(this).addClass("csl_txt");
  $(this).parent("li").siblings().find("a").removeClass("csl_txt");
  $(this).find("img.csl_link_arrow").addClass("csl_ac");
  $(this).parent("li").siblings().find("img.csl_link_arrow").removeClass("csl_ac");
  $("#dec_box"+cp_box+"").addClass("cp_contents_box_active").siblings().removeClass("cp_contents_box_active");
});