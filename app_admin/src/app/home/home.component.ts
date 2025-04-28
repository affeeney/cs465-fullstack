import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { TripLiastingComponent } from '../trip-liasting/trip-liasting.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TripLiastingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthenticationService) {}

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
