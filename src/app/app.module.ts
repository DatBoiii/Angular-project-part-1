import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AngularAnimalLabComponent } from './angular-animal-lab/angular-animal-lab.component';
import {FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AngularAnimalLabComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
