import { Component } from '@angular/core';
import { Producto } from '../../interface/producto-interface';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent {
  termino: string = "";
  hayError: boolean = false;
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.productoService.buscarProductoMujer(this.termino)
      .subscribe((productos) => {
        console.log(productos);
        this.productos = productos;

      }, (error) => {
        this.hayError = true;
        this.productos = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias

  }

}
