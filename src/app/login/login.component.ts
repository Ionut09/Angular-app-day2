import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Login Component'; //merge si fara tip daca e literal
  logoSource = 'https://www.pngitem.com/pimgs/m/65-653199_login-button-image-png-png-logo-for-login.png';
  user = {
    username: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  handleChangeUser(event) {
    console.log(event.target.value);
    this.user.username = event.target.value;
  }

  handleChangePassword(event) {
    console.log(event.target.value);
    this.user.password = event.target.value;
  }

  handleLogin(event) {
    alert(`Welcome ${this.user.username}`);
  }

  handleInputChange(event, key) {
    this.user[key] = event.target.value;
    console.log(this.user);
  }

}
