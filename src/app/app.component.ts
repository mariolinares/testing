import { CommonComponent } from './components/common/common.component';
import { UsersService } from './services/users.service';
import { User } from './models/user.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends CommonComponent implements OnInit {

  users: User[] = [];
  peliculas: any[] = [];

  constructor(private usersService: UsersService){
    super()
  }

  ngOnInit(){
    this.getUser();
    this.multiplicar(10)
    this.multiplicar(23)
    this.comprobarPrecio(5)
  }

  par(num: number): boolean {
    return num % 2 === 0 ? true : false
  }

  getUser(){
    this.usersService.getAll().subscribe(users => {
      this.users = users;
      console.log(this.users);
    })
  }




  getMessage(){
    return 'Hola'
  }

  getAdios(){
    return 'Adios'
  }

  obtenerListado(){
    this.getName();
  }

  getName(){
    this.getApellido('Linares')
  }

  getApellido(apellido){
    if(apellido === 'Linares'){
      return 'Linares Parra'
    }
    return this.multiplicar(2)
  }



  comprobarPrecio(n){
    switch (n) {
      case 0:
        return 'El kilogramo cuesta 0.69€.';
      case 1:
        return 'El kilogramo cuesta 0.52€.';
      case 2:
        return 'El kilogramo cuesta 0.28€.';
      default:
        return
    }
  }
}
