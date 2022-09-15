import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SnippetComponent } from './snippet.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetComponent,
    data: {
      title: 'snippet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetRoutingModule { }
