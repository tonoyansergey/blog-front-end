import {Component, OnInit} from '@angular/core';
import {LoginDialogComponent} from '../dialog/login-dialog/login-dialog.component';
import {DialogService} from '../../service/dialog.service';
import {SignUpDialogComponent} from '../dialog/sign-up-dialog/sign-up-dialog.component';
import {EmailVerificationDialogComponent} from '../dialog/email-verification-dialog/email-verification-dialog.component';
import {InfoDialogComponent} from '../dialog/info-dialog/info-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
  }

  openLoginDialog() {
    this.dialogService.openDialog(LoginDialogComponent);
  }

  openSignUpDialog() {
    this.dialogService.openDialog<SignUpDialogComponent>(SignUpDialogComponent);
  }

  openVerificationDialog() {
    this.dialogService.openDialogAndPassData(EmailVerificationDialogComponent, 'some_mail@gmail.com');
  }

  openForgotPassDialog() {
    this.dialogService.openDialog<InfoDialogComponent>(InfoDialogComponent);
  }
}
