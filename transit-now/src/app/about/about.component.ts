import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Title: string;

  constructor() {
    this.Title = 'Hello Larry and Iain';
  }

  ngOnInit() {
  }

}
