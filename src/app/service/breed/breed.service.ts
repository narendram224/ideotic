import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  breed="https://dog.ceo/api/breeds/list/all";
  breedImg = "https://dog.ceo/api/breed//images/random"
  constructor(private http:HttpClient) { }

  getAllBreed(){
     return this.http.get(this.breed);
  }
  postNewScreen(body:string){
      if (body.includes('-')) {
          let str=body.split('-');
       return this.http.get(`https://dog.ceo/api/breed/${str[0]}/${str[1]}/images/random`);
      }else return this.http.get(`https://dog.ceo/api/breed/${body}/images/random`);
     
  }
}
