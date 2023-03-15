import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioServicio/usuario.service';


@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroComponent implements OnInit {

  id_tipo_documento: number = 0;
  numero_documento: string = "";
  nombres: string = "";
  apellidos: string = "";
  email: string = "";
  password: string = "";
  passwordConfirmation: string = "";
  regex: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;


  constructor(private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registrar() {

    if (this.password.length >= 5) {
      if (this.regex.test(this.password)) {
        if(this.password == this.passwordConfirmation) {
          this.usuarioService.registeruser(this.id_tipo_documento, this.numero_documento,
            this.nombres, this.apellidos, this.email, this.password).subscribe(result => {
              if (result) {
                this.router.navigate(['login']);
              } else {
                alert("Uno o más datos son invalidos");
              }});
        }else{
          alert("La contraseña y la confirmación de contraseña no coincide");
        }
      }else{
        alert("La contraseña debe tener mayusculas, minusculas y numeros")
      }
    }else{
      alert("La contraseña debe tener minimo 5 caracteres")
    }
  }





  // this.usuarioService.registeruser(this.id_tipo_documento, this.numero_documento, this.nombres, this.apellidos, this.email, this.password, this.password_confirmation).subscribe(result => {

  //   if(result){
  //     this.router.navigate(['login']);
  //   }else {
  //     alert ("El usuario ya se encuentra registrado")}
  // });
}
