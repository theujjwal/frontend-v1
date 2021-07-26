import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  username: String
  password: String

  constructor(private empservice: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.model)
    var v = this.empservice.login(this.model.username,this.model.password)
    if(v){this.router.navigate(['/shop']);}
  }

}
