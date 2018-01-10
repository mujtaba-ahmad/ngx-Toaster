import { OnInit, OnChanges } from '@angular/core';
import { ToasterService } from './services/toaster.service';
import { Itoast } from './interface/itoast';
export declare class ToasterComponent implements OnInit, OnChanges {
    private _toasterService;
    toasts: Array<Itoast>;
    static POSITIONS: Array<String>;
    static THEMES: Array<string>;
    position: any;
    theme: any;
    limit: any;
    constructor(_toasterService: ToasterService);
    ngOnInit(): any;
    ngOnChanges(): any;
    private _setTimeout(toast);
    clear(id: number): void;
    private isFunction(obj);
    closeToast(toast: Itoast): void;
}
