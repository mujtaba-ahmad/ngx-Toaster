import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Itoast } from './Itoast';

@Component ({
    selector: 'ng2-toast',
    template: `<div class="toast" [ngClass]="[toast.type, theme]">
                    <button *ngIf="toast.showClose" class="close-button" (click)="close($event)"></button>
                    <div *ngIf="toast.title || toast.msg" class="toast-text">
                        <span *ngIf="toast.title" class="toast-title">{{toast.title}}</span>
                        <br *ngIf="toast.title && toast.msg" />
                        <span *ngIf="toast.msg" class="toast-msg">{{toast.msg}}</span>
                    </div>
                </div>`,
})
export class ToastComponent implements OnChanges {
    @Input() toast: Itoast;
    @Input() theme: string;
    @Output('closeToast') closeToastEvent = new EventEmitter();

    close($event: any) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    }

    ngOnChanges(): any {
    }
}