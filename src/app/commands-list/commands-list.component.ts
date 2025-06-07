import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from '../models/command';

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {
  commandsList: Command[] = [];

  command: Command = {
    id: 1,
    name: "Creating project",
    function: "ng new appointment",
    syntax: "ng new [project_name]",
    tags: ["project_name"],
    framework: "Angular",
    logo: "angular-icon.png"
  }

  command2: Command = {
    id: 2,
    name: "Running up in browser",
    function: "ng serve --open",
    syntax: "ng serve [project_name]",
    tags: ["open"],
    framework: "Angular",
    logo: "angular-icon.png"
  }

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.commandsList.push(this.command);
    this.commandsList.push(this.command2);
  }

  loadCommandFromJson(pathFile: string){
    
  }

}

