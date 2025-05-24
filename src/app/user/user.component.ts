import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  username!:string;
  password!:string;
  email!:string;
  credentials:any = {};
  successMessage:string = "";
  errorMessage:string = "";
  loginActive:boolean = true;
  registerActive:boolean = false;

  constructor(private authService:UserService,private sharedService:SharedService){
  }

  ngOnInit(): void {
    this.sharedService.loginEvent.subscribe(()=>{
      this.errorMessage = "";
      this.successMessage = "";
      this.loginActive = true;
      this.registerActive = false;
    });
    this.sharedService.registerEvent.subscribe(()=>{
      this.errorMessage = "";
      this.successMessage = "";
      this.registerActive = true;
      this.loginActive = false;
    } );
  }

  login():void{
    let credentials = {
      email: this.email,
      password: this.password
    }

    this.authService.login(credentials).subscribe( (response:any)=>{
      localStorage.setItem("token",response.token);
      this.authService.emitLoggedInEvent()
      this.loginActive = false;
      this.registerActive = false;
      this.email = ""
      this.password = ""
      this.username = ""
      this.successMessage = response.message
    },
    error=>{
      this.errorMessage = "Login unsuccessful"
    }
   );
   this.errorMessage = ""
   this.successMessage = ""
   this.email = ""
   this.password = ""
   this.username = ""
  }

  register():void{
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email
    }

    this.authService.register(userData).subscribe((response:any)=>{
      this.successMessage = response.message
      this.loginActive = false
      this.registerActive = true
      this.username = ""
      this.password = ""
      this.email = ""
    }, error=>{
      this.errorMessage = "Sorry! User could not registered"
    }  
  );

  this.username = ""
  this.password = ""
  this.email = ""

  }

}
