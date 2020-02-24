This is a Web app to book the conference room for meeting which contains the following components
->Homepage asking the details of the conference room to book and checks the availability of the requested slot and books if there is availability
->View is the page where all the booking are displayed in the calendar 
->Cancel is the page where the bookings are displayed in cards and user can cancel their own booking 
->Login for authentication still pending

Modules used till now: 
->FireStore
    ng add @angular/fire@next( and comment the error part in analytics.d.ts and do not import angulart angularanalyticsmodule )
    Follow the link to installation.https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
->Angular material
    ng add @angular/material
->fullcalendar/angular
    npm install --save @fullcalendar/angular @fullcalendar/core @fullcalendar/daygrid


    