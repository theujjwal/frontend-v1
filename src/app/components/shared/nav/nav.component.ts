import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  // public isLoggedIn: Boolean = false;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  login() {
    // for inputs -> empid and password
     this.empService.login('subsa', 'abcd1234');
  }

  logout() {
    this.empService.logout();
  }

  isLoggedIn():Boolean {
    return this.empService.isLoggedIn();
  }

  getEmpId(): String {
    return this.empService.getEmpId();
  }
}
