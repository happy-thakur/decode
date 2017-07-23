import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css', '../../assets/css/style.css']
})
export class SolutionComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  private id: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get the id from the url..

    this.subscriptions.push(this.activatedRoute.params.subscribe((data: any) => {
      this.id = data['id'];
    },
    (err) => console.log(err)));
    console.log(this.id);
  }

  ngOnDestroy() {
    // in this we are destroying all the subscription..
    // and also things which are of no use..
    
     this.subscriptions.forEach((subscription: Subscription) => {
          subscription.unsubscribe();
      });
  }

}
