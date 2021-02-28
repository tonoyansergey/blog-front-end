import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaBlogComponent } from './java-blog/java-blog.component';
import {RouterModule} from '@angular/router';
import {JavaBlogRoutingModule} from './java-blog-routing.module';
import { LoginDialogComponent } from './component/dialog/login-dialog/login-dialog.component';
import { HomeComponent } from './component/home/home.component';
import {MaterialModule} from '../material/material.module';
import { SignUpDialogComponent } from './component/dialog/sign-up-dialog/sign-up-dialog.component';
import { EmailVerificationDialogComponent } from './component/dialog/email-verification-dialog/email-verification-dialog.component';
import { ForgotPassDialogComponent } from './component/dialog/forgot-pass-dialog/forgot-pass-dialog.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { InfoDialogComponent } from './component/dialog/info-dialog/info-dialog.component';

@NgModule({
  declarations: [JavaBlogComponent, LoginDialogComponent, HomeComponent, SignUpDialogComponent, EmailVerificationDialogComponent, ForgotPassDialogComponent, ResetPasswordComponent, InfoDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    JavaBlogRoutingModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    SignUpDialogComponent,
    EmailVerificationDialogComponent,
    ForgotPassDialogComponent,
    InfoDialogComponent
    ]
})
export class JavaBlogModule { }
