import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showRegistrationModel()
  {
    // document.getElementById('login_model').style.visibility = "collapse";
    // document.getElementById('registration_model').style.visibility = "visible";
  }

}

