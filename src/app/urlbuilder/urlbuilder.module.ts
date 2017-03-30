import { NgModule } from '@angular/core';

import {SingleurlComponent} from './singleurl.component'

import { URLBuilderRoutingModule } from './urlbuilder-routing.module';

@NgModule({
  imports: [ URLBuilderRoutingModule ],
  declarations: [
    SingleurlComponent
  ]
})
export class URLBuilderModule { }
