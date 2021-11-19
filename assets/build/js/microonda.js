$(document).ready(function () {
  $("#idCodMicroondas").val("");

});

$(document).on("click", "#inserFoto", function () {
  $('#elimFoto').click();
  $('#previews').empty();
  $("#errorimagen").text("");
})



$('#idnombre')
  .bind('keyup', function () {
    if (($("#idnombre").hasClass("error"))
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
    if (($("#idnombre").hasClass("error"))
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
              if (($("#idnombre").hasClass("error"))
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
          })
        }
        else {
          if (($("#idnombre").hasClass("error"))
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

      })


    }
  })



$('#btnRegistrar').on('click', function () {
  $("#idnombre").valid();

  if (($("#idnombre").hasClass("error"))
  ) {
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  if ($(".dz-image-preview").length <= 0) {
    $("#errorimagen").text("Foto del microondas es Obligatorio");
    $('#btnRegistrar').prop('disabled', true);
    $('#btnRegistrar').attr('disabled', true);
    $('#btnRegistrar').prop("type", "button");
  }
  else if ($(".dz-image-preview").length > 0) {
    if (($("#idnombre").hasClass("error"))
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

  $('#elimFoto').click();
  $("#errorimagen").text("");
  $('#previews').empty();
  $('#btnRegistrar').attr('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $('#titulo').text("Registrar Microondas");
  $('#boton').text("Registrar");
  $('#btnRegistrar').prop('disabled', true);
  $('#btnLimpiar').prop('disabled', true);
  $("#idimgMicroonda").attr("src", "https://thumbs.dreamstime.com/b/el-libro-de-Recetas-alinea-concepto-del-icono-ejemplo-linear-vector-las-s%C3%ADmbolo-muestra-132450732.jpg"
  );
})



$(document).on("click", "#btnAgregar", function () {

  var cod, nombre, tiempo, porcion, foto;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  nombre = $(this).parents("tr").find("td")[1].innerHTML;
  tiempo = $(this).parents("tr").find("td")[2].innerHTML;
  porcion = $(this).parents("tr").find("td")[3].innerHTML;
  foto = $(this).parents("tr").find("td")[4].innerHTML;
if($("#idCodMicroondas").val()==""){
  $("#idRegistrar").trigger('reset');
  $('#idnombre').removeClass('error').next('label.error').remove();
  $('#elimFoto').click();
  $("#errorimagen").text("");
  $('#previews').empty();
  $('#btnRegistrar').attr('disabled', false);
  $('#btnLimpiar').prop('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $('#titulo').text("Registrar Microondas");
  $('#boton').text("Registrar");
}
 

  $('#idcodigoReceta').val(cod);
  $('#idnombreReceta').val(nombre);
  $('#idtiempoReceta').val(tiempo);
  $('#idporcionReceta').val(porcion);
  $("#idimgMicroonda").attr("src", foto);
})

$(document).on("click", "#btnEditar", function () {

  $("#idRegistrar").trigger('reset');
  var cod;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  $("#errorimagen").text("");
  $('#btnRegistrar').prop('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $("#idCodMicroondas").val(cod);
  $('#titulo').text("Editar Microondas");
  $('#boton').text("Editar");



})


$('#idRegistrar').validate({
  rules: {
    nombre: {
      required: true,
      regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°./;,_:-\s@]{5,100})$/,
    },
  },
  messages: {
    nombre: {
      required: 'Campo Nombre de Microondas es Obligatorio',
      regex: 'Campo Nombre de Microondas min 5 caracteres'
    }
  }
});


$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    return this.optional(element) || regexp.test(value);
  },
  "Please check your input."
);


