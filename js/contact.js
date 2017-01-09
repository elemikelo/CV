$(document).ready(function() {
    var inputsOption = $("[name='opcion_conocer']");

    for (var i = 0; i < inputsOption.length; i++) {
        $(inputsOption[i]).click(function(event) {
            if ($(this).val() == 'otros') {
                $('#text').remove();
                $('.form-radio').append('<textarea name="text" id="text" rows="10" cols="50" placeholder="Cuentamelo..." required></textarea>');
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
        $('.form-datos').append('<span class="alert-msg"> Email erroneo</span>');
        return false;
    }
    if (!patternTelefono.test($('#telefono').val().trim())) {
        telefono.focus();
        event.preventDefault();
        $('.alert-msg').remove();
        $('.form-telefono').append('<span class="alert-msg"> Teléfono erroneo</span>');
        return false;
    }


})

$("#text").on('keyup', function() {
  var words = this.value.match(/\S+/g).length;
  console.log(words);

  if (words > 150) {
    var trimmed = $(this).val().split(/\s+/, 150).join(" ");
    $(this).val(trimmed + " ");
    alert('Maximo 150 palabras')
  }
});
});
