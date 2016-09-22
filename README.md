Angular 2 Toaster

Description:

  Compatible with the new and Final Release of Angular 2.

Usage:

1. Importing Component:

  -> Add this code to component in which you want to use toaster:

    . import { IToast } from '../toast/toast'
    . import { IToastComponent } from '../itoast/itoast.component'

2. In your Component make variable:

  . toast:IToast;

3. In Your Template File:

  . <itoast [position]="'top-right'" [toast]="toast"></itoast>

  // You can change 'top-right' with:
    . top-left
    . top-center
    . bottom-left
    . bottom-right
    . bottom-center

4. Make Toast in any function of your Component: 

  . this.toast = <IToast>{
      title: "Angular 2 Toast",
      msg: "Compatible with Angular 2 latest build",
      showClose: true,
      timeout: 5000,
      theme: "bootstrap",
      type: "success"
    };