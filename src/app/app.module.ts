import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { EnlaceBlogComponent } from './enlace-blog/enlace-blog.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { Articulos2Component } from './articulos2/articulos2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HabilidadesComponent,
    EnlaceBlogComponent,
    FormularioContactoComponent,
    ArticulosComponent,
    Articulos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
