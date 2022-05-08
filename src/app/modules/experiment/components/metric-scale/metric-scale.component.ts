import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-scale',
  templateUrl: './metric-scale.component.html',
  styleUrls: ['./metric-scale.component.scss']
})
export class MetricScaleComponent implements OnInit {
  @Input() riskPercent = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
