import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonComponent } from './components/common/common.component';
import { StringsComponent } from './components/strings/strings.component';
import { ArraysComponent } from './components/arrays/arrays.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    StringsComponent,
    ArraysComponent,
    FuncionesComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
