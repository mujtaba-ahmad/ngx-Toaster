import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ToastComponent } from './toast/toast.component'
import { TestComponent } from './test/test.component'
import { IToastComponent } from './itoast/itoast.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ToastComponent, TestComponent, IToastComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }