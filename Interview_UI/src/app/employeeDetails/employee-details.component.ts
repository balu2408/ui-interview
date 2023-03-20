import { Component } from "@angular/core";
import { Employee } from "../shared/models/employee.model";
import { EmployeeService } from "../shared/services/employee.service";

@Component({
    selector:"employee-details",
    templateUrl:"./employee-details.component.html",
    styleUrls:['./employee-details.component.scss']
})

export class EmployeeDetailsComponent{

 

    employeeDetails : Employee[] = [];

    constructor(
        private employeeService:EmployeeService
    ){}

    ngOnInit(){
        this.employeeService.getEmployeeDetails().subscribe(res => {           
         this.employeeDetails = res;            
        });        
    }
}