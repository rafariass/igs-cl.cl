$(document).ready(() => {
  $(".flotante").click(() => {
    $("body, html").animate({
      scrollTop: "0px",
    }, 800);
    return false;
  });
  $(window).scroll(() => {
    $(this).scrollTop() > 250
      ? $(".flotante").slideDown(250)
      :$(".flotante").slideUp(250);
  });
});
