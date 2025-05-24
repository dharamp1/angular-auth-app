import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService:UserService,private router:Router) { }

  canActivate():boolean{
    return this.checkedLoggedIn()
  }

  private checkedLoggedIn():boolean{
    if(this.authService.isUserAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/'])
      return false;
    }
  }

}
