import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../../services/navbar-manager.service';
import { CustomerApiService } from '../../../../shared/services/customer-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public navbarManager: NavbarManagerService, private api: CustomerApiService) {
  }

  ngOnInit(): void {

  }

  testApi(): void {
    this.api.saveResult().subscribe(console.log);
  }
}
