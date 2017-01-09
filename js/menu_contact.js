$(document).ready(function() {
  var menuContact = $('.menu-contact');

  menuContact.css({
      'top': ($(window).height() / 2 - $(menuContact).height() / 2) + 'px'});

  $('#menu-contact-show').hide();

  $('.btn-menu-contact-hide').click(function () {
     menuContact.hide(1000);
    $('#menu-contact-show').show(1000);
  });

  $('.btn-menu-contact-show').click(function () {
    menuContact.show(1000);
    $('#menu-contact-show').hide(1000);
  });
});
