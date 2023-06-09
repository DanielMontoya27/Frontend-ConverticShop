import { Component } from '@angular/core';
import { Producto } from '../../interface/producto-interface';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent {
  termino: string = "";
  hayError: boolean = false;
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.productoService.buscarProductoHombre(this.termino)
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
