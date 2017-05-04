import { Component, OnInit } from '@angular/core';
import { UserService } from "../../Services/user.service";
import { Router } from "@angular/router";
import { FullLayoutComponent } from "../layouts/full-layout.component";

@Component({
  templateUrl: 'login.component.html'
  ,providers:[UserService]
})
export class LoginComponent implements OnInit {

  Email;
  Password;  

  UserCheck  = true;

  constructor(
    private _userSvc : UserService,
    private _router : Router
  ) 
  { }

  ngOnInit(){
        UserService.UserName = '';
        UserService.UserID = '';
  }


  btnLogin_Click()
  {
    this._userSvc.LogIn(this.Email, this.Password).subscribe(
      data => {
        console.log(data.value);
        
        console.log( "EMail Domain : " + data.value.eMailDomain);
        console.log( "EMail ID : " + data.value.eMailID);
        console.log( "User Name : " + data.value.userName);
        console.log( "User ID : " + data.value.userId);

        UserService.UserName = data.value.userName;
        UserService.UserID = data.value.userId;

        if (UserService.UserID === null)
        {
            this.UserCheck = false;
        }
        else
        {
          this._router.navigate(['/main/main'])
        }
          

      }
      ,error => console.log( "Error : " + error)
    );

    
  }

  check(){
    return false;
  }

}//class
