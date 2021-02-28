import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../service/form-error.service';
import {ResetPassService} from '../../service/reset-pass.service';
import {MyErrorStateMatcher} from '../../service/my-error-state-matcher';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token: string;
  isTokenValid: boolean = true;
  hide: boolean = true;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private formErrorService: FormErrorService,
              private resetPassService: ResetPassService,
              private matcher: MyErrorStateMatcher) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.formErrorService.checkControlsMatch('password', 'confirmPassword')
    });

  }

  ngOnInit() {
    this.resetPassService.validateToken(this.token).subscribe(
      data => {
        this.isTokenValid = <boolean> data;
      },
      error => {
        this.isTokenValid = false;
      });
  }

  resetPassword() {
    this.resetPassService.resetPass(this.form, this.token);
  }
}
