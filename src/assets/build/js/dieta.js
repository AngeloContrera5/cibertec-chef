$(document).ready(function () {
  $("#idCodDieta").val("");
});

$(document).on("click", "#btnEliminar", function () {


})
$('#idnombre').bind('keyup', function () {
  if (($("#idnombre").hasClass("error"))) {
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  else {
    $('#btnRegistrar').prop('disabled', false);
    $('#btnRegistrar').prop("type", "submit");
  }
})
  .bind('blur', function () {
    if (($("#idnombre").hasClass("error"))) {
      $('#btnRegistrar').prop('disabled', true);
      $('#btnRegistrar').attr('disabled', true);
      $('#btnRegistrar').prop("type", "button");
    }
    else {
      $('#btnRegistrar').prop('disabled', false);
      $('#btnRegistrar').prop("type", "submit");
    }
  })


$('#btnRegistrar').on('click', function () {
  $("#idnombre").valid();
  if (($("#idnombre").hasClass("error"))) {
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  else {
    $('#btnRegistrar').prop('disabled', false);
    $('#btnRegistrar').prop("type", "submit");
  }
});


$(document).on("click", "#btnLimpiar", function () {
  $("#idRegistrar").trigger('reset');
  $('#idnombre').removeClass('error').next('label.error').remove();
  $('#btnRegistrar').attr('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $('#titulo').text("Registrar Receta");
  $('#boton').text("Registrar");
})


$(document).on("click", "#btnEditar", function () {
  var nombre;
  nombre = $(this).parents("tr").find("td")[1].innerHTML;
  var cod;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  $("#idRegistrar").trigger('reset');
  $('#idnombre').val(nombre);
  $('#titulo').text("Editar Dieta");
  $('#boton').text("Editar");
  $("#idCodDieta").val(cod);
})




$('#idRegistrar').validate({
  rules: {
    nombre: {
      required: true,
      regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{5,45})$/,
    },


  },
  messages: {
    nombre: {
      required: 'Campo Nombre de Dieta es Obligatorio',
      regex: 'Campo Nombre de Dieta de 5 a 45 caracteres'
    },

  }
});



$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    return this.optional(element) || regexp.test(value);
  },
  "Please check your input."
);


