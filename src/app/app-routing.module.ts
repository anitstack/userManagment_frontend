import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch:"full", redirectTo:'login'},
  { path: 'register', component:RegisterComponent},
  { path: 'dashboard', component: DashboardComponent },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
