import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product'
import { EmployeeService } from '../employee.service';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private AUTH_URL: String = 'http://localhost:10111/auth';
  private OMS_URL: String = 'http://localhost:9999/offer-service';
  private EMS_URL: String = 'http://localhost:9090/employee-service';
  private PMS_URL: String = 'http://localhost:9090/points-service';

  private products: Product[];

  constructor(private http: HttpClient, private empService: EmployeeService) { }

  /**
   * this api call doesn't need any authorization
   * @returns observable resonse, exepected list of offers/products 
   */
  getProducts(): Observable<any> {
    return this.http.get(this.OMS_URL + '/offers', {
      observe: 'response',
      responseType: 'json'
    });
  }

  /**
   * 
   * @returns expected list of offers/products created by empId
   */
  getProductsByEmpId(): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.get(this.OMS_URL + '/offers/search/by-author',
        {
          params: new HttpParams().set('authorId', '' + this.empService.getEmpId()),
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response'
        }
      );
    } else {
      alert('login again');
    }
  }

  getProductsByEmpId_2(empid: String): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.get(this.OMS_URL + '/offers/search/by-author',
        {
          params: new HttpParams().set('authorId', '' + empid),
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response'
        }
      );
    } else {
      alert('login again');
    }
  }

  /**
   * 
   * @param newProduct 
   * @returns expected boolean value {true or false}
   */
  postNewProduct(newProduct: Product): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.post(this.OMS_URL + '/offers',
        newProduct,
        {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response'
        }
      );
    } else {
      alert('login again');
    }
  }

  getProductsByCategory(category: String): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.get(this.OMS_URL + '/offers/search/by-category',
        {
          params: new HttpParams().set('offerCategory', `${category}`),
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response'
        }
      );
    } else {
      alert('login again');
    }
  }

  getProductsByTopLikes(): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.get(this.OMS_URL + '/offers/search/by-likes',
        {
          params: new HttpParams().set('limit', 3),
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response'
        }
      );
    } else {
      alert('login again');
    }
  }

  likeProduct(offerId: Number): Observable<any> {
    if (this.empService.isLoggedIn()) {
      return this.http.post(this.OMS_URL + `/offers/${offerId}/likes`,
        {

        },
        {
          params: new HttpParams().set('likedBy', `${this.empService.getEmpId()}`),
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
          observe: 'response',
        }
      );
    } else {
      alert('login again');
    }
  }

  commentOnProduct(comment: Comment): Observable<any> {

    console.log(this.empService.getToken());
    return this.http.post(
      this.OMS_URL + '/offers/' + comment.offerId + '/comments',
      comment,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
        observe: "response"
      }
    );
  }

  fetchAllcomments(offerId: Number): Observable<any> {
    return this.http.get(
      this.OMS_URL + '/offers/' + offerId + '/comments',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.empService.getToken()),
        observe: 'response'
      }
    );
  }
}
