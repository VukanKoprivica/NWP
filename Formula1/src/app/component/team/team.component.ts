import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamModel } from 'src/app/model/TeamModel';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  @Input() public team:TeamModel; 

  constructor(private teamService:TeamService,private router:ActivatedRoute) {
    this.team={
      championshipsC:0,
      championshipsD:0,
      description:"",
      driver1:"",
      driver2:"",
      engines:"",
      imageURL:"",
      name:"",
      nationality:"",
      points:0,
      polPozition:0,
      position:0,
      teamID:0,
      wins:0,
      yearChampionshipsC:"",
      yearChampionshipsD:""
    }
   }

  ngOnInit(): void {
    const teamID=this.router.snapshot.paramMap.get('teamID');
    this.teamService.getTeam(teamID!).subscribe(team=>this.team=team);
  }

}
