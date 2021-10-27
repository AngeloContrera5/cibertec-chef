$(document).ready(function () {
  $("#idCodReceta").val("");
  
});

$(document).on("click", "#inserFoto", function () {
  $('#elimFoto').click();
  $('#previews').empty();
  $("#errorimagen").text("");
})


$("[type='number']").keypress(function (evt) {
  evt.preventDefault();
})

$('#idnombre, #idtiempoprep,#idporciones,#iddificultad,#idingredientes,#idintrucciones,#idutensilios,#idtips,#iddieta,#idestiloplato,#idtipocomida,#idocasion,#idvideo')
  .bind('keyup', function () {
    if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
      || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
      || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
      || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
      || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
    ) {
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
    if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
      || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
      || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
      || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
      || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
    ) {
      $('#btnRegistrar').prop('disabled', true);
      $('#btnRegistrar').attr('disabled', true);
      $('#btnRegistrar').prop("type", "button");

    }
    else {
      $('#btnRegistrar').prop('disabled', false);
      $('#btnRegistrar').prop("type", "submit");
    }
  })



$('.fileinput-button').on('click', function () {
  $("#errorimagen").text("");
})

$('#previews')
  .bind('DOMSubtreeModified', function () {
    if ($("#previews").html() === ""
    ) {
      $('#btnRegistrar').prop('disabled', true);
      $('#btnRegistrar').attr('disabled', true);
      $('#btnRegistrar').prop("type", "button");


    }

    else {
  
      $('.errorFoto').each(function (i, obj) {
        if ($(".errorFoto").text() != '') {
          $('#btnRegistrar').prop('disabled', true);
          $('#btnRegistrar').attr('disabled', true);
          $('#btnRegistrar').prop("type", "button");
          $('.dz-remove').each(function (i, obj) {
            $('.dz-remove').on('click', function () {
              if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
              || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
              || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
              || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
              || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
            ) {
              $('#btnRegistrar').prop('disabled', true);
              $('#btnRegistrar').attr('disabled', true);
              $('#btnRegistrar').prop("type", "button");
            }
            else{
              $('#btnRegistrar').prop('disabled', false);
              $('#btnRegistrar').prop("type", "submit");
            }
            }) })
        }
        else{
          if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
          || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
          || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
          || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
          || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
        ) {
          $('#btnRegistrar').prop('disabled', true);
          $('#btnRegistrar').attr('disabled', true);
          $('#btnRegistrar').prop("type", "button");
        }
        else{
          $('#btnRegistrar').prop('disabled', false);
          $('#btnRegistrar').prop("type", "submit");
        }
        }
       
      })

      
    }
  })



