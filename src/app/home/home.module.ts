import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { ProductoBusquedaComponent } from './components/producto-busqueda/producto-busqueda.component';


@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    NavbarComponent,
    ProductoCardComponent,
    ProductoBusquedaComponent
  ],
  exports: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    NavbarComponent,
    ProductoBusquedaComponent,
    ProductoCardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
