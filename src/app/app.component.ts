import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription  } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes:number;
  conterSubscription: Subscription

 
  ngOnInit(){
    const counter = interval(1000);
    this.conterSubscription=counter.subscribe((value:number)=>{
      this.secondes=value;
    })

                                //counter.subscribe(
                                // /*next*/(value:number)=>{
                                //  this.secondes=value;
                                //},
                                ///*error*/(error:any)=>{
                                //  console.log('erreur')
                                // },
                                ///*complete*/()=>{
                                //  console.log('observable completer')
                                //})
    
  }

  ngOnDestroy(): void {
    this.conterSubscription.unsubscribe();
    
  }
}
