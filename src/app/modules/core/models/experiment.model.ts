import { ResultModel } from './result.model';

export class ExperimentModel {
  public preparedSet: number[];
  public result: ResultModel;
  public score: number;
  public currentRound: number;
  public totalRounds = 20;

  constructor() {
    this.preparedSet = [1, 2, 4, 5, 52];
    this.score = 0;
    this.currentRound = 0;
    this.result = new ResultModel();
  }
}
