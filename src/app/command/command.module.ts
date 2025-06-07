import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommandFormComponent } from '../command-form/command-form.component';
import { CommandsListComponent } from '../commands-list/commands-list.component';


@NgModule({
  declarations: [
    CommandFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CommandModule { }
