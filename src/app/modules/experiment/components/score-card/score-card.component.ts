import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../core/services/store.service';
import { ExperimentModel } from '../../../core/models/experiment.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  public experimentResult: ExperimentModel;

  constructor(private store: StoreService) {
    this.store.getCurrentExperiment().subscribe((exp: ExperimentModel) => {
      this.experimentResult = exp;
    });
  }

  ngOnInit(): void {
  }

}
