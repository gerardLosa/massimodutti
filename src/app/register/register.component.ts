import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/main/users/services/users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private usersService: UsersService, private router: Router) { }

  public register() {
    const userName = this.form.get('userName').value;
    const password = this.form.get('password').value;
    this.usersService.addUser(userName, password);
    this.goLogin();
  }

  public goLogin() {
    this.router.navigate(['/Login']);
  }
}
