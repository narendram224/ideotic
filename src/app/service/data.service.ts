import { Injectable } from '@angular/core';
import { Router ,NavigationStart} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  message="";
  messageType='danger';
  user:any;

cartItem=0;
  constructor(private router:Router) { 
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        this.message = '';
      }

    });
    
  }
  error(message){
      this.messageType ='danger';
      this.message = message;
      console.log("datatype",this.message);
      
  }
  success(message){
    this.messageType ='success';
    this.message = message;
}
warning(message){
  this.messageType ='warning';
  this.message = message;
}




}
