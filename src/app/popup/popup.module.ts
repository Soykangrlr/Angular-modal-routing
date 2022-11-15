import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { PopupHomeComponent } from './popup-home/popup-home.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    PopupHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    SharedModule
  ]
})
export class PopupModule { }
