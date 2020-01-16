import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule,NgbPagination} from '@ng-bootstrap/ng-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadListComponent } from './components/bread-list/bread-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { ApiService } from './service/api/api.service';
import {BreedService} from './service/breed/breed.service';
import {AuthenticationService} from './service/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,

    BreadListComponent,
    LoginComponent,
    RegisterComponent,
    BreedDetailComponent,MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,HttpClientModule,FormsModule
  ],
  providers: [ApiService,AuthenticationService,BreedService,DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
