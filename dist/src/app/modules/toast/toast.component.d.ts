import { OnChanges, EventEmitter } from '@angular/core';
import { Itoast } from '../interface/itoast';
export declare class ToastComponent implements OnChanges {
    toast: Itoast;
    theme: string;
    closeToastEvent: EventEmitter<{}>;
    close($event: any): void;
    ngOnChanges(): any;
}
