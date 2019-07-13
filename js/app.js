window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("primary-nav");
var navFiller = document.getElementById("primary-nav-filler");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    $('#primary-nav-filler').height($('#primary-nav').height() + 30);
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    $('#primary-nav-filler').height(0)
  }
}

lc_lightbox('.gallery-elm', {

  wrap_class: 'lcl_fade_oc',

  gallery: true,
  thumb_attr: 'data-lcl-thumb',
  skin: 'light',
  tn_icons    : false, 
  ins_close_pos : 'normal'
  // more options here

});
lc_lightbox('.gallery-elm', {



  elems_parsed: function () { },

  html_is_ready: function () { },

  on_open: function () { },

  on_elem_switch: function () { },

  slideshow_start: function () { },
  slideshow_end: function () { },

  on_fs_enter: function () { },

  on_fs_exit: function () { },

  on_close: function () { },


}); 