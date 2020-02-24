import { BrowserModule } from '@angular/platform-browser';
import {FullCalendarModule} from '@fullcalendar/angular'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CancelComponent } from './cancel/cancel.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

var firebaseConfig = {
  apiKey: "AIzaSyCLIjIcs4he-ZFBWtgvnC8X2o932rb1B7E",
  authDomain: "reserve-5b4b8.firebaseapp.com",
  databaseURL: "https://reserve-5b4b8.firebaseio.com",
  projectId: "reserve-5b4b8",
  storageBucket: "reserve-5b4b8.appspot.com",
  messagingSenderId: "368862188121",
  appId: "1:368862188121:web:d2c80b69d0e38a8c221748",
  measurementId: "G-86P39CJWL4"
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    FullCalendarModule,
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
