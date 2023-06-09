import { Injectable } from "@angular/core";
import {HttpHeaders,HttpClient,HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Router } from "@angular/router";
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Employee} from 'src/app/shared/models/employee.model';


@Injectable({providedIn:'root'})
export class EmployeeService{

    constructor(        
        private httpClient:HttpClient
    ){}

   
    getEmployeeDetails():Observable<Employee[]>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
    
        return this.httpClient.get<Employee[]>(environment.apiUrl +'/empdetails/getallempdetails',httpOptions)
    }

    verifyLogin():Boolean{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
        return true;
        //return this.httpClient.get<Boolean>(environment.apiUrl +'/verify-login',httpOptions)
    }
}