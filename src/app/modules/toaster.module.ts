import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster.component';
import { ToasterService } from './services/toaster.service';

@NgModule({
  declarations: [ToastComponent, ToasterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent
  ],
  providers: [ToasterService]
})
export class ToasterModule { }
