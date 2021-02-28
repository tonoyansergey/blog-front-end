import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../service/form-error.service';
import {ResetPassService} from '../../../service/reset-pass.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MyErrorStateMatcher} from '../../../service/my-error-state-matcher';

@Component({
  selector: 'app-forgot-pass-dialog',
  templateUrl: './forgot-pass-dialog.component.html',
  styleUrls: ['./forgot-pass-dialog.component.scss']
})
export class ForgotPassDialogComponent implements OnInit {

  form: FormGroup;
  private emailPattern: string = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

  constructor(private fb: FormBuilder,
              private formErrorService: FormErrorService,
              private resetPassService: ResetPassService,
              private dialogRef: MatDialogRef<ForgotPassDialogComponent>,
              private matcher: MyErrorStateMatcher) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    });
  }

  ngOnInit() {
  }

  validateEmail() {
    this.resetPassService.validateEmail(this.form, this.dialogRef);
  }
}
