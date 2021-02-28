import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {JavaBlogModule} from './java-blog/java-blog.module';
import {AdminJavaBlogModule} from './admin-java-blog/admin-java-blog.module';
import {MaterialModule} from './material/material.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JavaBlogModule,
    AdminJavaBlogModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
