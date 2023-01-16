import { Component, OnInit } from '@angular/core';
import { arhive } from 'src/app/model/arhive';
import { raceTypeModel } from 'src/app/model/raceTypeModel';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-arhiva',
  templateUrl: './arhiva.component.html',
  styleUrls: ['./arhiva.component.css']
})
export class ArhivaComponent implements OnInit {

  public raceType!:raceTypeModel[];
  public selectedType:string="1";
  public typeName:raceTypeModel;
  public selectedYear:string="2021";
  public results!:arhive[];
  public years=[{id:2021},{
    id:2020
  },
    {
      id:2019
    }

  ]

  constructor(private driverService:DriverService) {
    this.typeName ={
      typeID:1,
      name:"Driver Standings"

    }
   }

  ngOnInit(): void {
    this.driverService.getTypes().subscribe(res=>this.raceType=res);
    this.result();
  }

  result(){
    this.results=[];
    this.driverService.getResults(""+this.selectedType+"", ""+this.selectedYear+"").subscribe(res=>this.results=res);
  }
  displayedColumns=["position","name","points"];

}
