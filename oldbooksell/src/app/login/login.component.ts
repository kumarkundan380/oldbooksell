import { Component, OnInit } from '@angular/core';
import { MatDialogConfig,MatDialogRef,MatDialog } from '@angular/material/dialog';
import { LoginService } from '../shared/login.service';
import { RegistrationService } from '../shared/registration.service';
import { RegistrationComponent } from '../registration/registration.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService,
              public registrationService:RegistrationService,
              public dialogRef:MatDialogRef<LoginComponent>,
              public dialog: MatDialog) { 

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginService.form.valid) {
      this.loginService.form.reset();
      this.loginService.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.loginService.form.reset();
    this.loginService.initializeFormGroup();
    this.dialogRef.close();
  }

  registration(){
    this.onClose();
    this.registrationService.initializeFormGroup();
    const registratinDialog = new MatDialogConfig();
    registratinDialog.disableClose = true;
    registratinDialog.autoFocus = true;
    registratinDialog.width = "60%";
    this.dialog.open(RegistrationComponent,registratinDialog);
  }

}
