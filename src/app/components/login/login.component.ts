import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private redirectTo: string = 'home';

  loginForm!: FormGroup;

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    if(this.service.isLoggedIn()) {
      this.router.navigate([this.redirectTo]);
    }

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ])
    });
  }

  doLogin() {
    this.service.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate([this.redirectTo]),
      error: (err) => alert(err.message)
    });
  }
}
