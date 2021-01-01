import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService {
    appareilSubject = new Subject<any[]>();

      private  appareilsArray=[]

    constructor(private httpClient:HttpClient) { }

    saveAppareilServer(){
        this.httpClient
        .put('https://http-client-demo-e47a0-default-rtdb.europe-west1.firebasedatabase.app/appareils.json',this.appareilsArray)
        .subscribe(()=>{
            console.log('enr ok')
            
        },
        (error)=>{
            console.log('erreur'  + error)
        }
        )
    }
    getAppareilServer(){
        this.httpClient
        .get<any[]>('https://http-client-demo-e47a0-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
        .subscribe((response)=>{
            this.appareilsArray=response; 
            this.emitAppareilSubject();
        },
        (error)=>{
            console.log('erreur' + error)
        }
        )
    }

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareilsArray.slice());
    }

    switchOnAll(){
        for(let appareil of this.appareilsArray){
            appareil.status = 'allumé'
        }
        this.emitAppareilSubject();
    }

    switchOffAll(){
        for(let appareil of this.appareilsArray){
            appareil.status = 'eteint'
        }
        this.emitAppareilSubject();

    }
    switchOnOne(i:number){
        this.appareilsArray[i].status='allumé'
        this.emitAppareilSubject();

    }
    
    switchOffOne(i:number){
        this.appareilsArray[i].status='eteint'
        this.emitAppareilSubject();

    }

    getAppareilById(id:number){
        const appareil= this.appareilsArray.find((appareilObject)=>{
            return appareilObject.id === id;
        })
        this.emitAppareilSubject();

        return appareil
    }

    addAppareil(name:string,status:string){
        const newAppareil={
            id:0,
            name:'',
            status:''
        };
        newAppareil.name=name;
        newAppareil.status=status;
        newAppareil.id= this.appareilsArray[(this.appareilsArray.length-1)].id+1;
        
        this.appareilsArray.push(newAppareil);
        this.emitAppareilSubject();

    }
}

