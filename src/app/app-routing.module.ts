import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employeeDetails/employee-details.component';
import { DashboardComponent } from './Dashboard/dashboard.component';

const routes: Routes = [

  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'employeeDetails',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
