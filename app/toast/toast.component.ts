import { Component, Input, OnChanges } from '@angular/core';

import { IToast } from './toast';

@Component({
  selector: 'toast',
  templateUrl: 'app/toast/toast.component.html'
})

export class ToastComponent implements OnChanges {
  @Input() toast: IToast;
  hidden: boolean = false;

  ngOnChanges(): void {
    this.toast.theme = this.setThemeClass(this.toast.theme);
    this.toast.type = this.setTypeClass(this.toast.type);

    if (this.toast.timeout > 0) {
      setTimeout(function() {
        this.hidden = true;
      }.bind(this), this.toast.timeout);
    }
  }
  setClose(event): void {
    this.hidden = true;
  }
  setThemeClass(theme: string): string {
    if (theme)
      return "toasty-theme-" + theme;
    return "toasty-theme-default";   
  }
  setTypeClass(type: string): string {
    if (type)
      return "toasty-type-" + type; 
    return "toasty-type-default";
  }
}