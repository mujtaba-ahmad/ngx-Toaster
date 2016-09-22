import {Component, OnChanges, OnInit, Input} from '@angular/core';

import { ToastComponent } from '../toast/toast.component';
import { IToast } from '../toast/toast'

@Component({
  selector: 'itoast',
  templateUrl: 'app/itoast/itoast.component.html'
})

export class IToastComponent implements OnInit, OnChanges {

  limit: number = 5;
  toasts: IToast[];
  @Input() toast:IToast;
  @Input() position: string;
  
  setPositionClass(position: string): string {
    return "toasty-position-" + position;
  }
  ngOnInit(): void {
    this.toasts = [];
    this.position = this.setPositionClass(this.position);
  }
  ngOnChanges(): void {
    if (this.toast)
      this.toasts.push(this.toast);
  }

}
