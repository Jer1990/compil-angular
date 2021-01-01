import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  isAuth:boolean = false;
  //lastUpdate:Date =new Date();
  lastUpdate=new Promise((resolve)=>{
    const date= new Date();
    setTimeout(()=>{
      resolve(date);
    },2000)
  }
  )
  appareilsArray:any[];
  appareilSubscription: Subscription;


  /*appareilOne="machine a laver";
  appareilTwo="tv";
  appareilthree="four";*/

  constructor(private appareilService:AppareilService){
    setTimeout(()=>{
      this.isAuth=true;
    },4000)
  }

  ngOnInit(){
    this.appareilSubscription= this.appareilService.appareilSubject.subscribe((appareils:any[])=>{

      this.appareilsArray=appareils;

    });
    this.appareilService.emitAppareilSubject();
  }

  onClickAllume(){
    this.appareilService.switchOnAll()
  }
  onClickEteindre(){
    this.appareilService.switchOffAll()
  }
  onSave(){
    this.appareilService.saveAppareilServer();
  }

  onFetch(){
    this.appareilService.getAppareilServer();
  }

}
