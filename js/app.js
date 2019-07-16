
function sliderheight() {
  var divHeight = $('.signup-page').height();
  $('.signup-pages-wrapper').css({ 'height': divHeight });
}
sliderheight();
$(window).resize(sliderheight);


// Get the navbar
var navbar = document.getElementById("primary-nav");
var navFiller = document.getElementById("primary-nav-filler");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
function stickNav() {

  if (window.pageYOffset >= sticky) {
    $('#primary-nav-filler').height($('#primary-nav').height() + 30);
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    $('#primary-nav-filler').height(0)
  }
}
window.onscroll = function () { stickNav() };

function signupCardSwip() {
  $('.next-btn').click(function () {
    var allowSwip = true;
    $('.signup-page.active').children('input').each(function (i) {
      if ($(this).val() == '' || $(this).val() == ' ') {
        allowSwip = false

      }
      else {
        if ($(this).attr('type') == 'email') {
          if (!validateEmail($(this).val())) {
            allowSwip = validateEmail($(this).val())
            $(this).css({ 'border-color': 'red' })
          }
        }
      }
    });

    allowSwip = true;

    if (allowSwip) {
      $('.login-link').addClass('d-none');
      $('.prev-btn').removeClass('d-none');

      const activeCard = $(".signup-page.active");
      // console.log(activeCard)
      const currentCardNum = activeCard.index();
      if (currentCardNum + 1 == 2) {
        $('#next-btn').addClass('d-none');
        $('#next-btn').removeClass('d-inline-block');
        $('#submit-btn').removeClass('d-none');
        $('#submit-btn').addClass('d-inline-block');
      }
      $('.current-step').empty()
      $('.current-step').append(currentCardNum + 2)

      $('.prev-step').empty()
      $('.prev-step').append(currentCardNum + 1)


      activeCard.removeClass('active')
      activeCard.addClass('prev')

      $('.signup-page').eq(currentCardNum + 1).removeClass('next')
      $('.signup-page').eq(currentCardNum + 1).addClass('active')


    }



  });
  $('.prev-btn').click(function () {
    const activeCardNum = $('.signup-page.active').index();
    if (activeCardNum == 1) {
      $('.prev-btn').addClass('d-none');
      $('.login-link').removeClass('d-none');
    }
    $('#next-btn').removeClass('d-none');
    $('#next-btn').addClass('d-inline-block');
    $('#submit-btn').addClass('d-none');
    $('#submit-btn').removeClass('d-inline-block');
    $('.current-step').empty()
    $('.current-step').append(activeCardNum)

    $('.prev-step').empty()
    $('.prev-step').append(activeCardNum - 1)

    $('.signup-page').eq(activeCardNum).removeClass('active')
    $('.signup-page').eq(activeCardNum).addClass('next')

    $('.signup-page').eq(activeCardNum - 1).removeClass('prev')
    $('.signup-page').eq(activeCardNum - 1).addClass('active')

  });
}
signupCardSwip()

function fileInputChange() {
  $('.file-input').change(function () {
    var id = $(this).attr('id');
    $(this).siblings('label').find('.filename').empty()
    $(this).siblings('label').find('.filename').append(document.getElementById(id).files[0].name)
    $(this).siblings('label').find('.filename').css({ 'color': 'white' });
    $(this).siblings('label').find('.loading-percentage').removeClass('d-none')
    $(this).siblings('label').find('.loader').removeClass('d-none')
  })
}
fileInputChange()

function setupGallery() {
  lc_lightbox('.gallery-elm', {

    wrap_class: 'lcl_fade_oc',

    gallery: true,
    thumb_attr: 'data-lcl-thumb',
    skin: 'light',
    tn_icons: false,
    ins_close_pos: 'normal'
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

}
if ($('.gallery-elm').length > 0) {
  setupGallery();
}


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function calender() {
  var events = [
    { "date": "2019-07-07", "badge": false, "title": "Example 1" },
    { "date": "2019-07-06", "badge": false, "title": "Example 2" }
  ]

  var now = new Date();

  var year = now.getFullYear();

  var month = now.getMonth() + 1;

  var settings = {

    language: false,

    year: year,

    month: month,

    show_previous: true,

    show_next: true,

    cell_border: false,

    today: true,

    show_days: true,

    weekstartson: 1,

    nav_icon: true, // object: prev: string, next: string

    data: events,

    ajax: false, // object: url: string, modal: boolean,

    legend: false, // object array, [{type: string, label: string, classname: string}]

    action: false, // function

    action_nav: false // function

  };
  $("#calendar-container").zabuto_calendar(settings);
}
if ($('#calendar-container').length > 0) {
  calender()
}

