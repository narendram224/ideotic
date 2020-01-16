import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { BreedService } from 'src/app/service/breed/breed.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit {
  BreedImg:string='';
  constructor(private activatedRoute:ActivatedRoute,private breedService:BreedService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param)=>{
        this.breedService.postNewScreen(param.get('breedName')).subscribe((img:any)=>{
            this.BreedImg = img;
        })
    })
  }

}
