import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toast/toaster.component';
import { ToasterService } from './toast/toaster.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ToastComponent, ToasterComponent ],
  providers: [ ToasterService ],
  bootstrap:    [ AppComponent ]
})
export class ToasterModule { }