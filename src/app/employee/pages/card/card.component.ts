import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input('employees') employees: Employee[] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(id: string, name: string){
    Swal.fire({
      title: `Are you sure remove ${name}?`,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.onDelete.emit(id);
        Swal.fire(`${name} has been eliminated`, '', 'success')
      }
    })
  }
}
