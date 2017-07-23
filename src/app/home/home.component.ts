import { Component, OnInit } from '@angular/core';

declare var particleInit: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/css/theme-MariBlue.css']
})
export class HomeComponent implements OnInit {

  tempArr: Array<String> = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

  constructor() { }

  ngOnInit() {
    // particleInit(); 
    // setTimeout(() => {
    //   particleInit();
    // }, 80);
  }

  toggleLeft() {
    $('div#leftSide').toggleClass('happ-toggle-left');
    $('div.happ-web-menubar').toggleClass('happ-right');
  }
}
