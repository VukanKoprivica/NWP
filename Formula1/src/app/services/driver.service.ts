import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { arhive } from '../model/arhive';
import { DriverModel } from '../model/DriverModel';
import { raceTypeModel } from '../model/raceTypeModel';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  BACK_BASE = "http://localhost:8080/api"  

  constructor(private HttpClient: HttpClient) { }


  getDrivers () :Observable<DriverModel[]>{
   

    return this.HttpClient.get<DriverModel[]>(this.BACK_BASE+"/drivers") ;
  }

  getDriver(driverID:string):Observable<DriverModel>{

    return this.HttpClient.post<DriverModel>(this.BACK_BASE+"/driver",driverID);
  }

  getTypes():Observable<raceTypeModel[]>{
    return this.HttpClient.get<raceTypeModel[]>(this.BACK_BASE+"/type");
  }
  getResults(typeID:string,year:string):Observable<arhive[]>{
    return this.HttpClient.post<arhive[]>(this.BACK_BASE+"/past",{typeID,year});
  }
  
}
