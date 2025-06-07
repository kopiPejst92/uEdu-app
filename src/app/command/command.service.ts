import { Injectable } from '@angular/core';
import { Command } from '../models/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private command: Command[]=[];
  
  constructor() { }
}
