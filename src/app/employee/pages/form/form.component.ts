import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  @Output() onSave = new EventEmitter();

  visibility: boolean = false;
  idEmployee: string = '';
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    position: ['', [Validators.required, Validators.minLength(4)]],
    office: ['', [Validators.required, Validators.minLength(4)]],
    salary: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRouter.params
        .pipe(
          switchMap(({ id }) => this.employeeService.getEmployeeById(id)) //retornar id
        )
        .subscribe(({ _id, __v, ...res }) => {
          //save neccesary elements in res object
          this.myForm.setValue(res);
          this.idEmployee = _id;
        });
      this.visibility = true;
    }
  }

  validateFields(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    //validation
    if (this.myForm.invalid) {
      return;
    }
    this.onSave.emit(this.myForm.value);
    this.myForm.reset();
  }

  update() {
    //validation
    if (this.myForm.invalid) {
      return;
    }
    this.onSave.emit(this.myForm.value);
  }
}
