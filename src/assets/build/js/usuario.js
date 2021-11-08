$(document).ready(function () {
  $("#idCodUsuario").val("");
});

$("#idrol").change(function () {
  var rol = $("#idfecnac").val();
  alert(rol);
});

$(document).on("click", "#inserFoto", function () {
  $("#elimFoto").click();
  $("#previews").empty();
  $("#errorimagen").text("");
});

$("[type='number']").keypress(function (evt) {
  evt.preventDefault();
});

$("#idnombres, #idapellidos,#idtelefono,#idcorreo,#idusuario,#idcontrasena")
  .bind("keyup", function () {
    if (
      $("#idnombres").hasClass("error") ||
      $("#idapellidos").hasClass("error") ||
      $("#idtelefono").hasClass("error") ||
      $("#idcorreo").hasClass("error") ||
      $("#idusuario").hasClass("error") ||
      $("#idcontrasena").hasClass("error")
    ) {
      $("#btnRegistrar").prop("disabled", true);
      $("#btnRegistrar").attr("disabled", true);
      $("#btnRegistrar").prop("type", "button");
    } else {
      $("#btnRegistrar").prop("disabled", false);
      $("#btnRegistrar").prop("type", "submit");
    }
  })
  .bind("blur", function () {
    if (
      $("#idnombres").hasClass("error") ||
      $("#idapellidos").hasClass("error") ||
      $("#idtelefono").hasClass("error") ||
      $("#idcorreo").hasClass("error") ||
      $("#idusuario").hasClass("error") ||
      $("#idcontrasena").hasClass("error")
    ) {
      $("#btnRegistrar").prop("disabled", true);
      $("#btnRegistrar").attr("disabled", true);
      $("#btnRegistrar").prop("type", "button");
    } else {
      $("#btnRegistrar").prop("disabled", false);
      $("#btnRegistrar").prop("type", "submit");
    }
  });

$(".fileinput-button").on("click", function () {
  $("#errorimagen").text("");
});

$("#previews").bind("DOMSubtreeModified", function () {
  if ($("#previews").html() === "") {
    $("#btnRegistrar").prop("disabled", true);
    $("#btnRegistrar").attr("disabled", true);
    $("#btnRegistrar").prop("type", "button");
  } else {
    $(".errorFoto").each(function (i, obj) {
      if ($(".errorFoto").text() != "") {
        $("#btnRegistrar").prop("disabled", true);
        $("#btnRegistrar").attr("disabled", true);
        $("#btnRegistrar").prop("type", "button");
        $(".dz-remove").each(function (i, obj) {
          $(".dz-remove").on("click", function () {
            if (
              $("#idnombres").hasClass("error") ||
              $("#idapellidos").hasClass("error") ||
              $("#idtelefono").hasClass("error") ||
              $("#idcorreo").hasClass("error") ||
              $("#idusuario").hasClass("error") ||
              $("#idcontrasena").hasClass("error")
            ) {
              $("#btnRegistrar").prop("disabled", true);
              $("#btnRegistrar").attr("disabled", true);
              $("#btnRegistrar").prop("type", "button");
            } else {
              $("#btnRegistrar").prop("disabled", false);
              $("#btnRegistrar").prop("type", "submit");
            }
          });
        });
      } else {
        if (
          $("#idnombres").hasClass("error") ||
          $("#idapellidos").hasClass("error") ||
          $("#idtelefono").hasClass("error") ||
          $("#idcorreo").hasClass("error") ||
          $("#idusuario").hasClass("error") ||
          $("#idcontrasena").hasClass("error")
        ) {
          $("#btnRegistrar").prop("disabled", true);
          $("#btnRegistrar").attr("disabled", true);
          $("#btnRegistrar").prop("type", "button");
        } else {
          $("#btnRegistrar").prop("disabled", false);
          $("#btnRegistrar").prop("type", "submit");
        }
      }
    });
  }
});

