import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root',
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;
  public tokenParsed: any;
  constructor() {
    console.log('Security Initialization...');
    this.kc = new Keycloak({
      url: 'http://localhost:8080/auth',
      realm: 'RPA-ORCHESTRATOR',
      clientId: 'angular-app',
    });
  }  

  public async init() {
    await this.kc?.init({
      //onLoad:'login-required',
      onLoad: 'check-sso',
    });
    this.tokenParsed = this.kc.tokenParsed;
  }

  public isAuthenticated() {
    return this.kc.authenticated;
  }

  public isAdmin() {
    return this.kc.hasRealmRole('admin');
  }

  public getUsername() {
    return this.tokenParsed?.name;
  }

  public logout() {
    this.kc.logout({ redirectUri: 'http://localhost:4200/welcome' });
  }

  login() {
    this.kc.login({ redirectUri: 'http://localhost:4200/products' });
  }

  manageAccount() {
    this.kc.accountManagement();
  }
}
