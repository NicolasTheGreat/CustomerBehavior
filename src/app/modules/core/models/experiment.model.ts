import { ResultModel } from './result.model';

export class ExperimentModel {
  public preparedSet: number[];
  public supervisedResult: ResultModel;
  public unsupervisedResult: ResultModel;
  public score: number;
  public currentRound: number;
  public totalRounds = 20;

  constructor(set?: number[]) {
    this.preparedSet = set ?? [];
    this.score = 0;
    this.currentRound = 1;
    this.supervisedResult = new ResultModel();
    this.unsupervisedResult = new ResultModel();
  }
}
