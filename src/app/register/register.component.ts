import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  user: User;
  constructor(private serviceAuth: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: [null],
      password: [null],
      phoneNumber: [null]
    });
  }
  register() {
    const user1: User = this.formRegister.value;
    this.serviceAuth.register(user1).subscribe(value =>
    console.log('Register ok'));
    this.router.navigate(['/login']);
  }

  checkUserName(username: string) {
    this.serviceAuth.checkUserName(username).subscribe(value => console.log('OK'));
  }

}
