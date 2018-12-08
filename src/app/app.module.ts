import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
 import { FilterPipe } from './search-name.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
