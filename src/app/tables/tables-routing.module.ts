import { PartnersComponent } from './partners/partners.component';
import { ComponiesComponent } from './componies/componies.component';
import { BiographyComponent } from './biography/biography.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesHomeComponent} from './tables-home/tables-home.component'
const routes: Routes = 
[
  {
    path:'',
    component:TablesHomeComponent,
    children:[
      {path:'',component:BiographyComponent},
      {path:"componies", component:ComponiesComponent},
      {path:"partners", component:PartnersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
