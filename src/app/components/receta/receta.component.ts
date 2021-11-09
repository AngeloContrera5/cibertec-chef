import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var Swal: any;
import { formatDate } from '@angular/common';
import { Dificultad } from 'src/app/models/dificultad.model';
import { EstiloPlato } from 'src/app/models/estilo-plato.model';
import { Ocasion } from 'src/app/models/ocasion.model';
import { Receta } from 'src/app/models/receta.model';
import { Dieta } from 'src/app/models/dieta.model';
import { TipoComida } from 'src/app/models/tipo-comida.model';
import { DietaService } from 'src/app/services/dieta.service';
import { DificultadService } from 'src/app/services/dificultad.service';
import { EstiloPlatoService } from 'src/app/services/estilo-plato.service';
import { OcasionService } from 'src/app/services/ocasion.service';
import { RecetaService } from 'src/app/services/receta.service';
import { TipoComidaService } from 'src/app/services/tipo-comida.service';
import { MicroondasService } from 'src/app/services/microondas.service';
import { Microondas } from 'src/app/models/microondas.model';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
})
export class RecetaComponent implements OnInit {
  recetas: Receta[] = [];
  dificultad: Dificultad[] = [];
  ocasion: Ocasion[] = [];
  dieta: Dieta[] = [];
  estiloPlato: EstiloPlato[] = [];
  tipoComida: TipoComida[] = [];
  allDataFetched: boolean = false;
  microondas: Microondas[] = [];
  receta: Receta = {
    tiempo_preparacion: 1,
    porcion: 1,
    dificultad: {
      id_dificultad: -1,
    },
    dieta: {
      id_dieta: -1,
    },
    estiloPlato: {
      id_estilo_plato: -1,
    },
    tipoComida: {
      id_tipo_comida: -1,
    },
    ocasion: {
      id_ocasion: -1,
    },
<<<<<<< HEAD
  };
=======
    usuario:{
      id_usuario: parseInt(this.tokenService.getId())
    }
  }
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
  recetaEditar: Receta = {
    dificultad: {
      id_dificultad: -1,
    },
    dieta: {
      id_dieta: -1,
    },
    estiloPlato: {
      id_estilo_plato: -1,
    },
    tipoComida: {
      id_tipo_comida: -1,
    },
    ocasion: {
      id_ocasion: -1,
    },
<<<<<<< HEAD
  };
  recetaEliminar: Receta = {};
  recetaVer: Receta = {};

  constructor(
    private recetaService: RecetaService,
    private dificultadService: DificultadService,
    private ocasionService: OcasionService,
    private dietaService: DietaService,
    private tipoComidaService: TipoComidaService,
    private estiloPlatoService: EstiloPlatoService,
    private microondasService: MicroondasService
  ) {
    this.recetaService.listarRecetas().subscribe((recetas) => {
      (this.recetas = recetas), (this.allDataFetched = true);
    });

    this.dificultadService
      .listarDificultad()
      .subscribe((dificultad) => (this.dificultad = dificultad));

    this.dietaService
      .listarDietasActivas()
      .subscribe((dieta) => (this.dieta = dieta));

    this.ocasionService
      .listarOcasionesActivas()
      .subscribe((ocasion) => (this.ocasion = ocasion));

    this.tipoComidaService
      .listarTipoComidasActivas()
      .subscribe((tipoComida) => (this.tipoComida = tipoComida));

    this.estiloPlatoService
      .listarEstiloPlatosActivas()
      .subscribe((estiloPlato) => (this.estiloPlato = estiloPlato));
=======
  }
  recetaEliminar: Receta = {}
  recetaVer: Receta = {}


  constructor(private recetaService: RecetaService, private dificultadService: DificultadService,
    private ocasionService: OcasionService, private dietaService: DietaService, private tipoComidaService: TipoComidaService,
    private estiloPlatoService: EstiloPlatoService, private microondasService: MicroondasService,private tokenService: TokenService,) {
   $("#example1 > tbody").empty(),
    this.recetaService.listarRecetasActivas().subscribe(
      (recetas) => {
        this.recetas = recetas,
          this.allDataFetched = true;
      }
    );

    this.dificultadService.listarDificultad().subscribe(
      (dificultad) => this.dificultad = dificultad
    );

    this.dietaService.listarDietasActivas().subscribe(
      (dieta) => this.dieta = dieta
    );

    this.ocasionService.listarOcasionesActivas().subscribe(
      (ocasion) => this.ocasion = ocasion
    );

    this.tipoComidaService.listarTipoComidasActivas().subscribe(
      (tipoComida) => this.tipoComida = tipoComida
    );

    this.estiloPlatoService.listarEstiloPlatosActivas().subscribe(
      (estiloPlato) => this.estiloPlato = estiloPlato
    );
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
  }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file.js');
    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/receta.js');
  }

  registra() {
    if ($('#idCodReceta').val() == '') {
      this.receta.fotoBase64 = $('.preview img').attr('src');

      this.recetaService.registrarReceta(this.receta).subscribe(
<<<<<<< HEAD
=======

        response => {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
        Swal.fire({
          title: '<br> Se está registrando receta',
          text: 'Procesando datos...',
          width: '500px',
          didOpen: () => {
            Swal.showLoading()
          },
          buttons: false,
          timerProgressBar: true,
          closeOnClickOutside: false,
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
<<<<<<< HEAD
        }).then(function () {
          Swal.fire({
            title: 'Se registró receta exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 3500,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(function () {
            window.location.href = 'http://localhost:4200/receta';
          });
        }),

        (error) => {
=======
        })
          .then(function () {
            Swal.fire({
              title: 'Se registró receta exitosamente.',
              text: '',
              icon: 'success',
              buttons: false,
              closeOnClickOutside: false,
              timer: 3500,
              showCancelButton: false,
              showConfirmButton: false,

            })
              .then(function () {
                window.location.href = "http://localhost:4200/receta";
              });
          })

        },
        error => {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
          console.log(error);
          Swal.fire({
            title: 'Error al registrar receta.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          });
        }
      );
    } else if ($('#idCodReceta').val() != '') {
      this.recetaService
        .getRecetaxId(Number($('#idCodReceta').val()))
        .subscribe((recetaEditar) => {
          this.recetaEditar = recetaEditar;
        });

      Swal.fire({
        title: '¿Seguro que deseas modificar receta?',
        text: '',
        icon: 'warning',
        closeOnClickOutside: false,
        confirmButtonText: 'Sí',
        confirmButtonColor: '#780116',
        showCancelButton: true,
        cancelButtonText: 'No',
        dangerMode: true,
      }).then((result: { [x: string]: any }) => {
        if (result['isConfirmed']) {
<<<<<<< HEAD
          this.recetaEditar.nombre_platillo = String($('#idnombre').val());
          this.recetaEditar.tiempo_preparacion = Number(
            $('#idtiempoprep').val()
          );
          this.recetaEditar.porcion = Number($('#idporciones').val());
          this.recetaEditar.dificultad!.id_dificultad = Number(
            $('#iddificultad').val()
          );
          this.recetaEditar.estiloPlato!.id_estilo_plato = Number(
            $('#idestiloplato').val()
          );
          this.recetaEditar.dieta!.id_dieta = Number($('#iddieta').val());
          this.recetaEditar.tipoComida!.id_tipo_comida = Number(
            $('#idtipocomida').val()
          );
          this.recetaEditar.ocasion!.id_ocasion = Number($('#idocasion').val());
          this.recetaEditar.ingrediente = String($('#idingredientes').val());
          this.recetaEditar.instruccion = String($('#idintrucciones').val());
          this.recetaEditar.utensilio = String($('#idutensilios').val());
          this.recetaEditar.tip = String($('#idtips').val());
          this.recetaEditar.video = String($('#idvideo').val());

=======
          this.recetaEditar.nombre_platillo = String($("#idnombre").val());
          this.recetaEditar.tiempo_preparacion = Number($("#idtiempoprep").val());
          this.recetaEditar.porcion = Number($("#idporciones").val());
          this.recetaEditar.dificultad!.id_dificultad = Number($("#iddificultad").val());
          this.recetaEditar.estiloPlato!.id_estilo_plato = Number($("#idestiloplato").val());
          this.recetaEditar.dieta!.id_dieta = Number($("#iddieta").val());
          this.recetaEditar.tipoComida!.id_tipo_comida = Number($("#idtipocomida").val());
          this.recetaEditar.ocasion!.id_ocasion = Number($("#idocasion").val());
          this.recetaEditar.ingrediente = String($("#idingredientes").val());
          this.recetaEditar.instruccion = String($("#idintrucciones").val());
          this.recetaEditar.utensilio = String($("#idutensilios").val());
          this.recetaEditar.tip = String($("#idtips").val());
          this.recetaEditar.video = String($("#idvideo").val());
          this.recetaEditar.usuario!.id_usuario= parseInt(this.tokenService.getId());
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
          if (this.recetaEditar.fotoBase64 != $('.preview img').attr('src')) {
            this.recetaEditar.fotoBase64 = $('.preview img').attr('src');
          }

          this.recetaService.actualizarReceta(this.recetaEditar).subscribe(
<<<<<<< HEAD
=======
            response => {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
            Swal.fire({
              title: '<br> Se está modificando receta.',
              text: 'Procesando datos...',
              width: '500px',
              didOpen: () => {
                Swal.showLoading()
              },
              buttons: false,
              timerProgressBar: true,
              closeOnClickOutside: false,
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
<<<<<<< HEAD
            }).then(function () {
              Swal.fire({
                title: 'Se modificó receta exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 3500,
                showCancelButton: false,
                showConfirmButton: false,
              }).then(function () {
                window.location.href = 'http://localhost:4200/receta';
              });
            }),
            (error) => {
=======
            })
              .then(function () {
                Swal.fire({
                  title: 'Se modificó receta exitosamente.',
                  text: '',
                  icon: 'success',
                  buttons: false,
                  closeOnClickOutside: false,
                  timer: 3500,
                  showCancelButton: false,
                  showConfirmButton: false,

                })
                  .then(function () {
                    window.location.href = "http://localhost:4200/receta";
                  })


              })},
            error => {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
              console.log(error);
              Swal.fire({
                title: 'Error al modificar receta.',
                text: '',
                icon: 'error',
                confirmButtonColor: '#780116',
                showCloseButton: true,
              });
            }
          );
        } else {
          Swal.fire({
            title: 'Se canceló modificación.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          });
        }
      });
    }
  }

  elimina(val: any, val2: any) {
    const idReceta = val;
    const estado = val2;
    this.recetaService.getRecetaxId(idReceta).subscribe((recetaEliminar) => {
      this.recetaEliminar = recetaEliminar;
    });

    this.microondasService
      .listarMicroondasxReceta(idReceta)
      .subscribe((microondas) => {
        this.microondas = microondas;
      });

  /*  if (estado == 2) {
      Swal.fire({
        title: 'La receta ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
<<<<<<< HEAD
      });
    } else {
=======
      })
    }
    else {*/

>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
      Swal.fire({
        title: '¿Seguro que deseas modificar receta a estado inactivo?',
        text: 'Se modificará receta y sus microondas a estado inactivo',
        icon: 'warning',
        closeOnClickOutside: false,
        confirmButtonText: 'Sí',
        showCancelButton: true,
        cancelButtonText: 'No',
        dangerMode: true,
        confirmButtonColor: '#780116',
      }).then((result: { [x: string]: any }) => {
        if (result['isConfirmed']) {
          this.recetaEliminar.estado = 2;
<<<<<<< HEAD
=======
          this.recetaEliminar.usuario!.id_usuario= parseInt(this.tokenService.getId());
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930

          this.recetaService.actualizarReceta(this.recetaEliminar).subscribe(
            (response) => {
              this.microondas.forEach((obj) => {
                obj.estado = 2;
                obj.usuario!.id_usuario= parseInt(this.tokenService.getId());
                this.microondasService.actualizarMicroondas(obj).subscribe(
<<<<<<< HEAD
                  Swal.fire({
                    title: 'Se está modificando receta y microondas.',
                    text: 'Procesando datos...',
                    width: '500px',
                    imageUrl: 'https://www.boasnotas.com/img/loading2.gif',
                    imageHeight: 150,
                    imageWidth: 150,
                    buttons: false,
                    timerProgressBar: true,
                    closeOnClickOutside: false,
                    timer: 8000,
                    showCancelButton: false,
                    showConfirmButton: false,
                  }).then(function () {
                    Swal.fire({
                      title:
                        'Se modificó receta y microondas a estado inactivo exitosamente.',
                      text: '',
                      icon: 'success',
                      buttons: false,
                      closeOnClickOutside: false,
                      timer: 2500,
                      showCancelButton: false,
                      showConfirmButton: false,
                    }).then(function () {
                      alert('-');
                      window.location.href = 'http://localhost:4200/receta';
                    });
                  }),
                  (error) => {
=======
                  response => {
                console.log(response);
                  },
                  error => {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
                    console.log(error);
                    Swal.fire({
                      title: 'Error al modificar microondas.',
                      text: '',
                      icon: 'error',
                      confirmButtonColor: '#780116',
                      showCloseButton: true,
<<<<<<< HEAD
                    });
                  }
                );
              });
=======
                    })
                  },
                )
              })
              Swal.fire({
                title: '<br> Se está modificando receta y microondas.',
                text: 'Procesando datos...',
                width: '500px',
                didOpen: () => {
                  Swal.showLoading()
                },
                buttons: false,
                timerProgressBar: true,
                closeOnClickOutside: false,
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
              })
                .then(function () {
                  Swal.fire({
                    title: 'Se modificó receta y microondas a estado inactivo exitosamente.',
                    text: '',
                    icon: 'success',
                    buttons: false,
                    closeOnClickOutside: false,
                    timer: 3500,
                    showCancelButton: false,
                    showConfirmButton: false,

                  })
                    .then(function () {
                      window.location.href = "http://localhost:4200/receta";
                    })
                })
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
            },
            (error) => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar receta.',
                text: '',
                icon: 'error',
                confirmButtonColor: '#780116',
                showCloseButton: true,
              });
            }
          );
        } else {
          Swal.fire({
            title: 'Se canceló modificación.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          });
        }
<<<<<<< HEAD
      });
    }
