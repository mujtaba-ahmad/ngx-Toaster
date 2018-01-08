import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Itoast } from '../interface/itoast';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
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
