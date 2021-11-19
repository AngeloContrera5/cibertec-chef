$(document).ready(function () {
    $("#idCodTipoComida").val("");
});

$(document).on("click", "#btnEliminar", function () {
 

})
$('#idnombre').bind('keyup', function() {
              if (($("#idnombre").hasClass("error"))){
                $('#btnRegistrar').prop('disabled', true);
                $('#btnRegistrar').attr('disabled',true);
                $('#btnRegistrar').prop("type", "button");
              }
              else{
                $('#btnRegistrar').prop('disabled', false);
                $('#btnRegistrar').prop("type", "submit");
              }
              }) 
              .bind('blur', function() {
                if (($("#idnombre").hasClass("error"))){
                    $('#btnRegistrar').prop('disabled', true);
                    $('#btnRegistrar').attr('disabled',true);
                    $('#btnRegistrar').prop("type", "button");
                  }
                  else{
                    $('#btnRegistrar').prop('disabled', false);
                    $('#btnRegistrar').prop("type", "submit");
                  }
              })

 
$('#btnRegistrar').on('click', function() {
    $("#idnombre").valid();
    if (($("#idnombre").hasClass("error"))){
        $('#btnRegistrar').prop('disabled', true);
        $('#btnRegistrar').attr('disabled',true);
        $('#btnRegistrar').prop("type", "button");
      }
      else{
        $('#btnRegistrar').prop('disabled', false);
        $('#btnRegistrar').prop("type", "submit");
      }
  });
               

$(document).on("click", "#btnLimpiar", function () {
    $("#idRegistrar").trigger('reset');
    $('#idnombre').removeClass('error').next('label.error').remove();
    $('#btnRegistrar').attr('disabled',false);
    $('#btnRegistrar').prop("type", "button");
    
  $('#titulo').text("Registrar Receta");
  $('#boton').text("Registrar");
})


$(document).on("click", "#btnEditar", function () {
    var nombre;
    nombre = $(this).parents("tr").find("td")[1].innerHTML;
    var cod;
    cod = $(this).parents("tr").find("td")[0].innerHTML;
    var estado;
    estado = $(this).parents("tr").find("td")[5].innerHTML;
    if (estado != "Inactivo") {
    $("#idRegistrar").trigger('reset');
    $('#idnombre').val(nombre);
    $('#titulo').text("Editar Tipo de Comida");
    $('#boton').text("Editar");
    $("#idCodTipoComida").val(cod);
  }
  else{
    Swal.fire({
      title: 'La ocasión está en estado inactivo.',
      text: '',
      icon: 'warning',
      confirmButtonColor: '#780116',
      showCloseButton: true,
    })
  }
})




$('#idRegistrar').validate({
    rules: {
      nombre:{
         required: true,
         regex:  /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{4,45})$/,
         },
       
             
     },
     messages: {
      nombre:{
          required: 'Campo Nombre de Tipo de Comida es Obligatorio',
          regex: 'Campo Nombre de Tipo de Comida de 4 a 45 caracteres'  
    },
      
     }
     });



$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );
  
  
