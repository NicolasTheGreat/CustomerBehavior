import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';
import { DefaultResponse } from '../models/default-response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  private url = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  public getCustomer(): Observable<DefaultResponse<CustomerModel>> {
    return this.http.get<DefaultResponse<CustomerModel>>(`${this.url}/random-customer`);
  }
}
