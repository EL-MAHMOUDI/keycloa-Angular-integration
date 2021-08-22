import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoverComponent } from './cover/cover.component';

export function kcFactory(kcSecurityService:KeycloakSecurityService){
  return ()=> kcSecurityService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    WelcomeComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 

  ],
  providers: [
    {
      provide:APP_INITIALIZER, 
      deps:[KeycloakSecurityService], 
      useFactory:kcFactory,
      multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
