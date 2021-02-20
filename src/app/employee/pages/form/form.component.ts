import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {

  @Output() onSave = new EventEmitter();

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    position: ['', [Validators.required, Validators.minLength(4)]],
    office: ['', [Validators.required, Validators.minLength(4)]],
    salary: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder, private employee: EmployeeService) {}

  ngOnInit(): void {}

  validateFields(field: string) {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  save(){
   this.onSave.emit(this.myForm.value);
  }
}
