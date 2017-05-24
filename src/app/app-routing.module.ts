import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { MapComponent } from "./map/map/map.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { NotFoundComponent } from "./layouts/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'signup',
        component: SignupComponent
      }, {
        path: 'forgot',
        component: ForgotComponent
      }
    ]
  }, {
    path: 'map/:id',
    component: MapComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
