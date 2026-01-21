var homeanim = null;

var mobile = null;
var mobileRotate = false;

var shouldMoveNav = true; 


import lightbox from './script.js';



export function PageCheckMob() {
  $(document).ready(function () {



    if ($('#page').hasClass('page1')) {
      if ($('.select_nav').hasClass('select_about')) {
        $('.select_nav').removeClass('select_about')
      }
      // if (homeanim === true) {
      //   $('.scroll_box').addClass("scroll_box_anim")
      // }
      PageHomeScript();

const swiper2 = new Swiper('.swiper2', {
  spaceBetween: 0,
  speed:9000,
	direction: 'horizontal',
  autoplay: {delay: 0},
  loop: true,
  slidesPerView: 5,
  allowTouchMove: false,
  freeMode: true,

    
});
    }




    if ($('#page').hasClass('pagework')) {
      imageZoom();

      if ($('#page').hasClass('page1')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Work');
        $('#bt_work').css('opacity', '1');
        $(".back_bt_nav").removeClass("back_bt_nav2");
        }, 200);

      }

      if ($('#page').hasClass('page3')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Friesa');
        $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page4')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Aston');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page7')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Model');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
            if ($('#page').hasClass('page7')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Model');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
     if ($('#page').hasClass('page12')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Course');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page15')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Ogo-AI');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page14')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Avto');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page17')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Victron');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page10')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Rial Ust');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page11')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Ekfood');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }
      if ($('#page').hasClass('page16')) {
        $('#bt_work').css('opacity', '0');
        setTimeout(() => {
          $('#bt_work').text('Maria');
          $('#bt_work').css('opacity', '1');
          $(".back_bt_nav").addClass("back_bt_nav2");
        }, 200);
      }

      if ($('.select_nav').hasClass('select_about')) {
        $('.select_nav').removeClass('select_about')
      }
      Page2workScript();

    }
    }

  



    if ($('#page').hasClass('pageabout')) {
      $('.select_nav').addClass('select_about')
      AboutScript();

    }
  })
}


PageCheckMob()






// swup.hooks.on('content:replace', () => {

//   $('body').css('pointer-events', 'none')
//   setTimeout(() => {
//     $('body').css('pointer-events', 'auto')
//   }, 350);



//   if ($('#page').hasClass('page1')) {
//     AnimHome();
//   }


//     $('nav').css("transform", "translateX(0vw)");
// });





// swup.hooks.on('animation:in:start', function () {
//   PageCheck();
// });




// swup.hooks.on('history:popstate', () => {
//   setTimeout(() => {
//     PageCheck();
//   }, 50);

// });









function AnimHome() {
  if (homeanim === null) {

    $('.anim-pic').each(function (index) {
      var $strip = $(this);
      setTimeout(function () {
        $strip.addClass('anim-pic-anim');
      }, index * 100);
    });

    homeanim = true;
  } else {
    $('.blur_obj').css('opacity', '1')
    $('.anim-pic').css('opacity', '1')
  }
}


function RotateDevise() {
  if (mobile === true) {
    if (mobileRotate === false) {
      $(window).on('load resize', function () {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if (windowWidth <= 736 && windowHeight <= 414) {
          $('.rotate_box').on('mouseup', function () {
            $('.rotate_box').css("display", "none")
            mobileRotate = true;
          })
        }
      });
    }
  }
}





function PageHomeScript() {

  shouldMoveNav = true; 


        // $('nav').css("transform", "translateX(20vw)")







  function movenav() {

    if (shouldMoveNav === false) return; 
    window.onscroll = () => {
          var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
          if (scrollPercentage >= 3) {
            $('nav').css("transform", "translateX(20vw)");
          }
          if (scrollPercentage >= 10) {
            $('nav').css("transform", "translateX(0vw)");
          }
        }
      }
  
  
  
      // setTimeout(() => {

      //     movenav();

      // }, 700)

      // swup.hooks.before('content:replace', () => {
      //   shouldMoveNav = false; 
      //   $('nav').css("transform", "translateX(0vw)");
      // });

  
  

};


export function shouldMoveNavOff() {
  shouldMoveNav = false;
  window.onscroll = null; 
  $('nav').css("transform", "translateX(0vw)");
}



function Page2workScript() {
setTimeout(() => {
    lightbox.init();
}, 10);
  $('#my-video').remove();



  if ($('#page').hasClass('as')) {
    const horizontalScrollDiv = document.getElementById('scroll_container');
    horizontalScrollDiv.addEventListener('scroll', function () {
      $('.back_scroll_ico').addClass('icon-scroll_done')
    });
  }

}




function AboutScript() {
    $('.con-on-mob').addClass('con-off-mob');
    $('.left_box_bar').css('display', 'none')
    $('.row_mob_ab').addClass('row_mob_ab_on');
    $('.about_text').addClass('row_mob_ab_on');
    $('.tildcard').addClass('tildcard_mobile')
    $('.me_memoji').addClass('me_memoji_mob')
}





