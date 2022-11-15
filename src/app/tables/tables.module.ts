import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { ComponiesComponent } from './componies/componies.component';
import { PartnersComponent } from './partners/partners.component';
import { ExtraComponent } from './extra/extra.component';


@NgModule({
  declarations: [
    TablesHomeComponent,
    TableComponent,
    BiographyComponent,
    ComponiesComponent,
    PartnersComponent,
    ExtraComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
