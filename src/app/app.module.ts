import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToasterModule } from './modules/toaster.module';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToasterModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
