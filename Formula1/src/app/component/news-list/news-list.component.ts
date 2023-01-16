import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from 'src/app/model/NewsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public newsList!:NewsModel[];
  public isVisible=false;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news=> this.newsList=news);
    if(localStorage.getItem("token")=="ADMIN"){
      this.isVisible=true;
    }
  }

  


}
