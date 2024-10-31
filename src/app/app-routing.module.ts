import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsListComponent } from './commands-list/commands-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home_page',pathMatch: 'full'},
  {path: 'commands', component:CommandsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
