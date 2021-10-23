$(document).ready(function () {
    cargarEscalaMagisterial();
    cargarGrupoOcupacional();
    cargarJornadaLaboral();
});

function cargarEscalaMagisterial() {
    $.getJSON("/DAWI_PROYECTO-ver1.1/infEscalafonarioCbo/listadoEM", {}, function (response) {

        $("#idescmagisterial").html("<option value=''>[Seleccione]</option>");
        $.each(response, function (index, item) {
            $("#idescmagisterial").append("<option value='" + item.codEsMag + "'>" + item.escala + "</option>")
        });
    });
}
function cargarGrupoOcupacional() {
    $.getJSON("/DAWI_PROYECTO-ver1.1/infEscalafonarioCbo/listadoGO", {}, function (response) {

        $("#idocupacional").html("<option value=''>[Seleccione]</option>");
        $.each(response, function (index, item) {
            $("#idocupacional").append("<option value='" + item.codGrupOcp + "'>" + item.grupo + "</option>")
        });
    });
}
function cargarJornadaLaboral() {
    $.getJSON("/DAWI_PROYECTO-ver1.1/infEscalafonarioCbo/listadoJL", {}, function (response) {

        $("#idjornada").html("<option value=''>[Seleccione]</option>");
        $.each(response, function (index, item) {
            $("#idjornada").append("<option value='" + item.codJorLabo + "'>" + item.jornada + "</option>")
        });
    });
}


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
    $('#idtiempototal').val(1);
    $('#idtiempoultimocargo').val(1);
    $('#idRegistrar').bootstrapValidator({
        fields: {
            tp: {
                validators: {
                    notEmpty: {
                        message: 'Campo Título Profesional es obligatorio'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{7,150})$/,
                        message: 'Campo Título Profesional de 7 a 150 letras'
                    }
                }
            },
            ca: {
                validators: {
                    notEmpty: {
                        message: 'Campo Cargo Actual es obligatorio'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{4,50})$/,
                        message: 'Campo Cargo Actual de 4 a 50 letras'
                    }
                }
            },
            escalamagisterial: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una Escala Magisterial'
                    }
                }
            },
            ocupacional: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione un Grupo Ocupacional'
                    }
                }
            },
            jornada: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una Jornada Laboral'
                    }
                }
            },

            tsUc: {
                validators: {
                    notEmpty: {
                        message: 'Campo Tiempo de Serv. en el último cargo es obligatorio'
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]*$/,
                        message: 'Campo Tiempo de Serv. en el último cargo es obligatorio'
                    }
                }
            },
            tst: {
                validators: {
                    notEmpty: {
                        message: 'Campo Tiempo de Servicio Total es obligatorio'
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]*$/,
                        message: 'Campo Tiempo de Servicio Total es obligatorio'
                    }
                }
            },
            ant: {
                validators: {
                    notEmpty: {
                        message: 'Campo Antecedentes es obligatorio'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°._:-\s@]{4,150})$/,
                        message: 'Campo Antecedentes de 4 a 150 letras o números'
                    }
                }
            },
            reslicsingocerem: {
                validators: {
                    notEmpty: {
                        message: 'Campo Res. de Lic. sin Goce de Remuneración es obligatorio'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°._:-\s@]{4,150})$/,
                        message: 'Campo Res. de Lic. sin Goce de Remuneración de 4 a 150 letras o números'
                    }
                }
            },
            resdemerito: {
                validators: {
                    notEmpty: {
                        message: 'Campo Resolución de Demérito es obligatorio'
                    },
                    regexp: {
                        regexp: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\0-9°._:-\s@]{4,150})$/,
                        message: 'Campo Resolución de Demérito de 4 a 150 letras o números'
                    }
                }
            },

        }
    });
});
