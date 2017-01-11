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

///////////////////////AJAX////////////////////////////

    var mensaje = $('#mensaje');
    var nombre = $('#name');
    var comentarios = [];
    var comentariosContainer = $('#commentsContainer');
    var url = 'http://localhost:8000/api/';

    var drawComentarios = function () {
      comentariosContainer.empty();
      if (comentarios == 0) {
        comentariosContainer.append("<li>* No tienes comentarios</li>");
      }else {
        var contentToAdd = '';
        for (var i = 0; i < comentarios.length; i++) {
          contentToAdd += '<div id="li-name">' + comentarios[i].name + '</div>' + '<li id="li-comment">' + comentarios[i].comentario + '<button class="delete" data-task-id="' + comentarios[i].id + '">Eliminar</button></li>';
        }
        comentariosContainer.append(contentToAdd);
      }
    }
    drawComentarios();

    var createComment = function (comment,name) {

      var success = function (data) {
        console.log(data);
        mensaje.val('');
        nombre.val('');

        comentarios.push(data);
        drawComentarios();
      }
      var data = {
        'comentario': comment,
        'name': name
     };

      $.ajax({
        type: 'POST',
        url: url + 'contact',
        data: data,
        success: success
      })
    }
    var getComentarios = function () {
      var success = function (data) {
        comentarios = data;
        drawComentarios();
      }

      $.ajax({
        type: "GET",
        url: url + 'contact',
        success: success
      })
    }

    $('#sendNewComment').on('click', function (event) {
      if (mensaje.val() != '  ') {
        event.preventDefault();
        createComment(mensaje.val(), nombre.val());
      }
    })
  getComentarios();

});
