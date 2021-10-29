import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RecetaComponent } from './components/receta/receta.component';
import { LoginComponent } from './components/login/login.component';
import { OcasionComponent } from './components/ocasion/ocasion.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { EstiloPlatoComponent } from './components/estilo-plato/estilo-plato.component';
import { TipoComidaComponent } from './components/tipo-comida/tipo-comida.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { MicroondasComponent } from './components/microondas/microondas.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [VigilanteGuard] },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [VigilanteGuard],
  },
  { path: 'receta', component: RecetaComponent, canActivate: [VigilanteGuard] },
  {
    path: 'ocasion',
    component: OcasionComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'estilo-plato',
    component: EstiloPlatoComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'tipo-comida',
    component: TipoComidaComponent,
    canActivate: [VigilanteGuard],
  },
  { path: 'dieta', component: DietaComponent, canActivate: [VigilanteGuard] },
  {
    path: 'encuesta',
    component: EncuestaComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'microondas',
    component: MicroondasComponent,
    canActivate: [VigilanteGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
