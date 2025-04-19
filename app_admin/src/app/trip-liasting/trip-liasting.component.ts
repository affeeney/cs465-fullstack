import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip'; // Assuming you have a Trip model defined
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip-liasting',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-liasting.component.html',
  styleUrl: './trip-liasting.component.css',
  providers: [TripDataService]
})

export class TripLiastingComponent implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(private tripDataService: TripDataService, private router: Router) { 
    console.log('trip-listing constructor'); // Constructor is empty, but you can add any initialization logic here

  //ngOnInit(): void { // This lifecycle hook is called after the component is initialized
  }
  
  public addTrip(): void {
    this.router.navigate(['add-trip'])
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' trips available.';
          }  
          else
          {
            this.message = 'There are no trips available.';
          }
          console.log(this.message)
        },
        error: (error: any) => {
          console.log('Error fetching trips:', error);
        }
      })
  }
  ngOnInit(): void { 
    console.log('ngOnInit');
    this.getStuff();
  }
}
// This lifecycle hook is called after the component is initialized


