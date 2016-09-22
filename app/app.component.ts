import { Component } from '@angular/core';

import { ToastComponent } from './toast/toast.component'
import { TestComponent } from './test/test.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello</h1>
            <test></test>`
})

export class AppComponent { }