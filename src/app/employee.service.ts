import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private AUTH_URL: String = 'http://localhost:10111/auth';
  private OMS_URL: String = 'http://localhost:9999/offer-service';
  private EMS_URL: String = 'http://localhost:9090/employee-service';
  private PMS_URL: String = 'http://localhost:9090/points-service';

  private user: any = null;
  private jwtToken: String = null;
  private isEmpLoggedIn: Boolean = false;

  constructor(private http: HttpClient) { }

  login(empId: String, password: String): Boolean {
    console.log(this.jwtToken);
    this.http.post(this.AUTH_URL + '/authenticate',
      {
        'userName': empId,
        'password': password
      },
      {
        observe: 'response'
      }
    ).subscribe(response => {
      this.jwtToken = response.body["token"];
      console.log("Success response : " + this.jwtToken);
      this.user = { "empId": empId };
      this.isEmpLoggedIn = true;
    }, (err) => {
      alert('Can\'t login right now, prev req status code ' + err.status);
    });
    return this.isEmpLoggedIn;
  }

  logout(): Boolean {
    this.user = this.jwtToken = null;
    this.isEmpLoggedIn = false;
    return true;
  }

  getToken(): String {
    return this.jwtToken;
  }

  getEmpId(): String {
    return this.user.empId;
  }

  isLoggedIn(): Boolean {
    return this.isEmpLoggedIn;
  }
}
