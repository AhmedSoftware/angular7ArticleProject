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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { LoginService } from './login/login.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AuthCuardService } from './login/auth-cuard.service';
import { HttpClientModule} from '@angular/common/http'







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
    AppRoutingModule,
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
