import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExperimentModel } from '../models/experiment.model';
import { ConfusionMatrix } from '../../../shared/enums/confusionMatrix.enum';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private currentExperiment: BehaviorSubject<ExperimentModel> = new BehaviorSubject<ExperimentModel>(new ExperimentModel());

  constructor() {
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
    switch (variable) {
      case ConfusionMatrix.TRUE_POSITIVE:
        model.result.truePositive++;
        break;
      case ConfusionMatrix.TRUE_NEGATIVE:
        model.result.trueNegative++;
        break;
      case ConfusionMatrix.FALSE_POSITIVE:
        model.result.falsePositive++;
        break;
      case ConfusionMatrix.FALSE_NEGATIVE:
        model.result.falseNegative++;
        break;
    }
    model.currentRound++;
    model.score = model.result.truePositive - model.result.trueNegative;
    this.currentExperiment.next(model);
  }
}
