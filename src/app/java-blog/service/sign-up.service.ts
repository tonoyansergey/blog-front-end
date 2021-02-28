import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {DialogService} from './dialog.service';
import {UserModel} from '../model/user.model';
import {LoginDialogComponent} from '../component/dialog/login-dialog/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  signUpUrl = '/api/sign-up';

  constructor(private http: HttpClient,
              private dialogService: DialogService,
              private dialog: MatDialog) {
  }

  signUp(form: FormGroup, userForm: FormGroup) {
    let user;
    const {username, email, password } = userForm.value;
    user = new UserModel(username, email, password);
    this.http.put(this.signUpUrl, {verificationBean: form.value, userBean: user}).subscribe(
      signUpResponse => {
        this.dialog.closeAll();
        this.dialogService.openDialog(LoginDialogComponent);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          form.controls.verCode.setErrors({wrongCode: true});
        }
      }
    );
  }
}
