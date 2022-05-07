import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from '../../../../shared/models/customer.model';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.scss']
})
export class ExperimentCardComponent implements OnInit {
  @Input() customer: CustomerModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.customer);
  }

}
