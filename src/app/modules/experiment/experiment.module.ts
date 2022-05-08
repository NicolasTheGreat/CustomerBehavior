import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment-routing/experiment-routing.module';
import { ExperimentCardComponent } from './components/experiment-card/experiment-card.component';
import {SharedModule} from "../../shared/shared.module";
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { MetricScaleComponent } from './components/metric-scale/metric-scale.component';



@NgModule({
  declarations: [
    ExperimentComponent,
    ExperimentCardComponent,
    ScoreCardComponent,
    MetricScaleComponent
  ],
  imports: [
    CommonModule,
    ExperimentRoutingModule,
    SharedModule
  ]
})
export class ExperimentModule { }
