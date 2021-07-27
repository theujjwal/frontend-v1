import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  productListSubject = new Subject();

  constructor() { }

  sendMsg(product) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

  sendProductList(obs : Observable<any>) {
    obs.subscribe(resp => {
      this.productListSubject.next(resp.body);
    });
  }

  getProductList() {
    return this.productListSubject.asObservable();
  }
}
