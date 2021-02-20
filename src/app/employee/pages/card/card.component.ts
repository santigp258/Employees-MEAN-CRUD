import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input('employees') employees: Employee[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  edit(id: string){
    console.log(id);
  }
}
