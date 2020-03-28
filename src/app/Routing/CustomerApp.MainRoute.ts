import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { CustomerModule } from '../Customer/CustomerApp.Customermodule';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer', loadChildren: () => import('../Customer/CustomerApp.Customermodule').then(m => m.CustomerModule) },
  {path: 'supplier', loadChildren: () => import('../Supplier/CustomerApp.Suppliermodule').then(m => m.SupplierModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
