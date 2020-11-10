/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Card Flip
$(".flipper").click(function () {
  var target = $(event.target);
  if (target.is("a")) {
    //follow that link
    return true;
  } else {
    $(this).toggleClass("flip");
  }
  return false;
});

// Testimonials

$(document).ready(function () {
  $(".testimonial .indicators li").click(function () {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass("active");
    targetElement.not(targetElement[i]).removeClass("active");
  });
  $(".testimonial .tabs li").click(function () {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass("active");
    targetElement.not($(this)).removeClass("active");
  });
});
$(document).ready(function () {
  $(".slider .swiper-pagination span").each(function (i) {
    $(this)
      .text(i + 1)
      .prepend("0");
  });
});
