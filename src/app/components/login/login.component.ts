import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { BreedService } from 'src/app/service/breed/breed.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
btnDisabled:boolean= false;
  loginUser:{email:string,password:string}={email:"",password:""};
  constructor(private router:Router,private dataSer:DataService,private auth:AuthenticationService) { }

  ngOnInit() {
  }

  valdiate(){
    if (this.loginUser.email) {
        if (this.loginUser.password) {
              return true;
        } else {
            this.dataSer.error("passoword is not entered");
        }
    } else {
    this.dataSer.error("Email in not entered"); 
    }
  }
   login(){
    this.btnDisabled = true;
    try {
      if(this.valdiate()) {
          this.auth.PostLogin(this.loginUser).subscribe((data)=>{
            // console.log("keeyy",data);
            if (data['success']) {
                localStorage.setItem('token',data['token']);
                this.router.navigate(['/']);
            }else{
              
              this.dataSer.error(data['message']);
              console.log("esle erro");
              
            }
            
          },(err)=>{
            this.dataSer.error(err['message']);
            
          });
       
      }
    } catch (error) {
      this.dataSer.error(error['message']); 
      console.log("errorin catch");
      
    }
      this.btnDisabled=false;
  } 
}
