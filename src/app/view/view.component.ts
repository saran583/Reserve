import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
value:any;
name="Name";
array: number[] = [0,1,2,3,4,5,6,7];

  constructor(private db: AngularFirestore) { 
    
  }

  ngOnInit() {  
  this.ReadData();

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
   .subscribe(val=>{
    console.log(val);
    this.value=val;
    console.log(this.value[0]["Name"])
  

    
    // Object.keys(val).length
    
    // console.log(val.length);
    // console.log(one);
    // this.value = val;
    
  
  });
    }

Deletedoc(docname){
  this.db.collection("testdata").doc(docname).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

}
}
