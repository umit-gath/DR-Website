

$(window).scroll(function() {

    var y = $(this).scrollTop();

    if (y > 150) {
        $('.navbar').removeClass("AnimateTrans");
        $('.navbar').addClass("AnimateBlack");

        $('#BackToTop').removeClass("hideBTT");
        $('#BackToTop').addClass("showBTT");
        
    } else {
        $('.navbar').removeClass("AnimateBlack");
        $('.navbar').addClass("AnimateTrans");
        
        $('#BackToTop').removeClass("showBTT");
        $('#BackToTop').addClass("hideBTT");
        
    }
  


});


$("#BackToTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    },1000);
  });

  