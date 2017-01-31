$(document).ready(function() {
  $('#quien-soy').css('visibility', 'hidden');
  $(".png-studies-1").css('visibility', 'hidden');
  $(".png-studies-2").css('visibility', 'hidden');
  $(".delay-icons").css('visibility', 'hidden');


  //


  //CHANGE SELECTION NAVBAR

  var navbarLink = $('.navbar-link');
  for (var i = 0; i < navbarLink.length; i++) {
      navbarLink[i].addEventListener('click', function(event) {
            deleteActiveClass();
            var ayuda =  window.pageYOffset + 10;
            $(this).attr('class', 'navbar-link active');
          })
      };


  // scroll

  var offsetQuienSoy = $('#quien-soy').offset();
  var offSetEstudios = $('#estudios').offset();
  var offSetExperiencia = $('#experiencia').offset();
  var offSetSobreMi = $('#sobre-mi').offset();

  function deleteActiveClass(){
    $('.navbar-link').attr('class', 'navbar-link');
  }

  $(window).scroll(function() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
        $('#quien-soy').css('visibility', 'visible');
        $('#quien-soy').css('animation', 'opacity 2s linear')

      }

    if (window.pageYOffset <= offsetQuienSoy.top-50) {
        deleteActiveClass();
        $("a[href$='#']").attr('class', 'navbar-link active');
      }
    if (window.pageYOffset >= offsetQuienSoy.top-50 ) {
        deleteActiveClass();
        $("a[href$='quien-soy']").attr('class', 'navbar-link active');
        $(".png-studies-1").css('visibility', 'visible');
        $(".png-studies-2").css('visibility', 'visible');
        $(".png-studies-1").css('animation', 'opacity 3s linear');
        $(".png-studies-2").css('animation', 'opacity 3s linear');



      }
    if (window.pageYOffset >= offSetEstudios.top-50) {
        deleteActiveClass();
        $("a[href$='estudios']").attr('class', 'navbar-link active');



      }
    if (window.pageYOffset >= offSetExperiencia.top-50) {
        deleteActiveClass();
        $("a[href$='experiencia']").attr('class', 'navbar-link active');
      }

    if (window.pageYOffset >= 1093) {
        $('.delay-icons').css('visibility', 'visible');
        $('.delay-icons').css('animation', 'opacity 2s linear');
      }

    if (window.pageYOffset >= offSetSobreMi.top-50) {
        deleteActiveClass();
        $("a[href$='sobre-mi']").attr('class', 'navbar-link active');
    }
  });


//BUTTON SCROLL DOWN-UP

  $("#btn-scroll-down").click(function(event){
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 2500)});
  $("#btn-scroll-up").click(function(event){
    $("html, body").animate({ scrollTop: 0 }, 2500)});


//OPACITY NAVBAR

 window.addEventListener('scroll', changeOpacityMenu);

  function changeOpacityMenu() {
      if (window.pageYOffset >= 242) {
          document.getElementById('navbar-id').style.opacity = '1';
      } else {
          document.getElementById('navbar-id').style.opacity = '0.5';
      }
  }

  $("#navbar-id").hover(function(){
        $(this).css("opacity", "1");
        }, function(){
          if (window.pageYOffset < 242) {
            $(this).css("opacity", "0.5")
            $(this).css("transition", "0.5s");
          }
    });

  ///// COLOUR  CHANGES PORTADA /////

  var number_img = 1;

 $(document).keypress(function(){
    number_img++;
    if (number_img > 4) {
      number_img = 1;
    }
      $(".img-portada").css('background-image','url("../Practica HTML5,CSS3,JS/images/portada'+ number_img +'.jpg")');
      $(".img-portada").css('background-image','url("../images/portada'+ number_img +'.jpg")');
    })
});
