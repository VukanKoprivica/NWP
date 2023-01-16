import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  Name:string='';
  cardNumber:string='';
  ExpirationDate:string='';
  SecurityCode:string='';
  selectedButton: any ;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  
  toggleSelect(button: any) {
      if (button == this.selectedButton) {
          this.selectedButton = undefined
      } else {
          this.selectedButton = button
      }
  }

  subscribe(){
    this.userService.subscribe(this.Name,this.cardNumber,this.ExpirationDate,this.SecurityCode).subscribe((resp)=>{
      alert(resp.msg);
      localStorage.setItem("token",resp.token);
      this.router.navigate(['/news/list'])

    })
  }

}
