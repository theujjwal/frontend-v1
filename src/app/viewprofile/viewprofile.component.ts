import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  employeeDetails : Employee = null;

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {

    this.empService.getEmpDetials().subscribe(
      (resp) => {
        console.log(resp.body);
        this.employeeDetails = resp.body;
      }, (err) => {
        console.warn(err);
      }
    )
  }



}
