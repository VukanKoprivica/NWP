import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArhivaComponent } from './component/arhiva/arhiva.component';
import { CreateNewsComponent } from './component/create-news/create-news.component';
import { DriverListComponent } from './component/driver-list/driver-list.component';
import { DriverComponent } from './component/driver/driver.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { NewsComponent } from './component/news/news.component';
import { ResultsComponent } from './component/results/results.component';
import { TeamListComponent } from './component/team-list/team-list.component';
import { TeamComponent } from './component/team/team.component';
import { AutGuard } from './guards/aut.guard';
import { AuthGuard } from './guards/auth.guard';
import { PremiumGuard } from './guards/premium.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SubscribeComponent } from './user/subscribe/subscribe.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'driver/list',component:DriverListComponent,canActivate : [AutGuard]},
  {path:'driver/:driverID',component:DriverComponent,canActivate : [AuthGuard]},
  {path:'team/list',component:TeamListComponent,canActivate : [AutGuard]},
  {path:'team/:teamID',component:TeamComponent,canActivate : [AuthGuard]},
  {path:'news/list',component:NewsListComponent},
  {path:'news/:newsID',component:NewsComponent,canActivate : [AuthGuard]},
  {path:'results',component:ResultsComponent, canActivate : [AutGuard]},
  {path:'subscribe',component:SubscribeComponent,canActivate:[PremiumGuard]},
  {path:'addStory',component:CreateNewsComponent},
  {path:'arhive',component:ArhivaComponent,canActivate : [AutGuard]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
