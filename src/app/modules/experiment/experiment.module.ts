import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment-routing/experiment-routing.module';
import { ExperimentCardComponent } from './components/experiment-card/experiment-card.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ExperimentComponent,
    ExperimentCardComponent
  ],
  imports: [
    CommonModule,
    ExperimentRoutingModule,
    SharedModule
  ]
})
export class ExperimentModule { }
