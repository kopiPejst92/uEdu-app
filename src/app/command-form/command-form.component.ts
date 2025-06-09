import { Component, OnInit } from '@angular/core';
import { Command } from '../models/command';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../command/command.service';


@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.css'],

})
export class CommandFormComponent implements OnInit{
  newCommandForm: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private commandService: CommandService
    ) {

    }

  ngOnInit(): void {
      this.newCommandForm = this.formBuilder.group({
        commandName: ['', Validators.required],
        // language: ['', Validators.required],
        // library: ['', Validators.required],
        // flags: ['', [Validators.required, Validators.email]],
        // tags: ['', [Validators.required, Validators.email]],
      })
  }

  // let id = this.activatedRoute.snapshot.paramMap.get('id')

  onSubmit(): void {
  }
}