=======
      })
  /*  }*/

>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
  }

  ver(val: any) {
    const idReceta = val;
    this.recetaService.getRecetaxId(idReceta).subscribe((recetaVer) => {
      this.recetaVer = recetaVer;
      $('#detalle1').text(idReceta);
      $('#detalle2').attr('src', this.recetaVer.fotoBase64);
      $('#detalle3').text(String(this.recetaVer.nombre_platillo));
      $('#detalle4').text(
        String(this.recetaVer.tiempo_preparacion) + ' minuto(s)'
      );
      $('#detalle5').text(String(this.recetaVer.porcion));
      $('#detalle6').text(String(this.recetaVer.dificultad?.descripcion));
      $('#detalle7').text(String(this.recetaVer.tipoComida?.nombre));
      $('#detalle8').text(String(this.recetaVer.ocasion?.nombre));
      $('#detalle9').text(String(this.recetaVer.dieta?.nombre));
      $('#detalle10').text(String(this.recetaVer.estiloPlato?.nombre));
      $('#detalle11').text(
        String(
          this.recetaVer.usuario?.nombres +
            ' ' +
            this.recetaVer.usuario?.apellidos
        )
      );
      $('#detalle12').text(
        String(
          formatDate(this.recetaVer.fecha_registro!, 'dd/MM/yyyy', 'en-US')
        )
      );
      if (recetaVer.fecha_actualiza == null) {
        $('#detalle13').text('No existe');
      } else {
        $('#detalle13').text(
          String(
            formatDate(this.recetaVer.fecha_actualiza!, 'dd/MM/yyyy', 'en-US')
          )
        );
      }

      $('#detalle14').text(String(this.recetaVer.ingrediente));
      $('#detalle15').text(String(this.recetaVer.instruccion));
      $('#detalle16').text(String(this.recetaVer.utensilio));
      $('#detalle17').text(String(this.recetaVer.tip));
      $('#detalle18').attr('src', String(this.recetaVer.video));

      $('#custom-content-below-home-tab').addClass('active');
      $('#custom-content-below-home').addClass('show');
      $('#custom-content-below-home').addClass('active');
      $('#custom-content-below-profile-tab').removeClass('active');
      $('#custom-content-below-messages-tab').removeClass('active');
      $('#custom-content-below-settings-tab').removeClass('active');
      $('#custom-content-below-settings1-tab').removeClass('active');
      $('#custom-content-below-settings2-tab').removeClass('active');
      $('#custom-content-below-profile').removeClass('show');
      $('#custom-content-below-messages').removeClass('show');
      $('#custom-content-below-settings').removeClass('show');
      $('#custom-content-below-settings1').removeClass('show');
      $('#custom-content-below-settings2').removeClass('show');
      $('#custom-content-below-profile').removeClass('active');
      $('#custom-content-below-messages').removeClass('active');
      $('#custom-content-below-settings').removeClass('active');
      $('#custom-content-below-settings1').removeClass('active');
      $('#custom-content-below-settings2').removeClass('active');
    });
  }

  editar(val: any, val2: any) {
    const idReceta = val;
    const estado = val2;
<<<<<<< HEAD
    if (estado != 2) {
      this.recetaService.getRecetaxId(idReceta).subscribe((recetaEditar) => {
        this.recetaEditar = recetaEditar;
        $('#idRegistrar').trigger('reset');
        $('#idCodReceta').val(idReceta);
        $('#idnombre').removeClass('error').next('label.error').remove();
        $('#idtiempoprep').removeClass('error').next('label.error').remove();
        $('#idingredientes').removeClass('error').next('label.error').remove();
        $('#idintrucciones').removeClass('error').next('label.error').remove();
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
        $('#errorimagen').text();

        $('#idnombre').val(String(this.recetaEditar.nombre_platillo));
        $('#idtiempoprep').val(String(this.recetaEditar.tiempo_preparacion));
        $('#idporciones').val(String(this.recetaEditar.porcion));
        $('#iddificultad').val(
          String(this.recetaEditar.dificultad?.id_dificultad)
        );

        if (this.recetaEditar.estiloPlato?.estado == 2) {
          $('#idestiloplato').val(-1);
        } else {
          $('#idestiloplato').val(
            String(this.recetaEditar.estiloPlato?.id_estilo_plato)
          );
        }
=======
    /*if (estado != 2) {*/
      this.recetaService.getRecetaxId(idReceta).subscribe(
        (recetaEditar) => {
          this.recetaEditar = recetaEditar;
          $("#idRegistrar").trigger('reset');
          $("#idCodReceta").val(idReceta);
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
          $("#errorimagen").text();


          $("#idnombre").val(String(this.recetaEditar.nombre_platillo));
          $("#idtiempoprep").val(String(this.recetaEditar.tiempo_preparacion));
          $("#idporciones").val(String(this.recetaEditar.porcion));
          $("#iddificultad").val(String(this.recetaEditar.dificultad?.id_dificultad));

          if (this.recetaEditar.estiloPlato?.estado == 2) {
            $("#idestiloplato").val(-1)
          }
          else {
            $("#idestiloplato").val(String(this.recetaEditar.estiloPlato?.id_estilo_plato));
          }

          if (this.recetaEditar.dieta?.estado == 2) {
            $("#iddieta").val(-1)
          }
          else {
            $("#iddieta").val(String(this.recetaEditar.dieta?.id_dieta));
          }
          if (this.recetaEditar.tipoComida?.estado == 2) {
            $("#idtipocomida").val(-1)
          }
          else {
            $("#idtipocomida").val(String(this.recetaEditar.tipoComida?.id_tipo_comida));
          }
          if (this.recetaEditar.ocasion?.estado == 2) {
            $("#idocasion").val(-1)
          }
          else {
            $("#idocasion").val(String(this.recetaEditar.ocasion?.id_ocasion));
          }


          $("#idingredientes").val(String(this.recetaEditar.ingrediente));
          $("#idintrucciones").val(String(this.recetaEditar.instruccion));
          $("#idutensilios").val(String(this.recetaEditar.utensilio));
          $("#idtips").val(String(this.recetaEditar.tip));
          $("#idvideo").val(String(this.recetaEditar.video));
          $('#previews').empty();
          $("#previews").append("<div class='row mt-2 dz-image-preview'><div class='col-auto'><span class='preview'><img" +
            " src='" + this.recetaEditar.fotoBase64 + "' alt='Foto-de-receta-guardada' style='width:350px; height:200px'></span></div>" +
            "<div class='col d-flex align-items-center'><p clas='mb-0'><span class='lead'>Foto-de-receta-" + idReceta + ".jpg</span></p>" +
            "</div></div></div>");

>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930

        if (this.recetaEditar.dieta?.estado == 2) {
          $('#iddieta').val(-1);
        } else {
          $('#iddieta').val(String(this.recetaEditar.dieta?.id_dieta));
        }
        if (this.recetaEditar.tipoComida?.estado == 2) {
          $('#idtipocomida').val(-1);
        } else {
          $('#idtipocomida').val(
            String(this.recetaEditar.tipoComida?.id_tipo_comida)
          );
        }
        if (this.recetaEditar.ocasion?.estado == 2) {
          $('#idocasion').val(-1);
        } else {
          $('#idocasion').val(String(this.recetaEditar.ocasion?.id_ocasion));
        }

<<<<<<< HEAD
        $('#idingredientes').val(String(this.recetaEditar.ingrediente));
        $('#idintrucciones').val(String(this.recetaEditar.instruccion));
        $('#idutensilios').val(String(this.recetaEditar.utensilio));
        $('#idtips').val(String(this.recetaEditar.tip));
        $('#idvideo').val(String(this.recetaEditar.video));
        $('#previews').empty();
        $('#previews').append(
          "<div class='row mt-2 dz-image-preview'><div class='col-auto'><span class='preview'><img" +
            " src='" +
            this.recetaEditar.fotoBase64 +
            "' alt='Foto-de-receta-guardada' style='width:350px; height:200px'></span></div>" +
            "<div class='col d-flex align-items-center'><p clas='mb-0'><span class='lead'>Foto-de-receta-" +
            idReceta +
            '.jpg</span></p>' +
            '</div></div></div>'
        );
      });
    } else {
=======
        });
   /* }
    else {
>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
      Swal.fire({
        title: 'La receta está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
<<<<<<< HEAD
      });
    }
  }
=======
      })
    }*/
  }



  
publicar(val: any) {
  const idReceta = val;
  this.recetaService.getRecetaxId(idReceta).subscribe(
    (recetaEliminar) => {
      this.recetaEliminar = recetaEliminar;
    });
    Swal.fire({
      title: '¿Seguro que deseas publicar receta?',
      text: 'Se publicará receta y sus microondas.',
      icon: "warning",
      closeOnClickOutside: false,
      confirmButtonText: 'Sí',
      showCancelButton: true,
      cancelButtonText: "No",
      dangerMode: true,
      confirmButtonColor: '#780116',
    }).then((result: { [x: string]: any; }) => {
      if (result['isConfirmed']) {
        this.recetaEliminar.estado = 1;
        this.recetaEliminar.usuario!.id_usuario= parseInt(this.tokenService.getId());

        this.recetaService.actualizarReceta(this.recetaEliminar).subscribe(
          response => {
            Swal.fire({
              title: '<br> Se está publicando receta.',
              text: 'Procesando datos...',
              width: '500px',
              didOpen: () => {
                Swal.showLoading()
              },
              buttons: false,
              timerProgressBar: true,
              closeOnClickOutside: false,
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
            })
              .then(function () {
                Swal.fire({
                  title: 'Se publicó receta.',
                  text: '',
                  icon: 'success',
                  buttons: false,
                  closeOnClickOutside: false,
                  timer: 3500,
                  showCancelButton: false,
                  showConfirmButton: false,

                })
                  .then(function () {
                    window.location.href = "http://localhost:4200/receta";
                  })
              })
          },
            error => {
              console.log(error);
              Swal.fire({
                title: 'Error al publicar receta.',
                text: '',
                icon: 'error',
                confirmButtonColor: '#780116',
                showCloseButton: true,
              })
            },
        );

      } else {
        Swal.fire({
          title: 'Se canceló publicación.',
          text: '',
          icon: 'error',
          confirmButtonColor: '#780116',
          showCloseButton: true,
        })
      }
    })


}

>>>>>>> 7c4572fdd0eac34f8cdda75a1d5b8d59e882e930
}
