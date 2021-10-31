$(document).on("click", "#inserFoto", function () {
  $('#elimFoto').click();
  $('#previews').empty();
  $("#errorimagen").text("");
})

$("[type='number']").keypress(function (evt) {
  evt.preventDefault();
})

$('.fileinput-button').on('click', function () {
  $("#errorimagen").text("");
})

$(document).on("click", "#btnEditar", function () {
  
  $("#idRegistrarUsuario").trigger('reset');
  var cod;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  //console.log(cod);
  $("#errorimagen").text("");
  $('#btnRegistrar').prop('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $("#idCodUsuario").val(cod);
  $('#titulo').text("Editar Usuario");
  $('#boton').text("Editar");
  



})

$(document).on("click", "#btnLimpiar", function () {
  $("#idRegistrarUsuario").trigger('reset');
  $('#idnombres').removeClass('error').next('label.error').remove();
  $('#idapellidos').removeClass('error').next('label.error').remove();
  $("#idfecnac").removeClass('error').next('label.error').remove();
  $("#idtelefono").removeClass('error').next('label.error').remove();
  $('#idcorreo').removeClass('error').next('label.error').remove();
  $('#idusuario').removeClass('error').next('label.error').remove();
  $('#idcontrasena').removeClass('error').next('label.error').remove();
  $('#idcontrasena').text("");
  $('#elimFoto').click();
  $("#errorimagen").text("");
  $('#previews').empty();
  $('#btnRegistrar').attr('disabled', false);
  $('#btnRegistrar').prop("type", "button");
  $('#titulo').text("Registrar Receta");
  $('#boton').text("Registrar");
})