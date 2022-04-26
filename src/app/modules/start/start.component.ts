import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private navbarManager: NavbarManagerService) { }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(false);
  }

}
