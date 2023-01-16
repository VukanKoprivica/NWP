import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from  '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './component/driver/driver.component';
import { DriverListComponent } from './component/driver-list/driver-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './component/team/team.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { NewsComponent } from './component/news/news.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { ResultsComponent } from './component/results/results.component';
import { TokenInterceptor } from './services/TokenInterceptor';
import { AuthGuard } from './guards/auth.guard';
import { AutGuard } from './guards/aut.guard';
import { SubscribeComponent } from './user/subscribe/subscribe.component';
import { PremiumGuard } from './guards/premium.guard';
import { CreateNewsComponent } from './component/create-news/create-news.component';
import { ArhivaComponent } from './component/arhiva/arhiva.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    DriverListComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    TeamListComponent,
    NewsComponent,
    NewsListComponent,
    ResultsComponent,
    SubscribeComponent,
    CreateNewsComponent,
    ArhivaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule
   

  ],
  providers: [AuthGuard,AutGuard,PremiumGuard,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
