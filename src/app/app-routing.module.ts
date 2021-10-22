import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RecetaComponent } from './components/receta/receta.component';
import { LoginComponent } from './components/login/login.component';
import { OcasionComponent } from './components/ocasion/ocasion.component';



const routes: Routes = [
 
  {path:"home",component: HomeComponent},
  {path:"usuario",component: UsuarioComponent},
  {path:"receta",component: RecetaComponent},
  {path:"ocasion",component: OcasionComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
