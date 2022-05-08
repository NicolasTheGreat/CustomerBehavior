import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { CustomerApiService } from '../../shared/services/customer-api.service';
import { CustomerModel } from '../../shared/models/customer.model';
import { DefaultResponse } from '../../shared/models/default-response.model';
import { StoreService } from '../core/services/store.service';
import { ExperimentModel } from '../core/models/experiment.model';
import { ExperimentService } from './services/experiment.service';


@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public currentCustomer: CustomerModel;
  public taskReady = false;
  private globalExperiment: ExperimentModel = new ExperimentModel();

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    initialSlide: 1,
    effect: 'slide',
  };

  constructor(private navbarManager: NavbarManagerService,
              private api: CustomerApiService,
              private experimentService: ExperimentService,
  ) {
  }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(true);
    this.prepareTask();
  }

  public prepareTask(): void {
    this.taskReady = false;
    this.api.getCustomer().subscribe((res: DefaultResponse<CustomerModel>) => {
      res.data.income = res.data.income / 77;
      this.currentCustomer = res.data;
    });
    setTimeout(() => {
      this.taskReady = true;
    }, 500);
  }

  public accept(): void {
    if (this.componentRef.directiveRef.getIndex() === 2) {
      setTimeout(() => {
        this.experimentService.executeIssue(true, this.currentCustomer.riskChance);
        this.prepareTask();
        this.componentRef.directiveRef.prevSlide();
      }, 150);
    }
  }

  public reject(): void {
    if (this.componentRef.directiveRef.getIndex() === 0) {
      setTimeout(() => {
        this.experimentService.executeIssue(false, this.currentCustomer.riskChance);
        this.prepareTask();
        this.componentRef.directiveRef.nextSlide();
      }, 150);
    }
  }
}
