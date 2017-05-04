import { Component } from '@angular/core';
import { UserService } from "../../Services/user.service";

@Component({
  templateUrl: 'login.component.html'
  ,providers:[UserService]
})
export class LoginComponent {

  Email;
  Password;  

  constructor(
    private _userSvc : UserService
  ) 
  { }

  btnLogin_Click()
  {
    this._userSvc.LogIn(this.Email, this.Password).subscribe(
      data => {
        console.log(data.value);
        
        console.log( "EMail Domain : " + data.value.eMailDomain);
        console.log( "EMail ID : " + data.value.eMailID);
        console.log( "User Name : " + data.value.userName);
        console.log( "User ID : " + data.value.userId);

      }
      ,error => console.log( "Error : " + error)
    );

    
  }

}//class
