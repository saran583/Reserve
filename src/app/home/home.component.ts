import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import dayGridPlugin from '@fullcalendar/daygrid';
import {FormsModule , FormControl, Validators} from '@angular/forms';
import 'firebase/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  NameValidation = new FormControl('', Validators.required);
  MeetingValidation = new FormControl('', Validators.required);
  TowerValidation = new FormControl('', Validators.required);
  FloorValidation = new FormControl('', Validators.required);
  WingValidation = new FormControl('', Validators.required);
  HourValidation = new FormControl('', Validators.required);
  MinValidation = new FormControl('', Validators.required);
  tm:any;
  array: number[] = [0,1,2,3,4,5,6,7];
  num=0;
  date:any[];
Month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  calendarPlugins=[dayGridPlugin]
  name:any;
  res:any;
  buf="Not Yet Changed";
  val:string;
  val1:string;
  val2:string;
  val3:any;
  hours:any;
  minute:any;
  Meeting:any;
  value:any;
  viewdate="";
  hour = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  min = [0,30];
  valid=0;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  Towers = ['S1','S2','S3'];
  Wings = ['A','B','C','D']
  Floors = ['first floor','Second floor','Third Floor','Fourth Floor'];
  fill=0;


  constructor(private db: AngularFirestore) { 

  }

  ngOnInit() {
    this.ReadData();
  }
send(){
  var a;
  a  = this.val3.toString();
    var b = a.substr(4, 11);
    a=b;
    this.date=b.split(" ",3)
      b="";
      for (let i=0;i<this.Month.length;i++){
        this.num++;
        if(this.date[0] === this.Month[i]){
          if(i<10){
            this.date[0]="0"+this.num.toString();  
            this.num=0;
            break;
          } 
          this.date[0]=this.num.toString();
          this.num=0;
          break;
        }
      } 
      b=this.date[0]+"-"+this.date[1]+"-"+this.date[2];

    
    console.log(b);

    for(let i=0;i<this.value["length"];i++){
      this.valid=0;
      if(this.value[i]["Tower"]==this.val)
      this.valid++;
      if(this.value[i]["Floor"]==this.val1)
      this.valid++;
      if(this.value[i]["Wing"]==this.val2)
      this.valid++;
      if(this.value[i]["Date"]==b)
      this.valid++;
      if(this.value[i]["Time.hour"]==this.hours)
      this.valid++;
      if(this.value[i]["Time.min"]==this.minute)
      this.valid++; 
      if(this.valid==6){
        this.res=" Sorry, Meeting already booked for this time, Please try for another time"
        break;
      }     
    }
    if(this.valid==6){
      this.res=" Sorry, Meeting already booked for this time, Please try for another time"
    }
    else{
      // this.date=b.split(" ",3)
      // b="";
      // for (let i=0;i<this.Month.length;i++){
      //   this.num++;
      //   if(this.date[0] === this.Month[i]){
      //     if(i<10){
      //       this.date[0]="0"+this.num.toString();  
      //       this.num=0;
      //       break;
      //     } 
      //     this.date[0]=this.num.toString();
      //     this.num=0;
      //     break;
      //   }
      // } 
      // b=this.date[0]+"-"+this.date[1]+"-"+this.date[2];


      this.tm=Date.now().toString();
       this.res= this.db.collection("testdata").doc(this.tm).set({"UID":this.tm,"Name":this.name,"Meeting":this.Meeting,"Tower":this.val,"Floor":this.val1,"Wing":this.val2,"Date":b,"DateView":a,"Time.hour":this.hours,"Time.min":this.minute});
      console.log(this.res.toString());
      if(this.res.toString()=="[object Promise]")
      {
        this.name="";
        this.NameValidation.markAsUntouched();
        this.Meeting="";
        this.MeetingValidation.markAsUntouched();
        this.val="";
        this.val1="";
        this.val2="";
        this.val3="";
        this.hour=null;
        this.minute=null;
        this.res="Meeting Booked Successfully"
      }
    }
    
 //this.db.collection("testdata").doc(this.name).collection(this.Meeting).doc(b).set({"Name":this.name,"Meeting":this.Meeting,"Tower":this.val,"Floor":this.val1,"Wing":this.val2,"Date":b,"Time.hour":this.hours,"Time.min":this.minute});
}

arrayOne(){
  for(let i=0;i<this.value["length"];i++){
    this.array[i]=i;
    console.log(this.array[i]);
  }
    return this.array.slice(0,this.value["length"]);
}

ReadData(){
  return this.db.collection("testdata").valueChanges()
  .subscribe(val=> this.value=val );
   }


   Something(){
     this.buf="Changed";
     var a;
     a  = this.val3.toString();
     this.viewdate = a.substr(4, 11);
   }
}
