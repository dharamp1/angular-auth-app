import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
