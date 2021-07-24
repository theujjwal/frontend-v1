import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private user: any = null;
  private jwtToken: String = null;

  constructor(private http: HttpClient) { }

  login(empId: String, password: String): Boolean {

    this.http.post('http://localhost:8899/auth/authenticate',
      {
        "userName": 'subsa',
        "password": 'abcd1234'
      },
      { observe: 'response' }
    ).subscribe(response => {
      console.log("response : " + response.status);
      this.user = {"empId" : empId};
    }, (err) => {
      console.log("response " + err.status);
      alert('Invalid credential');
    }); 

    return true;
  }

  logout(): Boolean {
    return this.user = this.jwtToken = null;
  }

  getToken(): String {
    return this.jwtToken;
  }

  getEmpId(): String {
    return this.user.empId;
  }
}
