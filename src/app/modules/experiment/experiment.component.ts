import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  constructor(private navbarManager: NavbarManagerService) { }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(true);
  }

}
