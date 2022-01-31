import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Vinculación con rutas de componentes
import { CRUDComponent } from "./components/crud/crud.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

//implementación de rutas
const routes: Routes = [
  {
    //Componente HOME
    path: '',
    component: HomeComponent
  },
  {
    //Componente CRUD
    path: 'crud',
    component: CRUDComponent
  },
  {
    //Componente login
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
