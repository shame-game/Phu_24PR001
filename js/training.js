$(document).ready(function () {
  const mask = $('<div class="mask"></div>');
  $("body").append(mask);
  $("#showMenu").click(function () {
    $("body").css({ overflow: "hidden" });
    $(".mask").fadeIn();
    $("#nav").addClass("show-menu");
    $(".logo").hide();
    $("#showMenu").hide();
    if ($(window).scrollTop() > 80) {
      $(".menu").css({
        "background-color": "transparent",
      });
    }
  });
  $("#hideMenu").click(function () {
    $("#nav").removeClass("show-menu");
    $("body").css({ overflow: "auto" });
    $(".mask").fadeOut();
    $(".logo").show();
    $("#showMenu").show();
    if ($(window).scrollTop() > 80) {
      $(".menu").css({
        "background-color": "white",
      });
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".menu").css({
        "background-color": "white",
        position: "fixed",
        animation: "fadein 1s",
        "box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      });
      if ($("#showMenu").hasClass("show-menu-home")) {
        $("#showMenu").attr("src", "./static/images/listRed.svg");
      } else {
        $("#showMenu").attr("src", "../static/images/listRed.svg");
      }
      $(".nav-item").addClass("nav-fixed");
    } else {
      $(".menu").css({
        "background-color": "transparent",
        position: "absolute",
        animation: "fadeout",
        "box-shadow": "none",
      });
      if ($("#showMenu").hasClass("show-menu-home")) {
        $("#showMenu").attr("src", "./static/images/listRed.svg");
      } else {
        $("#showMenu").attr("src", "../static/images/list.svg");
      }
      $(".nav-item").removeClass("nav-fixed");
    }
  });
});
