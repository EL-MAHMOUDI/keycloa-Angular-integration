import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { ProductsComponent } from './products/products.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome', component:CoverComponent},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'suppliers', component:SuppliersComponent, canActivate:[AdminGuard]},
  {path:'**', redirectTo:'/welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
