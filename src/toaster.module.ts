import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ToasterAppComponent }   from './toaster-app.component';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toast/toaster.component';
import { ToasterService } from './toast/toaster.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ToasterComponent, ToastComponent, ToasterAppComponent],
  providers: [ ToasterService ]
})
export class ToasterModule { }