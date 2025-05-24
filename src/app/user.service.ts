import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  AUTH_BASE_URL = "http://localhost:4000/api/auth"

  constructor(private http:HttpClient) { }

  register(newUser:any):Observable<any>{
    return this.http.post(`${this.AUTH_BASE_URL}/register`, newUser);
  }

  login(credentials:any):Observable<any>{
    return this.http.post(`${this.AUTH_BASE_URL}/login`,credentials).pipe(tap( (response:any)=>{
      if(response && response.token){
        localStorage.setItem("token",response.token)
        this.emitLoggedInEvent()
      }
    } ))
  }

  loggedInEvent = new EventEmitter<void>();

  emitLoggedInEvent(){
    this.loggedInEvent.emit()
  }

  getToken():String|null {
    if(typeof window !== undefined){
      return localStorage.getItem("token")
    }
    return null;
  }

  isUserAuthenticated():boolean{
    return !!this.getToken()
  }


}
