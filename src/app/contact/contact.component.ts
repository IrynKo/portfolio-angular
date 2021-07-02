import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  "name": string;
  "email": string;
  "phone": string;
  "location": string;

 

  constructor() { }

  ngOnInit(): void {
      this.name = "Iryna Kosynienko";
      this.email = "ikosynienko@gmail.com";
      this.phone = "+46 76 5850 387";
      this.location = "Stockholm, Sweden";
  }

}
