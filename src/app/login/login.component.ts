import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public login() {
    const userName = this.form.get('userName');
    const password = this.form.get('password');
    this.authenticationService.login(userName, password)
      .subscribe(
        resp => {
          if (resp.success) {
            this.authenticationService.setCredentials(userName, password);
            this.router.navigate(['/ships']);
          } else {
            console.log('Error');
          }
        }
      );
  }

}
