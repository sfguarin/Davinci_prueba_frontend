import { Component, OnInit } from '@angular/core';
//importación de modulo que me permite comunicarme con mi api para hacer las peticiones
import { UserService } from "../../services/user.service";
//importación de mi modelo para la recepción de datos de mi usuario
import { UserInterface } from "../../models/user-interface";




@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  uploadedFiles: Array <File>;

  //inyección de modulo para comunicarme con mi api
  constructor(public crudService: UserService) {
    this.uploadedFiles = [];
   }

  //inicialización de mi crud, aparece antes de realizar cualquier acción
  ngOnInit(): void {
    //llamado a mi servicio, con el envio de parametros y subscribe pendiente de cambios
    this.crudService.GetUsers().subscribe((res:any) => {
      this.Usuarios = res;
    })

  }

  //Inicialización de mis variables
  code: string = "";
  nombre: string = "";
  apellido: string = "";
  telefono: string = "";
  direccion: string = "";
  campana: string = "";
  //Almacenamiento de usuarios de mi base de datos con su modelo
  Usuarios: UserInterface[] = [];

  onUpload(){
    let formData = new FormData;
    console.log(this.uploadedFiles);
    for (let i=0; i<this.uploadedFiles.length; i++){
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    console.log("aqui",formData);

    this.crudService.uploadFile(formData).subscribe((res)=>{
      console.log("Response",res);
    })
  }

  onFileChange(e:any){
    this.uploadedFiles = e.target.files
  }


  //Añadir usuario
  addUser() {
    //llamado a mi servicio, con el envio de parametros y subscribe pendiente de cambios
    this.crudService.InsertUser(this.nombre, this.apellido, this.telefono, this.direccion, this.campana)
      .subscribe((res: any) => {
        this.Usuarios = res;
        this.code = "";
        this.nombre = "";
        this.apellido = "";
        this.telefono = "";
        this.direccion = "";
        this.campana = "";
      }
    ) 

    window.location.reload();

  }

  //obtener data de un usuario para refrescar cuando se quiere editar
  getDataUser(code:any, nombre:any, apellido:any, telefono:any, direccion:any, campana:any) {
    this.code = code;
    this.nombre = nombre;
    this.apellido = apellido;  
    this.telefono = telefono;
    this.direccion = direccion;
    this.campana = campana;
  }

  //Actualizar un usuario
  updateUser() {
    //llamado a mi servicio, con el envio de parametros y subscribe pendiente de cambios
    this.crudService.UpdateUser(this.code, this.nombre, this.apellido, this.telefono, this.direccion, this.campana)
      .subscribe((res: any) => {
        this.Usuarios = res;
        console.log(res);   
        this.code = "";
        this.nombre = "";
        this.apellido = "";
        this.telefono = "";
        this.direccion = "";
        this.campana = "";
        console.log(this.code);
      })

    window.location.reload();

  }

  //Eliminar un usuario
  deleteUser(code: any) {
    this.crudService.DeleteUser(code).subscribe((res: any) => {
      this.Usuarios = res;
    })

    window.location.reload();

  }

  // //Cerrar sesión
  // CerrarSesion() {
  //   this.crudService.logout();
  // }
}