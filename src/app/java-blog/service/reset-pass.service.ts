import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DialogService} from './dialog.service';
import {FormGroup} from '@angular/forms';
import {InfoDialogComponent} from '../component/dialog/info-dialog/info-dialog.component';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PasswordResetDtoModel} from '../model/password-reset-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {

  private emailValidationUrl = '/api/validation/email';
  private resetPasswordValidationUrl = '/api/validation/password-reset-token';
  private resetPasswordUrl = '/api/users/reset/password/';
  private dialogInfo = 'Reset link was sent to your email';

  constructor(private http: HttpClient,
              private dialogService: DialogService,
              private router: Router) {
  }

  validateEmail<D>(form: FormGroup, dialogRef: MatDialogRef<D>) {
    this.http.post(this.emailValidationUrl, form.value).subscribe(
      emailValidationResponse => {
        this.dialogService.openDialogPassDataAndClosePrev(InfoDialogComponent, dialogRef, this.dialogInfo);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          form.controls.email.setErrors({wrongEmail: true});
        }
      }
    );
  }

  validateToken(token: string) {
    return this.http.post(this.resetPasswordValidationUrl, token);
}

  resetPass(form: FormGroup, token: string) {
    const passResetDTO = new PasswordResetDtoModel(form.controls.password.value, token);
    this.http.patch(this.resetPasswordUrl, passResetDTO).subscribe(
      updatePasswordResponse => {
        this.router.navigate(['./login']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          form.setErrors({invalidLink: true});
        }
      }
    );
  }
}
