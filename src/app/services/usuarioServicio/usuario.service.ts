import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private endPoint: HttpClient) { }

  loginuser(username: string, password: string) {
    return this.endPoint.post('http://localhost:8080/usuario/login', {"email": username, "password": password});
}

 registeruser( id_tipo_documento: number, numero_documento: string, nombres: string, apellidos: string, email: string, password: string){
  return this.endPoint.post('http://localhost:8080/usuario/save', {"idTipoDocumento": id_tipo_documento, "numeroDocumento": numero_documento, "nombres": nombres, "apellidos": apellidos, "email": email, "password": password});
}
}

