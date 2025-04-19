import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for navigation
import { Trip } from '../models/trip'; // Assuming you have a Trip model defined

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {

    @Input('trip') trip: any; // Input property to receive trip data from parent component
    constructor(private router: Router) { } // Constructor is empty, but you can add any initialization logic here
    ngOnInit(): void { 
    }// This lifecycle hook is called after the component is initialized

    public editTrip(trip: Trip) {
      localStorage.removeItem('tripCode'); // Remove any existing trip code from local storage
      localStorage.setItem('tripCode', trip.code); // Store the trip code in local storage
      this.router.navigate(['edit-trip']); // Navigate to the 'add-trip' route
    }
} 


