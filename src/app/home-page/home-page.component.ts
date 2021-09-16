import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public homeIntro = "DOWN \nFOR \nFIXIN";
  
  constructor() {}

  ngOnInit(): void {
  }

  scrollToNyGiants(){
    document.getElementById("ny-giants-container").scrollIntoView();
  }

  scrollToWashNats(){
    document.getElementById("wash-nats-container").scrollIntoView();
  }

  scrollToDiscGolf(){
    document.getElementById("disc-golf-container").scrollIntoView();
  }
}
