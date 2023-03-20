import { Component } from "@angular/core";
import { Employee } from "../shared/models/employee.model";
import { EmployeeService } from "../shared/services/employee.service";

@Component({
    selector:"employee-details",
    templateUrl:"./employee-details.component.html",
    styleUrls:['./employee-details.component.scss']
})

export class EmployeeDetailsComponent{

    ColumnDefs = [  
        { headerName: 'Employee Id', field: 'empId', sortable: true, filter: false },  
        { headerName: 'Employee Name', field: 'empName', sortable: true, filter: false },  
        { headerName: 'E-Mail', field: 'email', sortable: true, filter: true },  
        { headerName: 'Mobile Number', field: 'mobile', sortable: true, filter: false },
        { headerName: 'Designation', field: 'designation', sortable: true, filter: false },  
        { headerName: 'Band', field: 'band', sortable: true, filter: false }
    
      ];

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