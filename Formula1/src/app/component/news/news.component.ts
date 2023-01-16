import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/NewsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() public news : NewsModel;

  constructor(private NewsService:NewsService,private router:ActivatedRoute) { 
    this.news={
      newsID:0,
      contetn:"",
      date:"",
      header:"",
      imageURL:""
    }
  }

  ngOnInit(): void {
    const newsID = this.router.snapshot.paramMap.get('newsID');
    this.NewsService.getNews1(newsID!).subscribe(news=> this.news=news);
  }
  

}
