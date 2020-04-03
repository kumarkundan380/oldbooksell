import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { RegistrationService } from '../shared/registration.service';
import { LoginService } from '../shared/login.service';
import { LoginComponent } from '../login/login.component';
import { NotificationService } from '../shared/notification.service'; 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public registrationService:RegistrationService,
              public loginService:LoginService,
              public notificationService:NotificationService,
              public dialogRef:MatDialogRef<RegistrationComponent>,
              public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  onClear() {
    this.registrationService.form.reset();
    this.registrationService.initializeFormGroup();
  //  this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.registrationService.form.valid) {
      this.registrationService.form.reset();
      this.registrationService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.registrationService.form.reset();
    this.registrationService.initializeFormGroup();
    this.dialogRef.close();
  }

  login(){
    this.onClose();
    this.loginService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(LoginComponent,dialogConfig);
  }

}
