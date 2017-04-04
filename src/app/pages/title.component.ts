import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'title.component.html',
   encapsulation: ViewEncapsulation.None
})
export class TitleComponent {

  constructor() { }

  btnClick = function(){
    alert('test');
    //this.router.navigateByUrl('[main]');
    
  }

}