$("#btnRegistrar").on("click", function () {
  $("#idnombres").valid();
  $("#idapellidos").valid();
  $("#idtelefono").valid();
  $("#idcorreo").valid();
  $("#idusuario").valid();
  $("#idcontrasena").valid();

  if (
    $("#idnombres").hasClass("error") ||
    $("#idapellidos").hasClass("error") ||
    $("#idtelefono").hasClass("error") ||
    $("#idcorreo").hasClass("error") ||
    $("#idusuario").hasClass("error") ||
    $("#idcontrasena").hasClass("error")
  ) {
    $("#btnRegistrar").prop("disabled", true);
    $("#btnRegistrar").attr("disabled", true);
    $("#btnRegistrar").prop("type", "button");
  }
  if ($(".dz-image-preview").length <= 0) {
    $("#errorimagen").text("Foto del usuario es Obligatorio");
    $("#btnRegistrar").prop("disabled", true);
    $("#btnRegistrar").attr("disabled", true);
    $("#btnRegistrar").prop("type", "button");
  } else if ($(".dz-image-preview").length > 0) {
    if (
      $("#idnombres").hasClass("error") ||
      $("#idapellidos").hasClass("error") ||
      $("#idtelefono").hasClass("error") ||
      $("#idcorreo").hasClass("error") ||
      $("#idusuario").hasClass("error") ||
      $("#idcontrasena").hasClass("error")
    ) {
      $("#btnRegistrar").prop("disabled", true);
      $("#btnRegistrar").attr("disabled", true);
      $("#btnRegistrar").prop("type", "button");
    } else {
      $("#btnRegistrar").prop("disabled", false);
      $("#btnRegistrar").prop("type", "submit");
    }
  } else {
    $("#btnRegistrar").prop("disabled", false);
    $("#btnRegistrar").prop("type", "submit");
  }
});

$(document).on("click", "#btnLimpiar", function () {
  $("#idRegistrarUsuario").trigger("reset");
  $("#idnombres").removeClass("error").next("label.error").remove();
  $("#idapellidos").removeClass("error").next("label.error").remove();
  $("#idfecnac").removeClass("error").next("label.error").remove();
  $("#idtelefono").removeClass("error").next("label.error").remove();
  $("#idcorreo").removeClass("error").next("label.error").remove();
  $("#idusuario").removeClass("error").next("label.error").remove();
  $("#idcontrasena").removeClass("error").next("label.error").remove();
  $("#idcontrasena").text("");
  $("#elimFoto").click();
  $("#errorimagen").text("");
  $("#previews").empty();
  $("#btnRegistrar").attr("disabled", false);
  $("#btnRegistrar").prop("type", "button");
  $("#titulo").text("Registrar Usuario");
  $("#boton").text("Registrar");
});
$(document).on("click", "#btnEditar", function () {
  $("#idRegistrarUsuario").trigger("reset");
  var cod;
  cod = $(this).parents("tr").find("td")[0].innerHTML;
  //console.log(cod);
  $("#errorimagen").text("");
  $("#btnRegistrar").prop("disabled", false);
  $("#btnRegistrar").prop("type", "button");
  $("#idCodUsuario").val(cod);
  $("#titulo").text("Editar Usuario");
  $("#boton").text("Editar");
});

$("#idRegistrarUsuario").validate({
  rules: {
    nombres: {
      required: true,
      regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{3,45})$/,
    },
    apellidos: {
      required: true,
      regex: /^([a-zA-Z\\ñáéíóúÁÉÍÓÚÑ\s]{3,45})$/,
    },
    // fecha_nacimiento: {
    //   required: true,
    //   regex: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    // },
    telefono: {
      required: true,
      regex: /^([9]{1}[0-9]{8})$/,
    },
    correo: {
      required: true,
      regex: /^[\w-\.]+@([\w-]+\.)+[a-z]{2,3}$/,
    },
    // rol: {
    //   required: true,
    //   regex: /^[1-9][0-9]*$/,
    // },
    usuario: {
      required: true,
      regex: /^[a-zA-Z]{5,20}$/,
    },
    // clave: {
    //   required: true,
    //   regex: /^[a-zA-Z]{5,20}$/,
    // },
  },
  messages: {
    nombres: {
      required: "Campo Nombres es Obligatorio",
      regex: "Campo Nombres de 3 a 45 caracteres",
    },
    apellidos: {
      required: "Campo Apellidos es Obligatorio",
      regex: "Campo Apellidos de Usuario de 3 a 45 caracteres",
    },
    // fecha_nacimiento: {
    //   required: 'Campo Fecha de nacimiento es Obligatorio',
    //   regex: 'Ingresar una fecha válida'
    // },
    telefono: {
      required: "Campo Telefono es Obligatorio",
      regex: "Campo Telefono es de 9 dígitos",
    },
    correo: {
      required: "Campo Correo es Obligatorio",
      regex: "Ingresar un correo válido",
    },
    // rol: {
    //   required: 'Campo Rol es Obligatorio',
    //   regex: 'Campo Rol es Obligatorio'
    // },
    usuario: {
      required: "Campo Usuario es Obligatorio",
      regex: "Campo Usuario es de 5 a 20 caracteres, sin espacios, no números",
    },
    // clave: {
    //   required: 'Campo clave es Obligatorio',
    //   regex: 'Campo clave es Obligatorio'
    // },
  },
});

$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    return this.optional(element) || regexp.test(value);
  },
  "Please check your input."
);
