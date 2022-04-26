import { Component, OnInit } from '@angular/core';
import { NavbarManagerService } from '../../services/navbar-manager.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public navbarManager: NavbarManagerService) {
  }

  ngOnInit(): void {

  }

}
