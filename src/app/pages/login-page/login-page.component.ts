import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioServicio/usuario.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string  = "";
  password: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  login(){
    this.usuarioService.loginuser(this.email, this.password).subscribe(result => {
      if(result){
        this.router.navigate(['home']);
      }else {alert ("correo o contraseña invalida")}
    });
}

registrarse(){
  this.router.navigate(['registro'])
}

}
