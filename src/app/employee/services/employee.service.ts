import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    //url provide in proxy: proxy.config.json
    return this.http.get<Employee[]>(`/api/employees`)
  }

}
