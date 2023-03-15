import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/producto-interface';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  termino: string="";
  hayError:boolean=false;
  productos: Producto[] =[];
 mostrarlogin: boolean= false;
 mostrarlogout: boolean= true;

  constructor(private productoService: ProductoService, private router: Router){}

  // buscar(){
  //   this.hayError = false;
  //   console.log(this.termino);
   
  //   this.productoService.buscarProducto (this.termino)
  //   .subscribe ((productos) =>{
  //     console.log(productos);
  //     this.productos= productos;

  //   }, (error) => {
  //     this.hayError = true;
  //     this.productos = [];
  //   });

  irAlogin(){
    this.router.navigate(['login']);
    this.mostrarlogin = true;
    this.mostrarlogout = false;
  }

  logout(){
    this.router.navigate(['']);
    this.mostrarlogout = true;
    this.mostrarlogin = false;
    }

  }

