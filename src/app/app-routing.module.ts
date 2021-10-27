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



const routes: Routes = [
 
  {path:"home",component: HomeComponent},
  {path:"usuario",component: UsuarioComponent},
  {path:"receta",component: RecetaComponent},
  {path:"ocasion",component: OcasionComponent},
  {path:"estilo-plato",component: EstiloPlatoComponent},
  {path:"tipo-comida",component: TipoComidaComponent},
  {path:"dieta",component: DietaComponent},
  {path:"encuesta",component: EncuestaComponent},
  {path:"microondas",component: MicroondasComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
