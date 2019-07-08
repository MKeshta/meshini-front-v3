window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("primary-nav");
var navFiller =document.getElementById("primary-nav-filler");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    $('#primary-nav-filler').height($('#primary-nav').height()+30);
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    $('#primary-nav-filler').height(0)
  }
}