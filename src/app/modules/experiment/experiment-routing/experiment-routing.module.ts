import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentComponent } from '../experiment.component';

const routes: Routes = [
  {
    path: '',
    component: ExperimentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ExperimentRoutingModule {
}
