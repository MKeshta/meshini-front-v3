
function sliderheight() {
  var divHeight = $('.signup-page.active').height();
  $('.signup-pages-wrapper').css({ 'height': divHeight });



}
sliderheight();
$(window).resize(sliderheight);

function sliderheight2() {
  var divHeight2 = $('.new-trip-page.active').height();
  $('.new-trip-pages-wrapper').css({ 'height': divHeight2 });
}
$('.nav-link').click(function () {
  setTimeout(function () {
    sliderheight2();
  }, 200)

})
sliderheight2();
$(window).resize(sliderheight2);

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
    if ($(this).parents('#signup-form-wrapper').length > 0) {
      var allowSwip = true;
      $('.signup-page.active').children('input').filter('[required]:visible').each(function (i) {
        if ($(this).val() == '' || $(this).val() == ' ') {
          allowSwip = false

        }
        else {
          if ($(this).attr('type') == 'email') {
            if (!validateEmail($(this).val())) {
              allowSwip = validateEmail($(this).val())

            }
          }
          if ($(this).attr('name') == 'phone') {
            if (!isNumber($(this).val())) {
              allowSwip = isNumber($(this).val())

            }
          }
        }


        if (!allowSwip) {
          $(this).css({ 'border': '1px solid', 'border-color': 'red' })
          return false
        } else {
          $(this).css({ 'border': '0px solid' })
        }
      });

      // allowSwip = true;

      if (allowSwip) {
        $('.login-link').addClass('d-none');
        $('.prev-btn').removeClass('d-none');

        const activeCard = $(".signup-page.active");
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

      sliderheight();
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
    sliderheight();
  });
  $('#submit-btn').click(function (e) {
    if ($(this).parents('#signup-form-wrapper').length > 0) {
      var allowSwip = true;
      $('.signup-page.active').children('input').filter('[required]:visible').each(function (i) {
        if ($(this).val() == '' || $(this).val() == ' ') {
          allowSwip = false

        }
        else {
          if ($(this).attr('type') == 'email') {
            if (!validateEmail($(this).val())) {
              allowSwip = validateEmail($(this).val())

            }
          }
          if ($(this).attr('name') == 'phone') {
            if (!isNumber($(this).val())) {
              allowSwip = isNumber($(this).val())

            }
          }
        }


        if (!allowSwip) {
          $(this).css({ 'border': '1px solid', 'border-color': 'red' })
          return false
        } else {
          $(this).css({ 'border': '0px solid' })
        }
      });

      // allowSwip = true;

      if (!allowSwip) {
        e.preventDefault()
      }
    }

  });
  sliderheight();
}
signupCardSwip()

