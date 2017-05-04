import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};


  constructor(
    private _router : Router
  ){}

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  getUserName()
  {
    return UserService.UserName;
  }

  logOut()
  {
    //alert('logout');
    // FullLayoutComponent.UserName = "";
    // FullLayoutComponent.UserID = "";
    this._router.navigate(['/pages/login'])

  }



  ngOnInit(): void {}
}
