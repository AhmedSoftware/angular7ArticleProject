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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { LoginService } from './login/login.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AuthCuardService } from './login/auth-cuard.service';
import { HttpClientModule} from '@angular/common/http'


const appRoutes:Routes=[
  {path:'appareils',canActivate:[AuthCuardService] ,component:AppareilViewComponent},
  {path:'login',component:LoginComponent},
  {path:'appareils/:id',canActivate:[AuthCuardService],component:SingleAppareilComponent},
  {path:'',component:LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    LoginComponent,
    AppareilViewComponent,
    HeaderComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DragDropModule
  ],
  providers: [
    AppareilService,
    LoginService,
    AuthCuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
