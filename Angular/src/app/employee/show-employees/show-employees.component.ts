import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { 

  }
  employees;

  ngOnInit() {
    this.employeeService.employees$.subscribe(
      data=>
      {
        this.employees=data;
        console.log(data);
      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message=>{
        console.log(message);
        alert(message);
      }

    );

        this.employeeService.getAllEmployees();
      }
    }
