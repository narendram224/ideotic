import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/service/breed/breed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-list',
  templateUrl: './bread-list.component.html',
  styleUrls: ['./bread-list.component.scss']
})
export class BreadListComponent implements OnInit {
  AllBreds:any[]=[];
  mo: any[];
  page = 10;
  sliceA: any[];

  constructor(private breedService:BreedService,private router:Router) { }

  ngOnInit() {
   this.breedService.getAllBreed().subscribe((breeds:any)=>{
        for (const key in breeds.message) {
          this.AllBreds.push(key);
          if(this.AllBreds.includes(key) && breeds.message[key].length>0 ){         
                  for (let i = 0; i <  breeds.message[key].length; i++) {
                    const element =  breeds.message[key][i];
                    this.AllBreds.push(key+'-'+element);
                  }
            this.AllBreds.splice( this.AllBreds.indexOf(key),1);
            this.getProduct(1);
          }
        }
         
    });
  }
  getProduct(ev){
         this.sliceA =  this.AllBreds.slice((this.page*ev)-10,this.page*ev);  
  }
     
  GotoDetail(breedName:string){
    this.router.navigate(['detail',breedName]);
  }
}
