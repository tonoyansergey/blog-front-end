import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminJavaBlogComponent } from './admin-java-blog/admin-java-blog.component';
import {RouterModule} from "@angular/router";
import {AdminJavaBlogRoutingModule} from "./admin-java-blog-routing.module";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [AdminJavaBlogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AdminJavaBlogRoutingModule
  ]
})
export class AdminJavaBlogModule { }
