// ! Scroll Tips
$(document).ready(() => {
  $(".flotante").click(() => {
    $("body, html").animate({
      scrollTop: "0px",
    }, 800);
    return false;
  });
  $(window).scroll(() => {
    $(this).scrollTop() > 150
      ? $(".flotante").slideDown(150)
      : $(".flotante").slideUp(150);
  });
});

// ! Anio actual, se usa en el footer
$("#anio").text(new Date().getFullYear());
