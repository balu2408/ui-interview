import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"dashboard",
    templateUrl:"./dashboard.component.html",
    styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent{
    constructor(
        private router:Router
    ){}

    EmployeeDetails(){
        this.router.navigate(['/employeeDetails'])
    }
}