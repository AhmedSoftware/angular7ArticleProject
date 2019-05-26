import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './appareil/appareil.service';
import { LoginComponent } from './login/login.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { HeaderComponent } from './header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';


const appRoutes:Routes=[
  {path:'appareils',component:AppareilViewComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:AppareilViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    LoginComponent,
    AppareilViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
