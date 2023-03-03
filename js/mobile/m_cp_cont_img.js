var width_mcpcimg = 0;
width_mcpcimg = $("body").width();
$(window).resize(function(){
  width_mcpcimg_resize = $(".cp_contents_txt > img").width();
  if(width_mcpcimg < 801) {
    $(".cp_contents_txt > img").height(width_mcpcimg_resize * 0.535);
  } 
});



