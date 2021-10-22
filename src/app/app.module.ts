import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RecetaComponent } from './components/receta/receta.component';
import { LoginComponent } from './components/login/login.component';
import { OcasionComponent } from './components/ocasion/ocasion.component';
import { EstiloPlatoComponent } from './components/estilo-plato/estilo-plato.component';
import { TipoComidaComponent } from './components/tipo-comida/tipo-comida.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    RecetaComponent,
    LoginComponent,
    OcasionComponent,
    EstiloPlatoComponent,
    TipoComidaComponent,
    DietaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
