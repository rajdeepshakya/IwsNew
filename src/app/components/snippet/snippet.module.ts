import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SnippetRoutingModule } from './snippet-routing.module';
import { SnippetComponent } from './snippet.component';

@NgModule({
  declarations: [
    SnippetComponent
  ],
  imports: [
    CommonModule,
    SnippetRoutingModule
  ]
})
export class SnippetdModule { }
