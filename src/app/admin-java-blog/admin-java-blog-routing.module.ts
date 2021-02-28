import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminJavaBlogModule} from "./admin-java-blog.module";
import {AdminJavaBlogComponent} from "./admin-java-blog/admin-java-blog.component";

const libraryRoutes: Routes = [
  { path: "", component: AdminJavaBlogComponent,
        children: [
        ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(libraryRoutes)],
  exports: [RouterModule]
})

export class AdminJavaBlogRoutingModule { }
