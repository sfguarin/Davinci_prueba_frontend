import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//vinculación con direccion de componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRUDComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

//modulos para formularios conexión de la interfaz con el .ts
import { FormsModule } from "@angular/forms";
//modulo para comunicarme con mi api, consumir api
import { HttpClientModule } from "@angular/common/http";


import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    HomeComponent,
    LoginComponent
  ],
  //importación de modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }