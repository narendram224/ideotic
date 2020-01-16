import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import {Register} from '../register/register';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  NewUser:Register={
        email:'',
        password:'',
        password1:'',
        name:'',
        isSeller:false
  }
  btndisabled: boolean;
  constructor(private auth:AuthenticationService,private dataservice:DataService,private router:Router) { }

  ngOnInit() {
  }

    validateForm(){
        if (this.NewUser.name) {
            if (this.NewUser.email) {
                if (this.NewUser.password) {
                    if (this.NewUser.password1) {
                        if (this.NewUser.password===this.NewUser.password1) {
                              return true;
                        } else {
                          this.dataservice.error("password doed not match");
                        }
                    } else {
                      this.dataservice.error("conform passwor is mendotary");
                    }
                } else {
                  this.dataservice.error("password is not enter");
                }
            } else {
              this.dataservice.error("email is requied");
            }
        } else {
            this.dataservice.error("Name is required");
        }
    }
    async register(){
      this.btndisabled=true;
      try {
          if (this.validateForm()) {
                await this.auth.postRegister(
                {
                  name:this.NewUser.name,
                  email:this.NewUser.email,
                  password:this.NewUser.password,
                  isSeller:this.NewUser.isSeller
                }
              ).subscribe((data)=>{
                if(data['success']){
                  localStorage.setItem('token',data['token']);
                  this.router.navigate(['']);
                  this.dataservice.success("Register sucessfully");
              }else{
                this.dataservice.error(data['message']);
              }
              },(err)=>{
                this.dataservice.error(err['error']['message']);
                console.log(err);
                
                
              });
              
          }
          
      } catch (error) {
          this.dataservice.error(error['error']);
      }
      this.btndisabled =false;
    }

}
