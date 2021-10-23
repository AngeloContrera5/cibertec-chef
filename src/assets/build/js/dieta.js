$(document).ready(function () {
   
});



$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});

$("#idtiempoultimocargo").change(function () {
    $("#idtiempototal").attr('min', $("#idtiempoultimocargo").val());
    $("#idtiempototal").val($("#idtiempoultimocargo").val());
});

$(document).on("click", "#btnEliminar", function () {
    var cod, codExp;
    cod = $(this).parents("tr").find("td")[0].innerHTML;
    codExp = $(this).parents("tr").find("td")[7].innerHTML;
    $("#idEliminar").val(cod);
    $("#idExpe").val(codExp);

})

$(document).on("click", "#btnLimpiar", function () {
    $("#idRegistrar").trigger('reset');
    $("#idRegistrar").data('bootstrapValidator').resetForm();
    $('#idtiempototal').val(1);
    $('#idtiempoultimocargo').val(1);
    var foto = 'https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1870181.jpg';
    $("#idimg").attr('src', foto);
    $("#btnRegistrar").prop('disabled', true);
    $("#btnLimpiar").prop('disabled', true);
    $("#btnBuscar").prop('disabled', false);

    var name = $("#mosCodigo").attr("class");
    $("#mosCodigo").text(name);

})



$(document).on("click", "#btnAgregar", function () {
    var codSoli, nom, ape, dni, dir, foto, codExp;
    codSoli = $(this).parents("tr").find("td")[0].innerHTML;
    nom = $(this).parents("tr").find("td")[1].innerHTML;
    ape = $(this).parents("tr").find("td")[2].innerHTML;
    dni = $(this).parents("tr").find("td")[3].innerHTML;
    dir = $(this).parents("tr").find("td")[4].innerHTML;

    $.get("codExp?cod=" + codSoli, function (response) {
        $("#idcodigoex").val(response);
    })
    $.get("foto?codSoli=" + codSoli, function (response) {
        $("#idimg").attr("src", ' data: image / png; Base64, ' + response);
    });

    $("#idcodigo").val(codSoli);
    $("#idnombres").val(nom);
    $("#idapellidos").val(ape);
    $("#iddni").val(dni);
    $("#iddireccion").val(dir);

    $("#btnRegistrar").prop('disabled', false);
    $("#btnLimpiar").prop('disabled', false);

    $("#idtituloprofesional").prop('disabled', false);
    $("#idcargoactual").prop('disabled', false);
    $("#idescmagisterial").prop('disabled', false);
    $("#idocupacional").prop('disabled', false);
    $("#idjornada").prop('disabled', false);
    $("#idtiempoultimocargo").prop('disabled', false);
    $("#idtiempototal").prop('disabled', false);
    $("#idantecedentes").prop('disabled', false);
    $("#idreslicsingocerem").prop('disabled', false);
    $("#idresdemerito").prop('disabled', false);

})

$(document).on("click", "#btnEditar", function () {
    var codSolicitante;
    codSolicitante = $(this).parents("tr").find("td")[1].innerHTML;
    $("#idRegistrar").trigger('reset');
    $("#idRegistrar").data('bootstrapValidator').resetForm();
    var url = $(this).attr("href");
    $.get(url, function (response) {
        $("#mosCodigo").text(response.codInfEsc);
        $("#idcodigoex").val(response.tbexpediente.codExp);

        $.get("buscarSolicitante?codSol=" + codSolicitante, function (response1) {

            $("#idcodigo").val(codSolicitante);
            $("#idnombres").val(response1.nomSol);
            $("#idapellidos").val(response1.apePat_sol + ' ' + response1.apeMat_sol);
            $("#iddni").val(response1.dniSol);
            $("#iddireccion").val(response1.dirSol);
            $.get("foto?codSoli=" + codSolicitante, function (resultado) {
                $("#idimg").attr("src", ' data: image / png; Base64, ' + resultado);
            });

        });


        $("#idtituloprofesional").val(response.tp);
        $("#idcargoactual").val(response.ca);
        $("#idescmagisterial").val(response.tbescalamagisterial.codEsMag);
        $("#idocupacional").val(response.tbgrupoocupacional.codGrupOcp);
        $("#idjornada").val(response.tbjornadalaboral.codJorLabo);
        $("#idtiempoultimocargo").val(response.tsUc);
        $("#idtiempototal").val(response.tst);
        $("#idantecedentes").val(response.an);
        $("#idreslicsingocerem").val(response.rlsgr);
        $("#idresdemerito").val(response.rd);

        $("#codReg").val(0);
        $("#codModi").val(response.codInfEsc);
        $("#btnRegistrar").prop('disabled', false);
        $("#btnLimpiar").prop('disabled', false);
        $("#btnBuscar").prop('disabled', true);
        $("#idtituloprofesional").prop('disabled', false);
        $("#idcargoactual").prop('disabled', false);
        $("#idescmagisterial").prop('disabled', false);
        $("#idocupacional").prop('disabled', false);
        $("#idjornada").prop('disabled', false);
        $("#idtiempoultimocargo").prop('disabled', false);
        $("#idtiempototal").prop('disabled', false);
        $("#idantecedentes").prop('disabled', false);
        $("#idreslicsingocerem").prop('disabled', false);
        $("#idresdemerito").prop('disabled', false);

    })


})

$(document).on("click", "#btnVer", function () {
    var codSolicitante;
    codSolicitante = $(this).parents("tr").find("td")[1].innerHTML;
    var url = $(this).attr("href");
    $.get(url, function (response) {
        $("#detalle11").text(response.codInfEsc);
        $("#detalle6").text(response.tp);
        $("#detalle7").text(response.ca);
        $("#detalle8").text(response.tbescalamagisterial.escala);
        $("#detalle9").text(response.tbgrupoocupacional.grupo);
        $("#detalle10").text(response.tbjornadalaboral.jornada);
        $("#detalle13").text(response.tsUc + ' año(s)');
        $("#detalle14").text(response.tst + ' año(s)');
        $("#detalle15").text(response.an);
        $("#detalle16").text(response.rlsgr);
        $("#detalle17").text(response.rd);

        $.get("buscarSolicitante?codSol=" + codSolicitante, function (response1) {

            $("#detalle1").text(codSolicitante);
            $("#detalle2").text(response1.nomSol);
            $("#detalle3").text(response1.apePat_sol + ' ' + response1.apeMat_sol);
            $("#detalle4").text(response1.dniSol);
            $("#detalle5").text(response1.dirSol);

            $.get("foto?codSoli=" + codSolicitante, function (resultado) {
                $("#detalle12").attr("src", ' data: image / png; Base64, ' + resultado);
            });
        });


        $("#usuario").text(response.tbusuario.nomUsuario + ' ' + response.tbusuario.apePat_usuario + ' ' + response.tbusuario.apeMat_usuario);

        $.get("identArea?codSoli=" + response.tbexpediente.codExp, function (response) {
            var area = response;
            $.get("areaxCod?cod=" + area, function (response) {
                $("#area").text(response);
            })
        })
    })



})


$(document).ready(function () {
    $('#idRegistrar').validate({
        rules: {
          nombre:{
             required: true,
             regex:  /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{5,45})$/,
             },
           
                 
         },
         messages: {
          nombre:{
              required: 'Campo Nombre de Dieta es Obligatorio',
              regex: 'Campo Nombre de Dieta de 5 a 45 caracteres'  
        },
          
         }
         });
    
    
    
});



$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );
  
  
