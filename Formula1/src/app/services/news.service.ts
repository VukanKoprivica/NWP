import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../model/NewsModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BACK_BASE = "http://localhost:8080/api" ;
  constructor(private HttpClient:HttpClient) { }

  getNews():Observable<NewsModel[]>{
    return this.HttpClient.get<NewsModel[]>(this.BACK_BASE+'/news');
  }
  getNews1(newsID:string):Observable<NewsModel>{
    return this.HttpClient.post<NewsModel>(this.BACK_BASE+"/news1",newsID);
  }
  create(contetn:string,date:string,header:string,imageURL:string):Observable<any>{
    return this.HttpClient.post(this.BACK_BASE+"/createNews",{contetn,date,header,imageURL})
  }
}
