import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Http, Response,HttpModule } from "@angular/http";

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import {TitleComponent} from './title.component';

import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from "@angular/common";



@NgModule({
  imports: [ PagesRoutingModule, FormsModule,HttpModule, CommonModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    TitleComponent
  ]
})
export class PagesModule { }
