import { Component } from '@angular/core';
import { Command } from '../models/command';

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent {
  commandsList: Command[] = [];
  
  constructor(){
    
  }
 
  }

