import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    ListHomeComponent,
    StatisticsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
