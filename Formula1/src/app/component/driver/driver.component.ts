import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DriverModel } from 'src/app/model/DriverModel';
import { DriverService } from 'src/app/services/driver.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {


  @Input() public driver:DriverModel;
 
  

  constructor(private driverService:DriverService,private router:ActivatedRoute) {
    this.driver={
      careerPoints:0,
      carNumber:0,
      championships:0,
      description:"",
      driverID:0,
      firstName:"",
      imageURL:"",
      lastName:"",
      nationality:"",
      points:0,
      polPozition:0,
      position:0,
      team:"",
      win:0,
      yearBorn:"",
      yearChampionships:""

    }
   }

  ngOnInit(): void {
    const driverID = this.router.snapshot.paramMap.get('driverID');
    this.driverService.getDriver(driverID!).subscribe(driver=> this.driver=driver);

   
  }

  


}
