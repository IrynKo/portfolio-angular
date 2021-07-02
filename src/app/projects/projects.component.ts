import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IProject } from './project.interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[]=[];

  constructor( private dataService: DataService) {
   
   }

  ngOnInit(): void {
    this.dataService.getProject()
        .subscribe((projects: IProject[]) => {
          this.projects = projects;})
  }

}
