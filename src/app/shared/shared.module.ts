import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    FontAwesomeModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
