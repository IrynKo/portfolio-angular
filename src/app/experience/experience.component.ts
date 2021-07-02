import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

import { IExperience } from './experience.interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: IExperience[]=[];

  constructor( private dataService: DataService) {
   
   }

  ngOnInit(): void {
    this.dataService.getExperiences()
        .subscribe((experiences: IExperience[]) => {
          this.experiences = experiences;})
  }
}

