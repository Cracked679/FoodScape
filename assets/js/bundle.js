/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$("#myNav a").on("click", function () {
  closeNav();
});

var animated_div = $(".animated-text span"),
  word_count = animated_div.length,
  animation_interval = word_count * 3000 + 7000;

console.log(animation_interval);
function animate_word() {
  animated_div.each(function (index) {
    (function (that, i) {
      var t = setTimeout(function () {
        animated_div.removeClass("animate");
        $(that).addClass("animate");
      }, 3000 * i);
    })(this, index);
  });
}

animate_word();

window.setInterval(function () {
  animate_word();
}, 16000);

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

// maps
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const location = { lat: 28.5928785, lng: 77.3030458 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
