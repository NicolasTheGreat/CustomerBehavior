import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionButtonComponent } from './components/option-button/option-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { HttpClientModule } from '@angular/common/http';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    OptionButtonComponent,
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    SwiperModule,
    HttpClientModule
  ],
  exports: [
    OptionButtonComponent,
    IconButtonComponent,
    MatCardModule,
    MatIconModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule {
}
