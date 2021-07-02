import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IAbout } from './about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: IAbout[]=[];

  constructor( private dataService: DataService) {
   
   }

  ngOnInit(): void {
    this.dataService.getAbout()
        .subscribe((about: IAbout[]) => {
          this.about = about;})
  }
}
