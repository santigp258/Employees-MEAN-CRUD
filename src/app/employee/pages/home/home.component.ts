import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { 
    this.getEmployee();
  }

  ngOnInit(): void {
  }

  getEmployee(){
    this.employeeService.getEmployees()
    .subscribe(employees =>{
      this.employees = employees
    });
  }

}
