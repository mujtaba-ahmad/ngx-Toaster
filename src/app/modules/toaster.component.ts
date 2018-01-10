import { Component, Input, OnInit, OnChanges} from '@angular/core';

import { ToastComponent } from './toast/toast.component';
import { ToasterService } from './services/toaster.service';
import { Itoast } from './interface/itoast';

@Component ({
    selector: 'ngx-toaster',
    template: `<div id="toaster" [ngClass]="[position]">
                    <ngx-toast [theme]=theme *ngFor="let toast of toasts" [toast]="toast" (closeToast)="closeToast(toast)"></ngx-toast>
                </div>`,
    styleUrls: ["./toaster.component.css"]
})
export class ToasterComponent implements OnInit, OnChanges{

    toasts: Array<Itoast>;
    static POSITIONS: Array<String> = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center'];
    static THEMES: Array<string> = ['default', 'material', 'bootstrap'];
    @Input() position: any;
    @Input() theme: any;
    @Input() limit: any;

    constructor(private _toasterService: ToasterService) {
        this.position = 'toaster-position-top-right';
        this.limit = 5;
        this.toasts  = [];
    }

    ngOnInit(): any {
        this._toasterService.getAllToasts().subscribe(
            (toast: Itoast) => {
                if (toast != undefined) {
                    this.toasts.push(toast);
                    if (toast.timeout) {
                        this._setTimeout(toast);
                    }
                }
            }
        );
        this._toasterService.getAllToasts();
    }
    ngOnChanges(): any {
        // this.position = '';
        this.position = ToasterComponent.POSITIONS.indexOf(this.position) > -1 ? this.position : 'top-right';
        this.position = 'toaster-position-' + this.position;

        // this.theme = '';
        if (this.theme) {
            this.theme = ToasterComponent.THEMES.indexOf(this.theme) > -1 ? 'toaster-theme-' + this.theme : 'toaster-theme-default';
        } else {
            this.theme = 'toaster-theme-default';
        }
    }
    private _setTimeout(toast: Itoast) {
        if(toast.timeout > 0) {
            window.setTimeout(() => {
                this.clear(toast.id);
            }, toast.timeout);
        }
    }
    clear(id: number) {
        if (id) {
            this.toasts.forEach((value: any, key: number) => {
                if (value.id === id) {
                    if (value.onRemove && this.isFunction(value.onRemove)) {
                        value.onRemove.call(this, value);
                    }
                    this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    }
    private isFunction(obj: any) {
        return typeof obj === "function";
    }
    closeToast(toast: Itoast) {
        this.clear(toast.id);
    }

}
