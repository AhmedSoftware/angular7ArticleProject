import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCuardService } from './login/auth-cuard.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { LoginComponent } from './login/login.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';


const routes:Routes=[
  {path:'appareils',canActivate:[AuthCuardService] ,component:AppareilViewComponent},
  {path:'login',component:LoginComponent},
  {path:'appareils/:id',canActivate:[AuthCuardService],component:SingleAppareilComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
