export class ResultModel {
  truePositive: number;
  trueNegative: number;
  falsePositive: number;
  falseNegative: number;

  constructor() {
    this.trueNegative = 0;
    this.truePositive = 0;
    this.falseNegative = 0;
    this.falsePositive = 0;
  }
}
