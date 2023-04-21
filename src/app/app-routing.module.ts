import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EnlaceBlogComponent } from './enlace-blog/enlace-blog.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { Articulos2Component } from './articulos2/articulos2.component';

const routes: Routes = [
  { path:"", component:CarruselComponent},
  { path: "Articulo", component:ArticulosComponent},
  { path: "Carrusel", component:CarruselComponent},
  { path: "Enlace", component:EnlaceBlogComponent},
  { path: "FormularioContacto", component:FormularioContactoComponent},
  { path: "Habilidades", component:HabilidadesComponent},
  { path: "Articulo2", component:Articulos2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
