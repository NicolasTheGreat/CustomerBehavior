import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ExperimentModel } from '../models/experiment.model';
import { ConfusionMatrix } from '../../../shared/enums/confusionMatrix.enum';
import { CustomerApiService } from '../../../shared/services/customer-api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private currentExperiment: BehaviorSubject<ExperimentModel> = new BehaviorSubject<ExperimentModel>(new ExperimentModel());

  constructor(private api: CustomerApiService) {
    const savedModel = this.getModelFromSessionStorage();
    if (savedModel) {
      this.currentExperiment.next(savedModel);
    }
    this.currentExperiment.subscribe((model: ExperimentModel) => {
      this.saveModelToSessionStorage(model);
    });
  }

  public setCurrentExperiment(model: ExperimentModel): void {
    this.currentExperiment.next(model);
  }

  public saveModelToSessionStorage(model: ExperimentModel): void {
    sessionStorage.setItem('experiment', JSON.stringify(model));
  }

  public getModelFromSessionStorage(): ExperimentModel {
    return JSON.parse(sessionStorage.getItem('experiment'));
  }

  public getCurrentExperiment(): Observable<ExperimentModel> {
    return this.currentExperiment;
  }

  public getCurrentExperimentValue(): ExperimentModel {
    return this.currentExperiment.value;
  }

  public increaseMetric(variable: ConfusionMatrix): void {
    const model = this.getModelFromSessionStorage();
    const resultType = model.currentRound < 11 ? 'supervisedResult' : 'unsupervisedResult';

    switch (variable) {
      case ConfusionMatrix.TRUE_POSITIVE:
        model[resultType].truePositive++;
        break;
      case ConfusionMatrix.TRUE_NEGATIVE:
        model[resultType].trueNegative++;
        break;
      case ConfusionMatrix.FALSE_POSITIVE:
        model[resultType].falsePositive++;
        break;
      case ConfusionMatrix.FALSE_NEGATIVE:
        model[resultType].falseNegative++;
        break;
    }
    model.score = (model.supervisedResult.truePositive - model.supervisedResult.falsePositive) + (model.unsupervisedResult.truePositive
      - model.unsupervisedResult.falsePositive);
    if (model.currentRound === 20) {
      this.currentExperiment.next(model);
      this.api.saveResult(model).subscribe();
      return;
    }
    model.currentRound++;
    this.currentExperiment.next(model);
  }
}
