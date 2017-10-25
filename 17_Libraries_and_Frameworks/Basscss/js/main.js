function backToTop() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
}

$(".back-to-top").on("click", backToTop);

function showBackToTop() {
  var scrolledDown = $(window).scrollTop();
  if (scrolledDown > 500) {
    $(".back-to-top").css("display", "block");
  } else {
    $(".back-to-top").css("display", "none");
  }
}

showBackToTop(); // Initial check
$(window).on("scroll", showBackToTop);
