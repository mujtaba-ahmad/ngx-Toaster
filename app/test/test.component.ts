import { Component } from '@angular/core';
import { IToast } from '../toast/toast'
import { IToastComponent } from '../itoast/itoast.component'

@Component({
  selector: 'test',
  templateUrl: 'app/test/test.component.html'
})

export class TestComponent
{
  toast:IToast;

  addToast(): void{
    this.toast = <IToast>{
      title: "different",
      msg: "different msg3",
      showClose: true,
      timeout: 0,
      theme: "bootstrap",
      type: "error"
    };
  }

  addToast1(): void{
    this.toast = <IToast>{
      title: "differenfdgfsdst",
      msg: "different msg3dsfsdfsd",
      showClose: true,
      timeout: 5000,
      theme: "material",
      type: "wait"
    };
  }
}