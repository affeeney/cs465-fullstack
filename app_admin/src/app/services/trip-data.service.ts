import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trip } from '../models/trip'; // Assuming you have a Trip model defined
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse'; // Assuming you have an AuthResponse model defined
import { BROWSER_STORAGE } from '../storage';
import { throwError } from 'rxjs'; // Import throwError from rxjs
import { AuthenticationService } from './authentication.service'; // Import AuthenticationService



@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl: string = 'http://localhost:3000/api';

  private tripsEndpoint: string = `${this.apiBaseUrl}/trips`;

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage// Inject AuthenticationService to use its methods
  ) {}

  


  getTrips(): Observable<Trip[]> {

    return this.http.get<Trip[]>(this.tripsEndpoint); // Make a GET request to the API and return the response as an observable of Trip array
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.tripsEndpoint, formData); // Make a POST request to the API with the form data and return the response as an observable of Trip
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.tripsEndpoint + '/' + tripCode); // Make a GET request to the API with the trip code and return the response as an observable of Trip
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.tripsEndpoint + '/' + formData.code, formData); // Make a PUT request to the API with the form data and return the response as an observable of Trip
  }

  // Login method
  public login(user: User): Observable<Authresponse> {
    return this.http.post<Authresponse>(`${this.apiBaseUrl}/login`, user).pipe(
      catchError(this.handleError)
    );
  }

  public register(user: User): Observable<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Observable<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http.post<Authresponse>(url, user); // Use <AuthResponse> for type inference
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  
}
