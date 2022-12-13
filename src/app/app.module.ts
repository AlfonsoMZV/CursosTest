import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table'  
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgChartsModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [
    { 
      provide: MatDialogRef, 
      useValue: []
       }, 
      { 
      provide: MAT_DIALOG_DATA, 
      useValue: [] 
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
