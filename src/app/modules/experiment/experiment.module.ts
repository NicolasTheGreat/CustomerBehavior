import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment-routing/experiment-routing.module';



@NgModule({
  declarations: [
    ExperimentComponent
  ],
  imports: [
    CommonModule,
    ExperimentRoutingModule
  ]
})
export class ExperimentModule { }
