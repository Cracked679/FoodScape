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
