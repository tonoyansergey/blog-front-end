import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SignUpService} from '../../../service/sign-up.service';
import {FormErrorService} from '../../../service/form-error.service';
import {SignUpValidationService} from '../../../service/sign-up-validation.service';
import {MyErrorStateMatcher} from '../../../service/my-error-state-matcher';

@Component({
  selector: 'app-email-verification-dialog',
  templateUrl: './email-verification-dialog.component.html',
  styleUrls: ['./email-verification-dialog.component.scss']
})
export class EmailVerificationDialogComponent implements OnInit {

  form: FormGroup;
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data,
              private signUpService: SignUpService,
              private formErrorService: FormErrorService,
              private signUpValidationService: SignUpValidationService,
              private dialogRef: MatDialogRef<EmailVerificationDialogComponent>,
              private matcher: MyErrorStateMatcher) {
    this.form = fb.group({
      verCode: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    });
    this.userForm = data.data;
  }

  ngOnInit() {
  }

  submitVerCode() {

    this.signUpService.signUp(this.form, this.userForm);
  }

  resendVerCode() {
    this.dialogRef.close();
    this.signUpValidationService.validateSignUp(this.userForm);
  }
}
