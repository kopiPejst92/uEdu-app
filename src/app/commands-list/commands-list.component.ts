import { Component, OnInit } from '@angular/core';
import { Command } from '../models/command';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {
  commandsList: Command[] = [];

  command: Command={
    id:1,
    name: "Creating project",
    function:"ng new appointment",
    syntax:"ng new [project_name]",
    tags:["project_name"],
    framework:"Angular",
    logo:"angular-icon.png"
  }
  
  constructor(public router: Router){
    
  }

  ngOnInit(): void {
   /* just to check listing */
    this.commandsList.push(this.command);
  }
 
  }

