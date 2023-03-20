import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employeeDetails/employee-details.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import {LoginComponentComponent} from './login-component/login-component.component';

const routes: Routes = [

  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'employeeDetails',component:EmployeeDetailsComponent},
  {path:'login',component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
