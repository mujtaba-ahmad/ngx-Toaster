import { Injectable, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Itoast } from './Itoast';

@Injectable ()

export class ToasterService {
    uniqueCounter: number = 0;
    private toast: Itoast;
    private toastsEmitter: BehaviorSubject<Itoast> = new BehaviorSubject(this.toast);

    getAllToasts(): Observable<Itoast> {
        return this.toastsEmitter.asObservable();
    }
    default(options: string|number): void {
        this.add(options,'',true, 0, 'default');
    }
    info(title: number|string, msg: number|string, showClose:boolean, timeout: number): void {
        this.add(title, msg, showClose, timeout, 'info');
    }
    success(title: number|string, msg: number|string, showClose:boolean, timeout: number): void {
        this.add(title, msg, showClose, timeout, 'success');
    }
    wait(title: number|string, msg: number|string, showClose:boolean, timeout: number): void {
        this.add(title, msg, showClose, timeout, 'wait');
    }
    error(title: number|string, msg: number|string, showClose:boolean, timeout: number): void {
        this.add(title, msg, showClose, timeout, 'error');
    }
    warning(title: number|string, msg: number|string, showClose:boolean, timeout: number): void {
        this.add(title, msg, showClose, timeout, 'warning');
    }

  private add (title: number|string, msg: number|string, showClose:boolean, timeout: number, type: string) {
      
    if (!title && !msg) {
      throw new Error('ng2-toaster: No toast title or message specified!');
    }
    this.uniqueCounter++;
    let toast: Itoast = <Itoast>{
        id       : this.uniqueCounter,
        title    : title,
        msg      : msg,
        showClose: showClose,
        type     : 'toaster-type-' + type,
        timeout  : timeout
    };
    this.toastsEmitter.next(toast);
  }
}
