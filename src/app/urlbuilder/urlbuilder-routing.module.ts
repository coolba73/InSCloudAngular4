import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleurlComponent } from './singleurl.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'UrlBuilder'
    },
    children: [
      {
        path: 'singleurl',
        component: SingleurlComponent,
        data: {
          title: 'Single URL'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class URLBuilderRoutingModule {}
