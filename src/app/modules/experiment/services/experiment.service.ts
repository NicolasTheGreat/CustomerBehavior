import { Injectable } from '@angular/core';
import { StoreService } from '../../core/services/store.service';
import { ConfusionMatrix } from '../../../shared/enums/confusionMatrix.enum';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  public executeIssue(answer: boolean, chance: number): void {
    const defaulter = Math.random() < chance;
    if (answer && !defaulter) {
      console.log('True Positive');
      this.store.increaseMetric(ConfusionMatrix.TRUE_POSITIVE);
    } else if (!answer && defaulter) {
      console.log('True Negative');
      this.store.increaseMetric(ConfusionMatrix.TRUE_NEGATIVE);
    } else if (!answer && !defaulter) {
      console.log('False Negative');
      this.store.increaseMetric(ConfusionMatrix.FALSE_NEGATIVE);
    } else if (answer && defaulter) {
      console.log('False Positive');
      this.store.increaseMetric(ConfusionMatrix.FALSE_POSITIVE);
    }
  }

  constructor(private store: StoreService) {
  }
}
