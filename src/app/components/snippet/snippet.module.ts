import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SnippetRoutingModule } from './snippet-routing.module';
import { SnippetComponent } from './snippet.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    SnippetComponent,
  ],
  imports: [
    CommonModule,
    SnippetRoutingModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule
  ]
})
export class SnippetdModule { }
