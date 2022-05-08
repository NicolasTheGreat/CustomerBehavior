import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';
import { StoreService } from '../core/services/store.service';
import { ExperimentModel } from '../core/models/experiment.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private navbarManager: NavbarManagerService, private store: StoreService) { }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(false);
    this.store.setCurrentExperiment(new ExperimentModel());
  }

}
