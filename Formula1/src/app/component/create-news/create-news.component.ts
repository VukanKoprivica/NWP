import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  
    contetn:string  =""
    date:string= ""
    header:string=""
    imageURL:string=""
  constructor(private newsService:NewsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  create(){
    this.newsService.create(this.contetn,this.date,this.header,this.imageURL).subscribe((resp)=>{
      alert(resp.msg);

    })
  }

}
