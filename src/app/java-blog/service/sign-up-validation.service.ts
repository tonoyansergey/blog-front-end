import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {DialogService} from './dialog.service';
import {EmailVerificationDialogComponent} from '../component/dialog/email-verification-dialog/email-verification-dialog.component';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpValidationService {

  signUpValidationUrl = '/api/validation/sign-up';

  constructor(private http: HttpClient,
              private dialogService: DialogService) {
  }

  validateSignUp(form: FormGroup) {
    let user;
    const { username, email, password } = form.value;
    user = new UserModel(username, email, password);
    this.http.post(this.signUpValidationUrl, user).subscribe(
      signUpValidationResponse => {
        this.dialogService.openDialogAndPassData(EmailVerificationDialogComponent, form);
      },
      error => {
        form.controls.confirmPassword.enable();
        error.error.data.username ? form.controls.username.setErrors({usernameExists: true}) : null;
        error.error.data.email ? form.controls.email.setErrors({emailExists: true}) : null;
        }
    );
  }
}
