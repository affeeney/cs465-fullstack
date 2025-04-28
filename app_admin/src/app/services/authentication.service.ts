import { Inject, Injectable } from '@angular/core'; 
import { BROWSER_STORAGE } from '../storage'; 
import { User } from '../models/user'; 
import { Authresponse } from '../models/authresponse'; 
import { TripDataService } from '../services/trip-data.service'; 
import { catchError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({ 
providedIn: 'root' 
}) 
export class AuthenticationService { 
 
 constructor( 
   @Inject(BROWSER_STORAGE) private storage: Storage, 
   private tripDataService: TripDataService 
 ) { } 
 
 public getToken(): string {
  return this.storage.getItem('travlr-token') || '';
}
 
 
 public saveToken(token: string): void { 
   this.storage.setItem('travlr-token', token); 
 } 
 
 public login(user: User): Observable<Authresponse> {
  return this.tripDataService.login(user).pipe(
    tap((authResp: Authresponse) => {
      this.saveToken(authResp.token); // Save token when the login succeeds
    })
  );
}




// Register method: Similar to login, handle the Observable correctly
public register(user: User): void {
  this.tripDataService.register(user).subscribe({
    next: (authResp: Authresponse) => {
      this.saveToken(authResp.token); // Save token if registration is successful
    },
    error: (error) => {
      console.error('Registration failed', error); // Handle registration failure
    }
  });
} 
 
 public logout(): void { 
   this.storage.removeItem('travlr-token'); 
 } 
 
 public isLoggedIn(): boolean { 
   const token: string = this.getToken(); 
   if (token) { 
     const payload = JSON.parse(atob(token.split('.')[1])); 
     return payload.exp > (Date.now() / 1000); 
   } else { 
     return false; 
   } 
 } 
 
 public getCurrentUser(): User | undefined {
  if (this.isLoggedIn()) {
    const token = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }
  return undefined;
}
 
} 

