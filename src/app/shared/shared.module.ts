import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionButtonComponent } from './components/option-button/option-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";


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
    MatIconModule
  ],
  exports: [
    OptionButtonComponent,
    IconButtonComponent,
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule {
}
