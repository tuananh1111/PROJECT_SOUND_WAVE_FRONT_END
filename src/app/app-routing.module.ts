import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [{
  path: 'hello',
  component: HelloComponent,
  canActivate: [AuthGuard]  // AuthGuard được sử dụng để phân quyền, chỉ có thể truy cập đường dẫn này khi đã đăng nhập
},{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
