import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {PostListComponent} from "./components/posts/post-list/post-list.component";
import {PostDetailComponent} from "./components/posts/post-detail/post-detail.component";
import {loginActivateGuard} from "./guards/login-activate.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    canActivate: [loginActivateGuard],
    component: WelcomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent,
    canActivate: [loginActivateGuard]
  },
  {
    path: 'posts/:id',
    canActivate: [loginActivateGuard],
    component: PostDetailComponent
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
