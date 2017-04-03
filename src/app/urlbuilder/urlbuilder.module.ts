import { NgModule } from '@angular/core';

import {SingleurlComponent} from './singleurl.component'
import {MultiUrlComponent} from './multiurl.component'

import { URLBuilderRoutingModule } from './urlbuilder-routing.module';

@NgModule({
  imports: [ URLBuilderRoutingModule ],
  declarations: [
    SingleurlComponent,
    MultiUrlComponent
  ]
})
export class URLBuilderModule { }