$('#btnRegistrar').on('click', function () {
  $("#idnombre").valid();
  $("#idtiempoprep").valid();
  $("#idporciones").valid();
  $("#iddificultad").valid();
  $("#idingredientes").valid();
  $("#idintrucciones").valid();
  $("#idutensilios").valid();
  $("#idtips").valid();

  $("#iddieta").valid();
  $("#idestiloplato").valid();
  $("#idtipocomida").valid();
  $("#idocasion").valid();
  $("#idvideo").valid();
  

  if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
    || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
    || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
    || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
    || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
  ) {
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
   if ($(".dz-image-preview").length <= 0) {
    $("#errorimagen").text("Foto del platillo es Obligatorio");
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  else if ($(".dz-image-preview").length > 0){
    if (($("#idnombre").hasClass("error")) || ($("#idtiempoprep").hasClass("error")) || ($("#idporciones").hasClass("error"))
    || ($("#iddificultad").hasClass("error")) || ($("#idingredientes").hasClass("error")) || ($("#idintrucciones").hasClass("error"))
    || ($("#idutensilios").hasClass("error")) || ($("#idtips").hasClass("error"))
    || ($("#iddieta").hasClass("error")) || ($("#idestiloplato").hasClass("error")) || ($("#idtipocomida").hasClass("error"))
    || ($("#idocasion").hasClass("error")) || ($("#idvideo").hasClass("error"))
  ) {
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  else {
   

    $('#btnRegistrar').prop('disabled', false);
    $('#btnRegistrar').prop("type", "submit");
  }
  }

  else {
    $('#btnRegistrar').prop('disabled', false);
    $('#btnRegistrar').prop("type", "submit");
  }
});
  

$(document).on("click", "#btnLimpiar", function () {
  $("#idRegistrar").trigger('reset');
  $('#idnombre').removeClass('error').next('label.error').remove();
  $('#idtiempoprep').removeClass('error').next('label.error').remove();
  $("#idingredientes").removeClass('error').next('label.error').remove();
  $("#idintrucciones").removeClass('error').next('label.error').remove();
  $('#idporciones').removeClass('error').next('label.error').remove();
  $('#idutensilios').removeClass('error').next('label.error').remove();
  $('#idtips').removeClass('error').next('label.error').remove();
  $('#iddieta').removeClass('error').next('label.error').remove();
  $('#iddificultad').removeClass('error').next('label.error').remove();
  $('#idestiloplato').removeClass('error').next('label.error').remove();
  $('#idtipocomida').removeClass('error').next('label.error').remove();
  $('#idocasion').removeClass('error').next('label.error').remove();
  $('#idvideo').removeClass('error').next('label.error').remove();
  $('#elimFoto').click();
  $("#errorimagen").text("");
  $('#previews').empty();
  $('#btnRegistrar').attr('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $('#titulo').text("Registrar Receta");
  $('#boton').text("Registrar");
})


$(document).on("click", "#btnEditar", function () {
  
  $("#idRegistrar").trigger('reset');
  var cod;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  $("#errorimagen").text("");
  $('#btnRegistrar').prop('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $("#idCodReceta").val(cod);
  $('#titulo').text("Editar Receta");
  $('#boton').text("Editar");



})


$('#idRegistrar').validate({
    rules: {
      nombre: {
        required: true,
        regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{5,45})$/,
      },
      ingredientes: {
        required: true,
        regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°./;,_:-\s@]{5,10000})$/,
      },
      instrucciones: {
        required: true,
        regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°./;,_:-\s@]{5,10000})$/,
      },
      utensilios: {
        required: true,
        regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°./;,_:-\s@]{5,10000})$/,
      },
      tips: {
        required: true,
        regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°./;,_:-\s@]{5,10000})$/,
      },
      video: {
        required: true,
        regex: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
      },
      dificultad: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      dieta: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      estiloplato: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      tipocomida: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      ocasion: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      dificultad: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      tiempoprep: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
      porciones: {
        required: true,
        regex: /^[1-9][0-9]*$/,
      },
    },
    messages: {
      nombre: {
        required: 'Campo Nombre de Receta es Obligatorio',
        regex: 'Campo Nombre de Receta de 5 a 45 caracteres'
      },
      ingredientes: {
        required: 'Campo Ingredientes es Obligatorio',
        regex: 'Campo Ingredientes min 5 caracteres'
      },
      instrucciones: {
        required: 'Campo Intrucciones es Obligatorio',
        regex: 'Campo Intrucciones min 5 caracteres'
      },
      utensilios: {
        required: 'Campo Utensilios es Obligatorio',
        regex: 'Campo Utensilios min 5 caracteres'
      },
      tips: {
        required: 'Campo Tips es Obligatorio',
        regex: 'Campo Tips de min 5 caracteres'
      },
      video: {
        required: 'Campo Link de Video es Obligatorio',
        regex: 'Campo Link de Video no tiene el formato'
      },
      dificultad: {
        required: 'Campo Dificultad es Obligatorio',
        regex: 'Campo Dificultad es Obligatorio'
      },
      dieta: {
        required: 'Campo Dieta es Obligatorio',
        regex: 'Campo Dieta es Obligatorio'
      },
      estiloplato: {
        required: 'Campo Estilo de Plato es Obligatorio',
        regex: 'Campo Estilo de Plato es Obligatorio'
      },
      tipocomida: {
        required: 'Campo Tipo de Comida es Obligatorio',
        regex: 'Campo Tipo de Comida es Obligatorio'
      },
      ocasion: {
        required: 'Campo Ocasión es Obligatorio',
        regex: 'Campo Ocasión es Obligatorio'
      },
      dificultad: {
        required: 'Campo Dificultad es Obligatorio',
        regex: 'Campo Dificultad es Obligatorio'
      },
      dificultad: {
        required: 'Campo Dificultad es Obligatorio',
        regex: 'Campo Dificultad es Obligatorio'
      },
      tiempoprep: {
        required: 'Campo Tiempo Prep. es Obligatorio',
        regex: 'Campo Tiempo Prep. es Obligatorio'
      },
      porciones: {
        required: 'Campo Porciones es Obligatorio',
        regex: 'Campo Porciones es Obligatorio'
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


