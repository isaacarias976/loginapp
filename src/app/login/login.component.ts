import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from './service-login.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private userService:ServiceLoginService,private router:Router) { }

  ngOnInit() {
  }

  login():void{
    if(this.user.username){
      if(this.user.password){
        this.userService.auth(this.user).subscribe(e=>{
          localStorage.setItem('usuario',e.username);
          localStorage.setItem('rol',e.rol);
          this.router.navigate(['/home']);
        });
      }else{
        alert("La contraseña es requerida");
      }
    }else{
      alert("El nombre de usuario es requerido");
    }
  }

}
