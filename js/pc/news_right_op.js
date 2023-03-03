//소식알림창
//pc + mobile
var nrb_page = 0;
var winWidht_nrp = 0;


function auto_nrb(){
  $(".news_right_bot > img:nth-of-type(1)").animate({"opacity":"0"}, 1000, function(){
    $(this).appendTo(".news_right_bot");
    $(this).css({"opacity":"1"});
    nrb_page = $(".news_right_bot > img").attr("data-nrb");
    $(".nrb_page_auto").text(nrb_page);
  });
}

function rev_nrb(){
  $(".news_right_bot > img:nth-of-type(3)").prependTo(".news_right_bot").css({"opacity":"0"}).animate({"opacity":"1"}, 1000);
}

var timer_nrb = setInterval("auto_nrb()", 5000);

$(".news_right_bot > img").hover(
  function(){
    clearInterval(timer_nrb);
  },
  function(){
    timer_nrb = setInterval("auto_nrb()", 5000);
  }
);

$(".nrb_prev").click(function(){
  clearInterval(timer_nrb);
  rev_nrb();
  nrb_page = $(".news_right_bot > img").attr("data-nrb");
  $(".nrb_page_auto").text(nrb_page);
})

$(".nrb_next").click(function(){
  clearInterval(timer_nrb);
  auto_nrb();
  nrb_page = $(".news_right_bot > img").attr("data-nrb");
  $(".nrb_page_auto").text(nrb_page)
});

$(".nrb_stop").click(function(){
  $(this).css({"display":"none"});
  $(".nrb_replay").css({"display":"block"});
  clearInterval(timer_nrb);
  $(".news_right_bot > img").hover(
    function(){
      clearInterval(timer_nrb);
    },
    function(){
      clearInterval(timer_nrb);
    }
  );
});

$(".nrb_replay").click(function(){
  $(this).css({"display":"none"});
  $(".nrb_stop").css({"display":"block"});
  timer_nrb = setInterval("auto_nrb()", 5000);
  $(".news_right_bot > img").hover(
    function(){
      clearInterval(timer_nrb);
    },
    function(){
      timer_nrb = setInterval("auto_nrb()", 5000);
    }
  );
});









