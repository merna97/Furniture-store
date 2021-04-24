//loading page
$(window).on('load',function(){
  $('.loading').fadeOut(1000,function(){
    $('body').css('overflow','auto')
  })
})
$(document).ready(function(){
   /* $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler-icon_one').toggleClass('top');
        $('.navbar-toggler-icon_two').toggleClass('hidden');
        $('.navbar-toggler-icon_three').toggleClass('bottom')
    })*/
    /* mix it up*/
var mixer = mixitup('.gallery');




/*venobox*/ 
$(document).ready(function(){
    $('.venobox').venobox(); 
   


  //smooth scroll
  $('nav li a').on('click',function(){
      // add class active
      $(this).addClass('active').parent().siblings().find('a').removeClass('active')

      $('html, body').animate({
          scrollTop: $('#' +$(this).data('value')).offset().top-83

      })
     
     /* $('.navbar-toggler').on('click',function(){
        $('.navbar-nav').show()
      })*/
   
    })
  });
  //
  $(' div button').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
})
//aos
$(function(){
  AOS.init();
  window.addEventListener('load', AOS.refresh)
})
