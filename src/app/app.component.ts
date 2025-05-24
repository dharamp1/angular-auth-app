import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-auth-app';
  isLoggedIn:boolean = false;

  constructor(private authService:UserService,private sharedService:SharedService,private router:Router){
  }

  ngOnInit(): void {
    this.authService.loggedInEvent.subscribe((data:any)=>{
      this.isLoggedIn = true
    })
    if(typeof localStorage !== "undefined" && localStorage.getItem("token")){
      this.isLoggedIn = true
    }
  }

  login(){
    this.sharedService.triggerLoginEvent()
    this.router.navigateByUrl("/")
  }

  register(){
    this.sharedService.triggerRegisterEvent()
    this.router.navigateByUrl("/")
  }

  logout(){
    this.isLoggedIn = false
    localStorage.removeItem("token")
    this.router.navigate(["/"])
  }

  loadContent(page:any){
    if(page=="home"){
      this.router.navigateByUrl("/home")
    }else if(page=="admin"){
      this.router.navigate(["/admin"])
    }
  }
}
