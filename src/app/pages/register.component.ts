import { Component } from '@angular/core';
import { UserService } from "../../Services/user.servicie";

@Component({
  templateUrl: 'register.component.html',
  providers:[UserService]
})
export class RegisterComponent {

  username : string;
  password : string;
  email : string;

  constructor(private _userService:UserService) { }


  public btnCreateAccount_Click()
  {
    alert( this._userService.registerUser(this.username, this.email, this.password) );


    // this.username = "";
    // this.email = "";
    // this.password = "";


    // alert( 
    //       `
    //       username : ${this.username}  
    //       email    : ${this.email}  
    //       password : ${this.password}
    //       ` 
    // );


  }

  public btnFacebookAccount_Click()
  {
    alert('facebook account click');
  }

}
