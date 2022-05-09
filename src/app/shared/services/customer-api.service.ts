import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';
import { DefaultResponse } from '../models/default-response.model';
import { ExperimentModel } from '../../modules/core/models/experiment.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  private url = 'http://kamienicznik.eastus.cloudapp.azure.com/backend';
  // private url = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  public fetchCustomer(id?: number): Observable<DefaultResponse<CustomerModel>> {
    return this.http.get<DefaultResponse<CustomerModel>>(`${this.url}/customer?id=${id}`);
  }

  public saveResult(experiment: ExperimentModel): Observable<DefaultResponse<string>> {
    const data = {
      supervisedResult: experiment.supervisedResult,
      unsupervisedResult: experiment.unsupervisedResult,
    };
    return this.http.post<DefaultResponse<string>>(`${this.url}/dao/save`, data);
  }

  public fetchExperimentSet(): Observable<DefaultResponse<number[]>> {
    return this.http.get<DefaultResponse<number[]>>(`${this.url}/generate-set`);
  }
}
