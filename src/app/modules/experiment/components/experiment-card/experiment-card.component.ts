import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from '../../../../shared/models/customer.model';
import { StoreService } from '../../../core/services/store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExperimentModel } from '../../../core/models/experiment.model';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.scss']
})
export class ExperimentCardComponent implements OnInit {
  @Input() customer: CustomerModel;
  public showHint: Observable<boolean>;

  constructor(private store: StoreService) {
    this.showHint = this.store.getCurrentExperiment().pipe(
      map((value: ExperimentModel) => value.currentRound < 10)
    );
  }

  ngOnInit(): void {
  }

}
