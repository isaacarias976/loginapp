import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  user:User = new User();
  login:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.validateSession();
  }

  logOut():void{
    localStorage.setItem('usuario',null);
    localStorage.setItem('rol',null);
    this.validateSession();
  }

  validateSession():void{
    let userTemp : any = localStorage.getItem('usuario');
    if(userTemp){
      if(userTemp !== "null"){
        this.user.username = userTemp;
        this.user.rol = localStorage.getItem("rol");
      }else{
        this.router.navigate(['/login']);
      }
    }
  }

}
