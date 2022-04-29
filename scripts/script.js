

$(window).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 150) {
        $('.navbar').removeClass("AnimateTrans");
        $('.navbar').addClass("AnimateBlack");
    } else {
        $('.navbar').removeClass("AnimateBlack");
        $('.navbar').addClass("AnimateTrans");
    }
  });