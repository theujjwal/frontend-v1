import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  // public isLoggedIn: Boolean = false;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.empService.logout();
    this.router.navigate(['/shop']);
  }

  isLoggedIn(): Boolean {
    return this.empService.isLoggedIn();
  }

  getEmpId(): String {
    return this.empService.getEmpId();
  }
}
