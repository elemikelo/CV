$(document).ready(function() {

    var inputsOption = $("[name='opcion_conocer']");

    for (var i = 0; i < inputsOption.length; i++) {
        $(inputsOption[i]).click(function(event) {
            if ($(this).val() == 'otros') {
                $('#text').remove();
                $('.form-radio').append('<textarea name="text" id="text" class="textarea" rows="10" cols="50" placeholder="Cuentamelo..."></textarea>');
            } else {
                if ($('#text')) {
                    $('#text').remove();
                }
            }
        })
    }

$("form").submit(function (event) {
  var email = $('#email');
  var nombre = $('#nombre');
  var telefono = $('#telefono');

  if(!nombre.val()) {
    $('.alert-msg').remove();
    $('.btn-form-row').append('<p class="alert-msg"> * Rellene los campos obligatorios</p>');
    nombre.focus();
    event.preventDefault();
    return false;
  }

  if(!email.val()) {
    $('.alert-msg').remove();
    $('.btn-form-row').append('<p class="alert-msg"> * Rellene los campos obligatorios</p>');
    email.focus();
    event.preventDefault();
    return false;
  }

  if(!telefono.val()) {
    $('.alert-msg').remove();
    $('.btn-form-row').append('<p class="alert-msg"> * Rellene los campos obligatorios</p>');
    telefono.focus();
    event.preventDefault();
    return false;
  }


  if(!$('input[name=opcion_conocer]:checked').val() ) {
    $('.alert-msg').remove();
    $('.btn-form-row').append('<p class="alert-msg"> * Rellene los campos obligatorios</p>');
    instituto.focus();
    event.preventDefault();
    return false;
  }


    var patternEmail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var patternTelefono = /(?![9]{9})[0-9]{9}/;

    if (!patternEmail.test($('#email').val().trim())) {
        email.focus();
        event.preventDefault();
        $('.alert-msg').remove();
        $('#email').after('<span class="alert-msg"> Email erroneo</span>');
        return false;
    }
    if (!patternTelefono.test($('#telefono').val().trim())) {
        telefono.focus();
        event.preventDefault();
        $('.alert-msg').remove();
        $('#telefono').after('<span class="alert-msg"> Teléfono erroneo</span>');
        return false;
    }


})
//////// DINAMIC TEXTAREA WORDS VALIDATOR ///////

$(document).on('keypress','.textarea', function() {
  if ($('#text').val() != '') {

    var counterWords = this.value.match(/\S+/g).length;
    if (counterWords > 150) {
      var trimmed = $(this).val().split(/\s+/, 150).join(" ");
      $(this).val(trimmed + " ");
      $('.alert-msg').remove();
      $('.form-radio').after('<span class="alert-msg"> * Máximo 150 palabras</span>');
    }
    else {
      $('.alert-msg').remove();
    }
  }
});

/////// TEXTAREA characters validator///////////

var comentario = $('form#enquiry textarea'),
    contador = '',
    contadorMax = 150,
    minCaracteres = 2,
    $comentarioValue = comentario.val(),
    $comentarioLength = $comentarioValue.length,
    button = $('#sendNewComment').hide();

    $('.form-2').append('<span class="contador"></span>').append('<p class="info">Min length: <span></span></p>');
    contador = $('span.contador');
    contador.html(contadorMax);
    comentario.attr('maxlength', contadorMax);
    $('.form-2').find('p.info > span').html(minCaracteres);

    comentario.keyup(function () {
      var $this = $(this);
      $comentarioLength = $this.val().length; //get number of characters
      contador.html(contadorMax - $comentarioLength); //update contador
      if ($comentarioLength > minCaracteres - 1) {
        button.fadeIn(200);
      } else {
        button.fadeOut(200);
      }
    });

});
