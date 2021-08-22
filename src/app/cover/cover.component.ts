import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(private securityService:KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onAutomate(){
    this.securityService.login();
  }
}
