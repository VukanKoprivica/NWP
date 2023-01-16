import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
 

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  login(){
    this.userService.login(this.username,this.password).subscribe((resp)=>{
      alert(resp.msg);
      localStorage.setItem("token",resp.token);
      this.router.navigate(['/news/list'])

    })

  }

}
