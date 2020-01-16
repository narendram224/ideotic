import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ideo';
  isCollapsed=true;
  constructor(private auth:AuthenticationService,private router:Router){}
  public getToken(){
    return localStorage.getItem('token');
  }
  collapse(){
    this.isCollapsed =true;

  }

  closeDropDown(dropdown){
    dropdown.close();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
