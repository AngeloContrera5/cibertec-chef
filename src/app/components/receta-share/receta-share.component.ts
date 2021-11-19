import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import * as $ from 'jquery';
import { Receta } from 'src/app/models/receta.model';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-receta-share',
  templateUrl: './receta-share.component.html',
  styleUrls: ['./receta-share.component.css'],
})
export class RecetaShareComponent implements OnInit {
  idRece: number = 0;
  //recetaVer: Receta = {};
  receta: Receta = {};
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //traer parametro idProducto
    this.route.queryParams.subscribe((params) => {
      this.idRece = params['idReceta'];
      console.log(this.idRece);

      this.recetaService.getRecetaxId(this.idRece).subscribe(
        (receta) => {
          this.receta = receta;

          $('#detalle1').text(this.idRece);
          $('#detalle2').attr('src', this.receta.fotoBase64);
          $('#detalle3').text(String(this.receta.nombre_platillo));
          $('#detalle4').text(
            String(this.receta.tiempo_preparacion) + ' minuto(s)'
          );
          $('#detalle5').text(String(this.receta.porcion));
          $('#detalle6').text(String(this.receta.dificultad?.descripcion));
          $('#detalle7').text(String(this.receta.tipoComida?.nombre));
          $('#detalle8').text(String(this.receta.ocasion?.nombre));
          $('#detalle9').text(String(this.receta.dieta?.nombre));
          $('#detalle10').text(String(this.receta.estiloPlato?.nombre));
          $('#detalle11').text(
            String(
              this.receta.usuario?.nombres +
                ' ' +
                this.receta.usuario?.apellidos
            )
          );
          $('#detalle12').text(
            String(
              formatDate(this.receta.fecha_registro!, 'dd/MM/yyyy', 'en-US')
            )
          );
          if (receta.fecha_actualiza == null) {
            $('#detalle13').text('No existe');
          } else {
            $('#detalle13').text(
              String(
                formatDate(this.receta.fecha_actualiza!, 'dd/MM/yyyy', 'en-US')
              )
            );
          }

          $('#detalle14').text(String(this.receta.ingrediente));
          $('#detalle15').text(String(this.receta.instruccion));
          $('#detalle16').text(String(this.receta.utensilio));
          $('#detalle17').text(String(this.receta.tip));
          $('#detalle18').attr('src', String(this.receta.video));

          $('#custom-content-below-home-tab').addClass('active');
          $('#custom-content-below-home').addClass('show');
          $('#custom-content-below-home').addClass('active');
          $('#custom-content-below-profile-tab').removeClass('active');
          $('#custom-content-below-messages-tab').removeClass('active');
          $('#custom-content-below-settings-tab').removeClass('active');
          $('#custom-content-below-settings1-tab').removeClass('active');
          $('#custom-content-below-settings2-tab').removeClass('active');
          $('#custom-content-below-settings3-tab').removeClass('active');
          $('#custom-content-below-profile').removeClass('show');
          $('#custom-content-below-messages').removeClass('show');
          $('#custom-content-below-settings').removeClass('show');
          $('#custom-content-below-settings1').removeClass('show');
          $('#custom-content-below-settings2').removeClass('show');
          $('#custom-content-below-settings3').removeClass('show');
          $('#custom-content-below-profile').removeClass('active');
          $('#custom-content-below-messages').removeClass('active');
          $('#custom-content-below-settings').removeClass('active');
          $('#custom-content-below-settings1').removeClass('active');
          $('#custom-content-below-settings2').removeClass('active');
          $('#custom-content-below-settings3').removeClass('active');
          if (this.receta.estado == 3) {
            this.router.navigate(['/404']);
          }
        },
        (error) => {
          this.router.navigate(['/404']);
        }
      );
    });

    if (!this.route.snapshot.queryParams['idReceta']) {
      this.router.navigate(['/404']);
    }

    //$.getScript('assets/dist/js/file.js');
    //$.getScript('assets/dist/js/datatable.js');
    //$.getScript('assets/build/js/receta.js');
  }

  // ver(val: any) {
  //   const idReceta = val;
  //   this.recetaService.getRecetaxId(idReceta).subscribe((recetaVer) => {
  //     this.recetaVer = recetaVer;
  //     $('#detalle1').text(idReceta);
  //     $('#detalle2').attr('src', this.recetaVer.fotoBase64);
  //     $('#detalle3').text(String(this.recetaVer.nombre_platillo));
  //     $('#detalle4').text(
  //       String(this.recetaVer.tiempo_preparacion) + ' minuto(s)'
  //     );
  //     $('#detalle5').text(String(this.recetaVer.porcion));
  //     $('#detalle6').text(String(this.recetaVer.dificultad?.descripcion));
  //     $('#detalle7').text(String(this.recetaVer.tipoComida?.nombre));
  //     $('#detalle8').text(String(this.recetaVer.ocasion?.nombre));
  //     $('#detalle9').text(String(this.recetaVer.dieta?.nombre));
  //     $('#detalle10').text(String(this.recetaVer.estiloPlato?.nombre));
  //     $('#detalle11').text(
  //       String(
  //         this.recetaVer.usuario?.nombres +
  //           ' ' +
  //           this.recetaVer.usuario?.apellidos
  //       )
  //     );
  //     $('#detalle12').text(
  //       String(
  //         formatDate(this.recetaVer.fecha_registro!, 'dd/MM/yyyy', 'en-US')
  //       )
  //     );
  //     if (recetaVer.fecha_actualiza == null) {
  //       $('#detalle13').text('No existe');
  //     } else {
  //       $('#detalle13').text(
  //         String(
  //           formatDate(this.recetaVer.fecha_actualiza!, 'dd/MM/yyyy', 'en-US')
  //         )
  //       );
  //     }

  //     $('#detalle14').text(String(this.recetaVer.ingrediente));
  //     $('#detalle15').text(String(this.recetaVer.instruccion));
  //     $('#detalle16').text(String(this.recetaVer.utensilio));
  //     $('#detalle17').text(String(this.recetaVer.tip));
  //     $('#detalle18').attr('src', String(this.recetaVer.video));

  //     $('#custom-content-below-home-tab').addClass('active');
  //     $('#custom-content-below-home').addClass('show');
  //     $('#custom-content-below-home').addClass('active');
  //     $('#custom-content-below-profile-tab').removeClass('active');
  //     $('#custom-content-below-messages-tab').removeClass('active');
  //     $('#custom-content-below-settings-tab').removeClass('active');
  //     $('#custom-content-below-settings1-tab').removeClass('active');
  //     $('#custom-content-below-settings2-tab').removeClass('active');
  //     $('#custom-content-below-settings3-tab').removeClass('active');
  //     $('#custom-content-below-profile').removeClass('show');
  //     $('#custom-content-below-messages').removeClass('show');
  //     $('#custom-content-below-settings').removeClass('show');
  //     $('#custom-content-below-settings1').removeClass('show');
  //     $('#custom-content-below-settings2').removeClass('show');
  //     $('#custom-content-below-settings3').removeClass('show');
  //     $('#custom-content-below-profile').removeClass('active');
  //     $('#custom-content-below-messages').removeClass('active');
  //     $('#custom-content-below-settings').removeClass('active');
  //     $('#custom-content-below-settings1').removeClass('active');
  //     $('#custom-content-below-settings2').removeClass('active');
  //     $('#custom-content-below-settings3').removeClass('active');
  //   });
  // }
}
