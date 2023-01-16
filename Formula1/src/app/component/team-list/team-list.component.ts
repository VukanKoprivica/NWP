import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from 'src/app/model/TeamModel';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teams!:Observable<TeamModel[]>;

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {

    this.teams=this.teamService.getTeams();
  }


  displayedColumns: string[] = ['position', 'name','engines', 'drivers','points'];
  dataSource=this.teams;
}
