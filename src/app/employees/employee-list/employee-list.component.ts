import { Employee } from './../../shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe((actionArray) => {
      this.list = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as Employee),
        };
      });
    });
  }
  }

