import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {DialogService} from '../../../service/dialog.service';
import {MatDialogRef} from '@angular/material/dialog';
import {SignUpValidationService} from '../../../service/sign-up-validation.service';
import {MyErrorStateMatcher} from '../../../service/my-error-state-matcher';
import {FormErrorService} from '../../../service/form-error.service';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss']
})
export class SignUpDialogComponent implements OnInit {

  form: FormGroup;
  private emailPattern: string = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  hide: boolean = true;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private dialogService: DialogService,
              private dialogRef: MatDialogRef<SignUpDialogComponent>,
              private signUpValidationService: SignUpValidationService,
              private matcher: MyErrorStateMatcher,
              private formErrorService: FormErrorService) {
    this.form = fb.group({
      // firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      // lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.formErrorService.checkControlsMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {
  }

  validateSignUp() {
    this.signUpValidationService.validateSignUp(this.form);
  }


}