function newTripCardSwap() {
  $('.next-btn').click(function () {
    if ($(this).parents('#new-trip-form').length > 0) {
      const activeCard = $(".new-trip-page.active");
      const currentCardNum = activeCard.index();

      var allowSwip = true;

      activeCard.find('.new-trip-input').filter('[required]:visible').each(function (i) {

        if ($(this).find('.places-wrapper').length > 0) {
          if (!$(this).find('.places-wrapper').find('.place').length > 0) {
            allowSwip = false
          }
        }
        else {
          if ($(this).val() == '') {
            $(this).css({ 'border': '1px solid', 'border-color': 'red' })
            allowSwip = false

          }
          if (!$(this).is(':valid')) {
            allowSwip = false
            console.log($(this).attr('placeholder'));
          }
        }



        if (!allowSwip) {
          $(this).css({ 'border': '1px solid', 'border-color': 'red' })
          return false
        } else {
          $(this).css({ 'border': '0px solid' })
        }


      });


      if (allowSwip) {
        if (currentCardNum + 1 == 3) {
          $('#next-btn').addClass('d-none');
          $('#next-btn').removeClass('d-inline-block');
          $('#submit-btn').removeClass('d-none');
          $('#submit-btn').addClass('d-inline-block');
        }

        activeCard.removeClass('active')
        activeCard.addClass('prev')

        $('.new-trip-page').eq(currentCardNum + 1).removeClass('next')
        $('.new-trip-page').eq(currentCardNum + 1).removeClass('prev')
        $('.new-trip-page').eq(currentCardNum + 1).addClass('active')

        var currentStep = $('.new-trip-page.active').attr('step');
        $('.new-trip-tabs').find('.active').removeClass('active');
        $(`#tab-${currentStep}`).addClass('active');
        sliderheight2();
        $('.current-step').empty()
        $('.current-step').append(currentStep)
      }
    }
  });

  $('.new-trip-tab').click(function () {
    const target = $(this).attr('step');
    const current = $('.new-trip-tab.active').attr('step');

    var allowSwip = true;
    if (target > current) {
      for (var i = parseInt(current), breakIt = false; i < parseInt(target) && !breakIt; i++) {
        $(`#page-${i}`).find('.new-trip-input').filter('[required]:visible').each(function () {

          if ($(this).find('.places-wrapper').length > 0) {
            if (!$(this).find('.places-wrapper').find('.place').length > 0) {
              allowSwip = false
            }
          }
          else {
            if ($(this).val() == '') {
              $(this).css({ 'border': '1px solid', 'border-color': 'red' })
              allowSwip = false

            }
            if (!$(this).is(':valid')) {
              allowSwip = false
              console.log($(this).attr('placeholder'));
            }
          }



          if (!allowSwip) {
            $(this).css({ 'border': '1px solid', 'border-color': 'red' })

            $(`#tab-${i}`).click();
            breakIt = true;
            return false
          } else {
            $(this).css({ 'border': '0px solid' })
          }
        });
      }
    }





    if (allowSwip) {

      $('.new-trip-tab.active').removeClass('active');
      $(this).addClass('active');



      $(`#page-${current}`).removeClass('active');
      if (target < current) {
        $(`#page-${current}`).addClass('next');
      } else if (target > current) {
        $(`#page-${current}`).addClass('prev');
      }

      $(`#page-${target}`).addClass('active');
      $(`#page-${target}`).removeClass('next');
      $(`#page-${target}`).removeClass('prev');
      const activeCard = $(".new-trip-page.active");
      const currentCardNum = activeCard.index();
      if (currentCardNum + 1 == 4) {
        $('#next-btn').addClass('d-none');
        $('#next-btn').removeClass('d-inline-block');
        $('#submit-btn').removeClass('d-none');
        $('#submit-btn').addClass('d-inline-block');
      } else {
        $('#submit-btn').addClass('d-none');
        $('#submit-btn').removeClass('d-inline-block');
        $('#next-btn').removeClass('d-none');
        $('#next-btn').addClass('d-inline-block');
      }

      $('.current-step').empty()
      $('.current-step').append(target)
    }
  });
  $('#submit-btn').click(function (e) {
    if ($(this).parents('#new-trip-form').length > 0) {
      const activeCard = $(".new-trip-page.active");

      var allowSubmit = true;

      activeCard.find('.new-trip-input').filter('[required]:visible').each(function (i) {

        if ($(this).hasClass('new-trip-photos-wrapper')) {

          if (!$(this).find('.trip-photo-item').length > 0) {
            alert('You have to add at least a photo for your trip');
            allowSubmit = false
          }
        }



        if (!allowSubmit) {
          $(this).css({ 'border': '1px solid', 'border-color': 'red' })
          return false
          e.preventDefault()
        } else {
          $(this).css({ 'border': '0px solid' })
        }


      });



    }
  })

}
newTripCardSwap()
$('#submit-btn').click(function (e) {
  var form = $(this).parents('form');
  if (!form.find('.page.active').is(form.find('.page:last-of-type'))) {
    $(this).siblings('#next-btn').click();
    e.preventDefault();
  }
})
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
function isNumber(str) {
  return !/\D/.test(str);
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

function showPayment() {
  $('.white-card-body').click(function () {

    const tripsWrapper = $(this).parents('.trips-wrapper');

    //for ajax requests
    const tripID = $(this).attr('tripID');
    const isFinishedTrips = tripsWrapper.hasClass('finished-trips')

    tripsWrapper.find('.cards-wrapper').addClass('d-none')
    tripsWrapper.find('.payment-table-wrapper').removeClass('d-none')
  });
  $('.table-back-btn').click(function () {
    const tableWrapper = $(this).parents('.payment-table-wrapper')

    tableWrapper.addClass('d-none');
    tableWrapper.siblings('.cards-wrapper').removeClass('d-none')

  });
}
showPayment()


function customSelect() {

  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */

  x = document.getElementsByClassName("custom-select");

  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    // a.setAttribute("class", "search-input");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.removeEventListener('click', ClickChandeler);
      c.addEventListener("click", ClickChandeler);

      b.appendChild(c);
    }


    x[i].appendChild(b);
    a.removeEventListener("click", ClickAHandeler);
    a.addEventListener("click", ClickAHandeler);
  }

  function ClickAHandeler(e) {

    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  }



  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.removeEventListener('click', closeAllSelect)
  document.addEventListener("click", closeAllSelect);
}
customSelect();

function ClickChandeler(e) {
  /* When an item is clicked, update the original select box,
  and the selected item: */
  var y, i, k, s, h;
  s = this.parentNode.parentNode.getElementsByTagName("select")[0];
  h = this.parentNode.previousSibling;
  for (i = 0; i < s.length; i++) {
    if (s.options[i].innerHTML == this.innerHTML) {
      s.selectedIndex = i;
      h.innerHTML = this.innerHTML;
      y = this.parentNode.getElementsByClassName("same-as-selected");
      for (k = 0; k < y.length; k++) {
        y[k].removeAttribute("class");
      }
      this.setAttribute("class", "same-as-selected");
      break;
    }
  }
  h.click();
}
function reloadCustomSelect() {
  var x = document.getElementsByClassName("custom-select");

  for (i = 0; i < x.length; i++) {
    var selElmnt = x[i].getElementsByTagName("select")[0];
    var selectMenu = x[i].getElementsByClassName("select-items")[0]
    selectMenu.innerHTML = '';
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      var c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.removeEventListener('click', ClickChandeler);
      c.addEventListener("click", ClickChandeler);

      selectMenu.appendChild(c);
    }

  }

}

$('.select-items').click(function () {

  reloadCustomSelect()

});
