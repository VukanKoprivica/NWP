import { Component, OnInit } from '@angular/core';


import { Observable, Subject } from 'rxjs';

import { DriverModel } from 'src/app/model/DriverModel';
import { DriverService } from 'src/app/services/driver.service';




@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  public drivers! : Observable<DriverModel[]>;
  
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadProductsList: Subject<void> = new Subject();

  constructor(private driverService:DriverService) { }

  ngOnInit(): void {
    this.drivers=this.driverService.getDrivers();
  }

  
  displayedColumns: string[] = ['position', 'driver', 'nationality','team','points'];
  dataSource=this.drivers;

}
