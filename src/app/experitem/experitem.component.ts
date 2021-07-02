import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from '../experience/experience.interfaces';

@Component({
  selector: 'app-experitem',
  templateUrl: './experitem.component.html',
  styleUrls: ['./experitem.component.css']
})
export class ExperitemComponent implements OnInit {
  @Input() 'item': IExperience
  constructor() { }

  ngOnInit(): void {
  }

}
