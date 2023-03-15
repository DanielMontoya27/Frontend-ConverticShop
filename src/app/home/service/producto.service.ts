import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl: string = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  buscarProducto(termino: String): Observable<Producto[]> {

    const url = `${this.apiUrl}/${termino}`;
    return this.http.get<Producto[]>(url);

  }

  buscarProductoHombre(termino: String): Observable<Producto[]> {

    const url = `${this.apiUrl}/hombre/${termino}`;
    return this.http.get<Producto[]>(url);

  }

  buscarProductoMujer(termino: String): Observable<Producto[]> {

    const url = `${this.apiUrl}/mujer/${termino}`;
    return this.http.get<Producto[]>(url);

  }
}
