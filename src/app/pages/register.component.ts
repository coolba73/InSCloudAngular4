import { Component } from '@angular/core';
import { UserService } from "../../Services/user.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'register.component.html',
  providers:[UserService]
})
export class RegisterComponent {

  username : string;
  password : string;
  email : string;

  constructor(
    private _userService:UserService,
    private _router : Router
  ) { }


  public btnCreateAccount_Click()
  {
    
    //  let regRe = this._userService.registerUser(this.username, this.email, this.password);

    //  if (regRe)
    //  {
    //     this._router.navigate(['/pages/login'])
    //  }

    this._userService.createUser(this.username, this.email, this.password).subscribe(
      data => 
      {
        this._router.navigate(['/pages/login'])
      },
      error => {
          alert('error');
      }
    );

  }

  public btnFacebookAccount_Click()
  {
    alert('facebook account click');
  }

}
