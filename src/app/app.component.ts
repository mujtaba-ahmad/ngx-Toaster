import { Component, OnInit } from '@angular/core';
import { ToasterService } from './modules/services/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public _toaster: ToasterService) {}

  addToast(){
    // See all possible types in one shot.
    // pass parameters as (title:string, message:string, show_close_button:boolean, timeout:number)
    // this._toaster.wait('title', 'message', true, 0);
  }
  ngOnInit(){
  }
  addMore(){
    this._toaster.warning('Warning', 'message', true, 1000);
    this._toaster.info('Information', 'message3', true, 2000);
    this._toaster.success('Success', 'message1', true, 3000);
    this._toaster.error('Error', 'message2', true, 4000);
    this._toaster.wait('Wait', 'message', true, 5000);
  }
}
