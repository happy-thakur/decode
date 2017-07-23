import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // to togg;e nav class..
  toggleNav() {
    console.log("nav");
    $('nav.main-menu').toggleClass('happ-nav-toggle');
  }



}
