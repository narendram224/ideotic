import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api:ApiService,private http:HttpClient) { }
  public getToken(){
    return localStorage.getItem('token');
  }
  postRegister(body:any){
    return this.api.post('singup',body);
  }
  PostLogin(body:any){
    return this.api.post('login',body);
  }
}
