import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(
    public service: EmployeeService,
    private firestore: AngularFirestore
  ) {}
  // when service is private doesnt work

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      code: '',
      mobile: '',
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection('employees').add(data);
    this.resetForm(form);
  }
}
