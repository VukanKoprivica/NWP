import { Component, OnInit } from '@angular/core';
import { race } from 'rxjs-compat/operator/race';
import { raceTypeModel } from 'src/app/model/raceTypeModel';
import { ResultModel } from 'src/app/model/ResultModel';
import { trackModel } from 'src/app/model/trackModel';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public raceType!:raceTypeModel[];
  public tracks!:trackModel[];
  public selectedType:string="1";
  public selectedTrack:string="1";
  public results!:ResultModel[];
  public typeName:raceTypeModel;
  public trackName:trackModel;

  constructor(private resultService:ResultsService) { 
    this.typeName ={
      typeID:1,
      name:"RACE"

    }
    this.trackName ={
      trackID:1,
      name:"Sakhir",
      country:"Bahrain",
      yearEntry:"" ,
      lastWin:"",
      lastPol:"",
      imageURL:"",
      description:""
    }
  }

  ngOnInit(): void {
    this.resultService.getTypes().subscribe(type=>this.raceType=type);
    this.resultService.getTracks().subscribe(track=>this.tracks=track);
    this.result();
  }

  displayedColumns: string[] = ['position', 'driver', 'laps','time'];

  result(){
    this.results=[];
    console.log(this.selectedType);
    this.resultService.getResults("\""+this.selectedType+"\"", "\""+this.selectedTrack+"\"").subscribe(res=>this.results=res);
    this.resultService.getTypeName(this.selectedType).subscribe(res=>this.typeName=res);
    this.resultService.getTrackName(this.selectedTrack).subscribe(res=>this.trackName=res);
  }


}
