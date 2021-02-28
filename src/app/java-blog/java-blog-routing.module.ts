import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JavaBlogComponent} from './java-blog/java-blog.component';
import {HomeComponent} from './component/home/home.component';
import {ResetPasswordComponent} from './component/reset-password/reset-password.component';

const libraryRoutes: Routes = [
  { path: '', component: JavaBlogComponent,
        children: [
          { path: '', component: HomeComponent},
          { path: 'reset-password', component: ResetPasswordComponent}
          ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})

export class JavaBlogRoutingModule { }
