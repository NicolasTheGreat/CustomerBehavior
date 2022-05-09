import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';
import { StoreService } from '../core/services/store.service';
import { ExperimentModel } from '../core/models/experiment.model';
import { CustomerApiService } from '../../shared/services/customer-api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private navbarManager: NavbarManagerService, private store: StoreService, private api: CustomerApiService) { }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(false);
    this.api.fetchExperimentSet().subscribe((set) =>
      this.store.setCurrentExperiment(new ExperimentModel(set.data)));
  }

}
