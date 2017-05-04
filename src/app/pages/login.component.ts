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
        console.log(data.value.eMailDomain);
      }
      ,error => console.log( "Error : " + error)
    );

    
  }

}//class
