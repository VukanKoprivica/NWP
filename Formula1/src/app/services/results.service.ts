import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { raceTypeModel } from '../model/raceTypeModel';
import { ResultModel } from '../model/ResultModel';
import { trackModel } from '../model/trackModel';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  BACK_BASE = "http://localhost:8080/api" ;

  constructor(private HttpClient:HttpClient) { }

  getTypes():Observable<raceTypeModel[]>{
    return this.HttpClient.get<raceTypeModel[]>(this.BACK_BASE+'/types');

  }
  getTracks():Observable<trackModel[]>{
    return this.HttpClient.get<trackModel[]>(this.BACK_BASE+'/tracks');
  }

  getResults(typeID:string,trackID:string):Observable<ResultModel[]>{
    return this.HttpClient.post<ResultModel[]>(this.BACK_BASE+'/results',{typeID,trackID});

  }

  getTypeName(typeID:string):Observable<raceTypeModel>{
    return this.HttpClient.post<raceTypeModel>(this.BACK_BASE+'/typeName',typeID);
  }

  getTrackName(trackID:string):Observable<trackModel>{
    return this.HttpClient.post<trackModel>(this.BACK_BASE+'/trackName',trackID);
  }
}
