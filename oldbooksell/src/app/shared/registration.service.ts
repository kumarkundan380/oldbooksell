import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

    form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName:new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('1'),
    // department: new FormControl(0),
    // hireDate: new FormControl(''),
    // isPermanent: new FormControl(false)
    password: new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    address2: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    district: new FormControl('',Validators.required),
    postalCode: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName:'',
      email: '',
      mobile: '',
      gender: '1',
      // department: 0,
      // hireDate: '',
      // isPermanent: false
      password:'',
      confirmPassword:'',
      address:'',
      address2:'',
      location:'',
      postalCode:'',
      district:'',
      state:''
    });
  }  
}
