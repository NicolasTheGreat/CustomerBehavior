import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarManagerService } from '../navigation/services/navbar-manager.service';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { CustomerApiService } from '../../shared/services/customer-api.service';
import { CustomerModel } from '../../shared/models/customer.model';
import { DefaultResponse } from '../../shared/models/default-response.model';


@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public currentCustomer: CustomerModel;
  public experimentReady = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    initialSlide: 1
  };

  constructor(private navbarManager: NavbarManagerService,
              private api: CustomerApiService
  ) {
  }

  ngOnInit(): void {
    this.navbarManager.navbarVisible$.next(true);
    this.prepareExperiment();
  }

  public prepareExperiment(): void {
    this.experimentReady = false;
    this.api.getCustomer().subscribe((res: DefaultResponse<CustomerModel>) => {
      this.currentCustomer = res.data;
    });
    setTimeout(() => {
      this.experimentReady = true;
    }, 500);
  }

  next(): void {
  }

  public accept(): void {
    console.log('przydzielam');
    console.log(this.componentRef.directiveRef.getIndex());
    if (this.componentRef.directiveRef.getIndex() === 2) {
      this.prepareExperiment();
      this.componentRef.directiveRef.prevSlide();
    }
  }

  public reject(): void {
    console.log('odrzucam');
    if (this.componentRef.directiveRef.getIndex() === 0) {
      this.prepareExperiment();
      this.componentRef.directiveRef.nextSlide();
    }
  }
}
