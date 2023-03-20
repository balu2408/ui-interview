import { Component } from '@angular/core';
import { EmployeeService } from "../shared/services/employee.service";
import { Router } from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginValidation?: Boolean

  constructor(private router:Router,
    private employeeService:EmployeeService
){}
  loginVerify(){
    
   this.loginValidation = this.employeeService.verifyLogin()         
     
   if(this.loginValidation){
      this.router.navigate(['/dashboard'])
     } else {
       this.router.navigate(['/login'])
     }     
  }
}
