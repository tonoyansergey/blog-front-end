import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'java-blog', loadChildren: () => import('./java-blog/java-blog.module').then(mod => mod.JavaBlogModule)},
  { path: 'admin-java-blog', loadChildren: () => import('./admin-java-blog/admin-java-blog.module').then(mod => mod.AdminJavaBlogModule)},
  { path: '**', redirectTo: '/java-blog', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
