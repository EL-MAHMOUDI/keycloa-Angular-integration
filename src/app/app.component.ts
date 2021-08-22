import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakSecurityService } from './services/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keycloak-Angular';
  
  constructor(
    public securityService:KeycloakSecurityService,
    private router:Router        
    ){}

  onLogout(){
    this.securityService.logout();
    
  }

  onLogin(){
    this.securityService.login();
  }


  onChangePassword(){
    this.securityService.manageAccount();
  }
  
}
