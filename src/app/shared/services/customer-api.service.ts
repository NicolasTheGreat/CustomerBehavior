import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';
import { DefaultResponse } from '../models/default-response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  private url = 'http://kamienicznik.eastus.cloudapp.azure.com/backend';

  constructor(private http: HttpClient) {
  }

  public getCustomer(): Observable<DefaultResponse<CustomerModel>> {
    return this.http.get<DefaultResponse<CustomerModel>>(`${this.url}/random-customer`);
  }

  public saveResult(): Observable<DefaultResponse<string>> {
    const data = {
      truePositive: 1,
      trueNegative: 3,
      falsePositive: 13,
      falseNegative: 3,
    };
    return this.http.post<DefaultResponse<string>>(`${this.url}/dao/save`, data);
  }
}
