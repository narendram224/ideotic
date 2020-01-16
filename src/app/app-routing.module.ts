import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadListComponent } from './components/bread-list/bread-list.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'breed',pathMatch:'full'},
  {path:'breed',component:BreadListComponent,canActivate:[AuthGuard]},
  {path:'detail/:breedName',component:BreedDetailComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
