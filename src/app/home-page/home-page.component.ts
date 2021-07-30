import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public title: string = 'McCotter.net';
  public homeIntro = "Welcome to \nmccotter.net!! \nTake a look around.";
  
  constructor() {}

  ngOnInit(): void {
  }

}
