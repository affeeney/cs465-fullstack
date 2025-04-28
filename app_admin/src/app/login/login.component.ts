import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public credentials: User = { email: '', name: '', password: '' };
  public formError: string = '';

  // Inject AuthenticationService into the constructor
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService // Corrected injection here
  ) {}

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.authenticationService.login(this.credentials).subscribe({
      next: (authResp: Authresponse) => {
        localStorage.setItem('travlr-token', authResp.token);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        this.formError = 'Login failed. Please check your credentials.';
      }
    });
  }
}
