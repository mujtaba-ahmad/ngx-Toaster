import { Component } from '@angular/core';

import { ToastComponent } from './toast/toast.component';
import { Itoast } from './toast/Itoast';
import { ToasterService } from './toast/toaster.service';
import { ToasterComponent } from './toast/toaster.component';

@Component({
    selector: 'toaster',
    template: `<h1>Angular toaster</h1>
    <button (click)="addToast()">Add success Toast</button><button (click)="addErrorToast()">Add error Toast</button>
                <ng2-toaster [position]=position [theme]=theme ></ng2-toaster>`,
    providers: [ ToasterService ]
})
export class ToasterAppComponent {
    public position;
    public theme;
    constructor(private _toaster: ToasterService) {
       this.position = '';
       this.theme = '';
    }
    addToast() {
        // Add see all possible types in one shot
         this._toaster.success('title', 'message', true, 1000);
         this._toaster.error('title', 'message', true, 2000);
         this._toaster.info('title', 'message', true, 3000);
         this._toaster.warning('title', 'message', true, 4000);
         this._toaster.wait('title', 'message', true, 0);

    }
    addErrorToast() {
        // Add see all possible types in one shot
        this._toaster.success('title', 'message', true, 1000);
        this._toaster.error('title', 'message', true, 2000);
        this._toaster.info('title', 'message', true, 3000);
        this._toaster.warning('title', 'message', true, 4000);
        this._toaster.wait('title', 'message', true, 5000);
          
    }
}