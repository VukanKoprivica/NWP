import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string='';
  lastName:string='';
  username:string='';
  password:string='';
  userType:string='s';


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    this.userService.register(this.firstName,this.lastName,this.username,this.password,this.userType).subscribe((resp)=>{
      alert(resp.msg);
      this.router.navigate(['/login'])
    });
  }


}
