import { Injectable } from '@angular/core';
//modulo para hacer consultas a mi api
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Para el arreglo de datos
import { map } from "rxjs/operators";

import { UserInterface } from '../models/user-interface';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inyección de modulos
  constructor(private http: HttpClient, private router: Router) { }

  //Inicialización de header, como se entrega la información
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  uploadFile(formData:FormData){
    const url = 'http://localhost:3000/addCSV';
    console.log(formData)
    return this.http.post(url, formData);
  }

  //GET obtener todos los usuarios mediante la api
  GetUsers() {
    //url para hacer consulta en mi api
    const url = "http://localhost:3000/getUsers";
    return this.http.get(url);
  }

  //POST crear nuevo usuario
  InsertUser(nombre: string, apellido: string, telefono: string, direccion: string, campana: string) {
    //URL de petición a mi api
    const url = "http://localhost:3000/addUser"

    //respuesta de mi api
    return this.http.post(
      url,
      //body que recibe
      {
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "campana": campana,

      },
      //envio de información tipo json
      { headers: this.headers }
      //arreglo de datos orden
    ).pipe(map(data => data));

  }

  //Actualizar usuario
  UpdateUser(code: string, nombre: string, apellido: string, telefono: string, direccion: string, campana: string) {
    //URL de petición a mi api
    const url = "http://localhost:3000/updateUser";

    //respuesta de mi api
    return this.http.put(
      url,
      {
        "code": code,
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "campana": campana,
      },
      //envio de mi información tipo json
      { headers: this.headers }
      //arreglo de mis datos orden
    ).pipe(map(data => data));
  }



  //Borrar usuario
  DeleteUser(code:any) {
    //URL de petición a mi api
    const url = "http://localhost:3000/deleteUser/" + code;
    //envio de petición
    return this.http.delete(url).pipe(map(data => data));
  }


  // //TODO: LOGIN
  // Login(nombre) {
  //   const url = "http://localhost:3000/signUp";

  //   return this.http.post(url,
  //     {
  //       "nombre": nombre
  //     }
  //     , { headers: this.headers })
  //     .pipe(map(data => data));
  // }

  // //TODO: SET CURRENT USER
  // setCurrentUser(user: UserInterface) {
  //   let user_string = JSON.stringify(user);
  //   localStorage.setItem('UsuarioLogueado', user_string);
  // }
  // //TODO: GET CURRENT USER
  // getCurrentUser() {
  //   let userCurrent = localStorage.getItem('UsuarioLogueado');
  //   if (!isNullOrUndefined(userCurrent)) {
  //     let user_json = JSON.parse(userCurrent);
  //     return user_json;
  //   } else {
  //     return null;
  //   }
  // }

  // //TODO: LOGOUT
  // logout() {
  //   localStorage.removeItem("UsuarioLogueado");
  //   this.router.navigate(['/login']);
  // }
}