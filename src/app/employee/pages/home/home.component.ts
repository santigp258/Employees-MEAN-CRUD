import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../interfaces/employee.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.getEmployee();
  }

  ngOnInit(): void {
  }

  getEmployee(){
    this.employeeService.getEmployees()
    .subscribe(employees =>{
      //show employees
      this.employees = employees
    });
  }

  save(event: Employee){
    //update employee
   if(this.router.url.includes('edit')){
    this.activatedRoute.params.pipe(
      switchMap(({_id})=> this.employeeService.updateEmployee(_id, event))
    ).subscribe(
      resp =>{
        Swal.fire(`Updated successfully!`, '', 'success')
        this.getEmployee();
      }
    )
   }else{
     //save employee
    this.employeeService.saveEmployee(event)
    .subscribe(
      res =>{
        Swal.fire(`Saved successfully!`, '', 'success')
        this.getEmployee();
      }
    );
   }
  }


  delete(id: string){
    this.employeeService.deleteEmployee(id)
    .subscribe(
      res =>{
        this.getEmployee();
        if(this.router.url.includes(id)){
          this.router.navigate(['/employee'])
        }
      }
    );
  }
}
