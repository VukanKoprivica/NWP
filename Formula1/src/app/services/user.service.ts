import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  BACK_BASE="http://localhost:8080/api/user"
  constructor(private HttpClient:HttpClient) { }


  login(username:string ,password:string): Observable<any> {
    console.log(username,password)
    return this.HttpClient.post(this.BACK_BASE+'/login', {
       username,
       password

    })
    
  }

  register(firstName:string,lastName:string,username:string,password:string,userType:string):Observable<any>{
    return this.HttpClient.post(this.BACK_BASE+'/register',{
      firstName,lastName,username,password,userType
    })
  }

  subscribe(Name:string,cardNumber:string,ExpirationDate:string,SecurityCode:string):Observable<any>{
    return this.HttpClient.post(this.BACK_BASE+'/subscribe',{Name,cardNumber,ExpirationDate,SecurityCode})
  }

}
