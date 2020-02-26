import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
value:any;
buf=1;
gateway=false;
date:any[];
calendarPlugins=[dayGridPlugin]
tm:any;
Events:any[]=[
  {
    start:'2020-02-18',
    title:'You have come long Back'
  },]

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.ReadData();

  }

  ReadData(){
    return this.db.collection("testdata").valueChanges()
    .subscribe(val=>{
     console.log(val);
     this.value=val;
     console.log(this.value[0]["Name"])
     this.CreateJson();
   });
     }
 
  CreateJson(){
    console.log(this.value["length"])
    for(let i=0;i<this.value["length"];i++){
    this.date=this.value[i]["Date"].split("-",3)
    console.log(this.date)
    
    this.Events[this.buf]={
      
      start:this.date[2]+'-'+this.date[0]+'-'+this.date[1],
      title:this.value[i]["Time.hour"]+":"+this.value[i]["Time.min"]+" - "+this.value[i]["Meeting"]
    }
    this.buf++;
    console.log(this.Events)
    this.gateway=true;
  }
  }
    
}
