import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./login/login.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ContenidoModule { }
