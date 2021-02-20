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

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(`/api/employees/${id}`);
  }

  saveEmployee(body: Employee){
    return this.http.post(`/api/employees`, body);
  }


  updateEmployee(id:string, body: Employee){
    return this.http.put(`/api/employees/${id}`, body);
  }

  deleteEmployee(id: string){
    return this.http.delete(`/api/employees/${id}`);
  }
}
