import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommandFormComponent } from './command-form/command-form.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch: 'full'},
  {path:'home', component: WelcomeComponent},
  {path: 'new', component: CommandFormComponent},
  {path: 'commands', component:CommandsListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
