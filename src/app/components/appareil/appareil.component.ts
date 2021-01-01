import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName:String="machine a laver";
  @Input() appareilName:string;
  @Input() appareilStatus:string;
  @Input() indexOfAppareil:number;
  @Input() id:number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }

  getStatus():string{
    return this.appareilStatus
  }

  getColor(){
    if(this.appareilStatus ==='allumé'){
      return 'green'
    }else if (this.appareilStatus === "eteint"){
      return 'red'
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }
}
