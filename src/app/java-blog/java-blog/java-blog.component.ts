import { Component, OnInit } from '@angular/core';
import {LoginDialogComponent} from '../component/dialog/login-dialog/login-dialog.component';
import {SignUpDialogComponent} from '../component/dialog/sign-up-dialog/sign-up-dialog.component';
import {DialogService} from '../service/dialog.service';

@Component({
  selector: 'app-java-blog',
  templateUrl: './java-blog.component.html',
  styleUrls: ['./java-blog.component.scss']
})
export class JavaBlogComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }
  openLoginDialog() {
    this.dialogService.openDialog(LoginDialogComponent);
  }

  openSignUpDialog() {
    this.dialogService.openDialog<SignUpDialogComponent>(SignUpDialogComponent);
  }
}
