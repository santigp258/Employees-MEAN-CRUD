import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee.interface';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = environment.baseUrL;
  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    //url provide in proxy: proxy.config.json
    return this.http.get<Employee[]>(`${this.baseUrl}/api/employees`)
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/api/employees/${id}`);
  }

  saveEmployee(body: Employee){
    return this.http.post(`${this.baseUrl}/api/employees`, body);
  }


  updateEmployee(id:string, body: Employee){
    return this.http.put(`${this.baseUrl}/api/employees/${id}`, body);
  }

  deleteEmployee(id: string){
    return this.http.delete(`${this.baseUrl}/api/employees/${id}`);
  }
}
