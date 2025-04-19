import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip'; // Assuming you have a Trip model defined


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {

    return this.http.get<Trip[]>(this.url); // Make a GET request to the API and return the response as an observable of Trip array
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData); // Make a POST request to the API with the form data and return the response as an observable of Trip
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.url + '/' + tripCode); // Make a GET request to the API with the trip code and return the response as an observable of Trip
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData); // Make a PUT request to the API with the form data and return the response as an observable of Trip
  }
}
