import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../model/TeamModel';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  BACK_BASE = "http://localhost:8080/api" ;

  constructor(private httpClient:HttpClient) { }

  getTeams():Observable<TeamModel[]>{
    return this.httpClient.get<TeamModel[]>(this.BACK_BASE+'/teams');

  }
  getTeam(teamID:string):Observable<TeamModel>{
    return this.httpClient.post<TeamModel>(this.BACK_BASE+'/team',teamID);

  }
  
}
