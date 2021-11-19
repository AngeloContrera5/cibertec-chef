import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Rol } from 'src/app/models/rol.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { RolService } from 'src/app/services/rol.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var Swal: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  rol: Rol[] = [];
  listadoUsuarios: Usuario[] = [];
  allDataFetched: boolean = false;
  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario?: Usuario;

  nombres?: string;
  apellidos?: string;
  fecha_nacimiento?: Date;
  telefono?: string;
  correo?: string;

  usuario?: string;
  clave?: string;
  rolUsuario?: string;

  //roles: String[] = [];
  errMsj?: string;
  isLogged = false;

  fotoBase64: any;

  usuarioVer: Usuario = {};
  usuarioEliminar: Usuario = {};
  usuarioEditar: Usuario = {};

  //PARSEO PARA ACTUALIZACION DE FECHA DE NACIMIENTO
  fecha?: string;
  fechaActualizada?: Date;

  constructor(
    private rolService: RolService,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.rolService.listarRol().subscribe((rol) => (this.rol = rol));

    this.usuarioService.listaUsuario().subscribe((listadoUsuarios) => {
      (this.listadoUsuarios = listadoUsuarios), (this.allDataFetched = true);
    });
  }

  ngOnInit(): void {
    $.getScript('assets/dist/js/file1.js');
    $.getScript('assets/dist/js/datatable.js');
    $.getScript('assets/build/js/usuario.js');

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    if ($('#idCodUsuario').val() == '') {
      this.rolUsuario = String($('#idrol').val());
      console.log(this.rolUsuario);
      this.nuevoUsuario = new Usuario(
        this.nombres!,
        this.apellidos!,
        this.fecha_nacimiento!,
        this.telefono!,
        this.correo!,
        this.usuario!,
        this.clave!,
        (this.fotoBase64 = $('.preview img').attr('src')),
        this.rolUsuario!
      );
      this.authService.nuevo(this.nuevoUsuario).subscribe(
        //$('#idRegistrarUsuario').trigger('reset');
        Swal.fire({
          title: '<br> Se está registrando el usuario',
          text: 'Procesando datos...',
          width: '500px',
          didOpen: () => {
            Swal.showLoading();
          },
          imageHeight: 150,
          imageWidth: 150,
          buttons: false,
          timerProgressBar: true,
          closeOnClickOutside: false,
          timer: 10000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(function () {
          Swal.fire({
            title: 'El usuario se registró exitosamente.',
            text: '',
            icon: 'success',
            buttons: false,
            closeOnClickOutside: false,
            timer: 3500,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(function () {
            window.location.href = 'http://localhost:4200/usuario';
          });
        }),
        (error) => {
          console.log(error);
          Swal.fire({
            title: 'Error al registrar usuario.',
            text: '',
            icon: 'error',
            confirmButtonColor: '#780116',
            showCloseButton: true,
          });
        }
      );
    } else if ($('#idCodUsuario').val() != '') {
      this.usuarioService
        .getUsuarioxId(Number($('#idCodUsuario').val()))
        .subscribe((usuarioEditar) => {
          this.usuarioEditar = usuarioEditar;
          //console.log($('#idCodUsuario').val());
        });
      //alert('holaaaaaaaaaa');
      Swal.fire({
        title: '¿Seguro que deseas modificar usuario?',
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
          this.usuarioEditar!.nombres = String($('#idnombres').val());
          this.usuarioEditar!.apellidos = String($('#idapellidos').val());
          //PARSEO FECHA DE STRING A DATE Y LUEGO LE ASIGNO LA NUEVA FECHA A FECHA DE NACIMIENTO
          this.fecha = String($('#idfecnac').val());
          this.fechaActualizada = new Date(this.fecha!);
          this.usuarioEditar!.fecha_nacimiento = this.fechaActualizada;
          //FIN DEL PARSEO
          this.usuarioEditar!.telefono = String($('#idtelefono').val());
          this.usuarioEditar!.correo = String($('#idcorreo').val());
          this.usuarioEditar!.usuario = String($('#idusuario').val());
          this.usuarioEditar!.clave = String($('#idcontrasena').val());
          this.usuarioEditar!.rolUsuario = String($('#idrol').val());

          if (this.usuarioEditar!.fotoBase64 != $('.preview img').attr('src')) {
            this.usuarioEditar!.fotoBase64 = $('.preview img').attr('src');
          }

          this.usuarioService.actualizarUsuario(this.usuarioEditar).subscribe(
            Swal.fire({
              title: '<br> Se está modificando usuario.',
              text: 'Procesando datos...',
              width: '500px',
              didOpen: () => {
                Swal.showLoading();
              },
              imageHeight: 150,
              imageWidth: 150,
              buttons: false,
              timerProgressBar: true,
              closeOnClickOutside: false,
              timer: 10000,
              showCancelButton: false,
              showConfirmButton: false,
            }).then(function () {
              Swal.fire({
                title: 'Se modificó usuario exitosamente.',
                text: '',
                icon: 'success',
                buttons: false,
                closeOnClickOutside: false,
                timer: 3500,
                showCancelButton: false,
                showConfirmButton: false,
              }).then(function () {
                window.location.href = 'http://localhost:4200/usuario';
              });
            }),
            (error) => {
              console.log(error);
              Swal.fire({
                title: 'Error al modificar usuario.',
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

  ver(val: any) {
    const idUsuario = val;
    this.usuarioService.getUsuarioxId(idUsuario).subscribe((usuarioVer) => {
      this.usuarioVer = usuarioVer;
      $('#det1').text(idUsuario);
      $('#det2').text(this.usuarioVer.nombres!);
      $('#det3').text(this.usuarioVer.apellidos!);
      $('#det4').text(this.usuarioVer.telefono!);
      $('#det5').text(this.usuarioVer.correo!);
      $('#det6').text(
        String(
          formatDate(this.usuarioVer.fecha_nacimiento!, 'dd/MM/yyyy', 'en-US')
        )
      );
      $('#det7').text(this.usuarioVer.usuario!);
      //AQUI MUESTRA EL ROL
      $('#det8').text(this.usuarioVer.rolUsuario!);
      $('#det9').text(
        String(
          formatDate(this.usuarioVer.fecha_registro!, 'dd/MM/yyyy', 'en-US')
        )
      );
      $('#fotoDetalle').attr('src', this.usuarioVer.fotoBase64);
      //;

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

  elimina(val: any, val2: any) {
    const idUsuario = val;
    const estado = val2;
    this.usuarioService
      .getUsuarioxId(idUsuario)
      .subscribe((usuarioEliminar) => {
        this.usuarioEliminar = usuarioEliminar;
      });

    if (estado == 2) {
      Swal.fire({
        title: 'El usuario ya está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      });
    } else {
      Swal.fire({
        title: '¿Seguro que deseas modificar el usuario a estado inactivo?',
        text: 'Se modificará el usuario a estado inactivo',
        icon: 'warning',
        closeOnClickOutside: false,
        confirmButtonText: 'Sí',
        showCancelButton: true,
        cancelButtonText: 'No',
        dangerMode: true,
        confirmButtonColor: '#780116',
      }).then((result: { [x: string]: any }) => {
        if (result['isConfirmed']) {
          this.usuarioEliminar!.estado = 2;

          this.usuarioService
            .actualizarUsuario(this.usuarioEliminar!)
            .subscribe(
              (response) => {
                Swal.fire({
                  title: '<br> Se está modificando el usuario.',
                  text: 'Procesando datos...',
                  width: '500px',
                  didOpen: () => {
                    Swal.showLoading();
                  },
                  imageHeight: 150,
                  imageWidth: 150,
                  buttons: false,
                  timerProgressBar: true,
                  closeOnClickOutside: false,
                  timer: 10000,
                  showCancelButton: false,
                  showConfirmButton: false,
                }).then(function () {
                  Swal.fire({
                    title:
                      'Se modificó el usuario a estado inactivo exitosamente.',
                    text: '',
                    icon: 'success',
                    buttons: false,
                    closeOnClickOutside: false,
                    timer: 3500,
                    showCancelButton: false,
                    showConfirmButton: false,
                  }).then(function () {
                    window.location.href = 'http://localhost:4200/usuario';
                  });
                });
              },
              (error) => {
                console.log(error);
                Swal.fire({
                  title: 'Error al modificar el usuario.',
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

  editar(val: any, val2: any) {
    const idUsuario = val;
    const estado = val2;
    if (estado != 2) {
      this.usuarioService
        .getUsuarioxId(idUsuario)
        .subscribe((usuarioEditar) => {
          this.usuarioEditar = usuarioEditar;
          this.usuarioEditar.clave = 'XXXXXXXXXX';
          $('#idRegistrarUsuario').trigger('reset');
          $('#idCodUsuario').val(idUsuario);
          $('#idnombres').removeClass('error').next('label.error').remove();
          $('#idapellidos').removeClass('error').next('label.error').remove();
          $('#idfecnac').removeClass('error').next('label.error').remove();
          $('#idtelefono').removeClass('error').next('label.error').remove();
          $('#idcorreo').removeClass('error').next('label.error').remove();
          $('#idusuario').removeClass('error').next('label.error').remove();
          $('#idcontrasena').removeClass('error').next('label.error').remove();
          $('#elimFoto').click();
          $('#errorimagen').text();

          $('#idnombres').val(String(this.usuarioEditar.nombres));
          $('#idapellidos').val(String(this.usuarioEditar.apellidos));
          $('#idfecnac').val(String(this.usuarioEditar.fecha_nacimiento));
          $('#idtelefono').val(String(this.usuarioEditar.telefono));
          $('#idcorreo').val(String(this.usuarioEditar.correo));
          $('#idusuario').val(String(this.usuarioEditar.usuario));
          $('#idcontrasena').val(String(this.usuarioEditar.clave));
          $('#idrol').val(String(this.usuarioEditar.rolUsuario));
          $('#previews').empty();
          $('#previews').append(
            "<div class='row mt-2 dz-image-preview'><div class='col-auto'><span class='preview'><img" +
              " src='" +
              this.usuarioEditar.fotoBase64 +
              "' alt='Foto-de-usuario-guardada' style='width:200px; height:200px'></span></div>" +
              "<div class='col d-flex align-items-center'><p clas='mb-0'><span class='lead'>Foto-de-usuario-" +
              idUsuario +
              '.jpg</span></p>' +
              '</div></div></div>'
          );
        });
    } else {
      Swal.fire({
        title: 'El usuario está en estado inactivo.',
        text: '',
        icon: 'warning',
        confirmButtonColor: '#780116',
        showCloseButton: true,
      });
    }
  }
} ////FINNNNNNNNNNN
