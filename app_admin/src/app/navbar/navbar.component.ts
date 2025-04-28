// src/app/navbar/navbar.component.ts

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('travlr-token');
  }

  public onLogout(): void {
    localStorage.removeItem('travlr-token');
    this.router.navigateByUrl('/home');
  }
}
