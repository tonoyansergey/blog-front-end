import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {DialogService} from '../../../service/dialog.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ForgotPassDialogComponent} from '../forgot-pass-dialog/forgot-pass-dialog.component';
import {MyErrorStateMatcher} from '../../../service/my-error-state-matcher';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private dialogService: DialogService,
              private dialogRef: MatDialogRef<LoginDialogComponent>,
              private matcher: MyErrorStateMatcher) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });
  }

  ngOnInit() {
  }

  authenticate() {
    this.authService.authenticate(this.form);
  }

  openForgotPasswordDialog() {
    this.dialogService.openDialog<ForgotPassDialogComponent>(ForgotPassDialogComponent);
  }


}
