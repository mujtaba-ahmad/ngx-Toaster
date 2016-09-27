# Angular 2 Toastr
Angular 2 Toastr component is compatible with latest release of Angular 2.X.X for showing alerts and messages for your application.

## Usage
Follow these steps:

### 1. Update your `systemjs.config.js` file.
-Add following line in map:

```js
map: {
      //...
      'angular2-toastr': 'npm:angular2-toastr'
     }
```
-and in packages:

```js
packages: {
      //...
      'angular2-toastr': {
        main: './index.js',
        defaultExtension: 'js'
      }
```

### 2. Update the index.html

- Import style into your index.html. Choose one of the following files:
  - `style-default.css` - Contains DEFAULT theme
  - `style-bootstrap.css` - Contains Bootstrap 3 theme
  - `style-material.css` - Contains Material Design theme
  
  OR
- Copy and Paste :
  - Copy and paste these files in your application.
  - Link them in your index.html

### 2. Your Component:
- Add following tag in template of your component where you intend to use . 

```ts
<ng2-toaster [position]=position [theme]=theme ></ng2-toaster>
```

- Select the Theme [`default`, `bootstrap`, `material`].

- Select the Position [`top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `bottom-center`]

- Assign them as shown below:

```ts
<ng2-toaster [position]="'top-right'" [theme]="'bootstrap'" ></ng2-toaster>
```


### 3. Import the `Components`
Import Components in the NgModule of your application as shown below:

```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {ToasterComponent, ToastComponent, ToasterAppComponent} from 'angular2-toastr/index';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ToasterComponent, ToastComponent, ToasterAppComponent]
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### 4. Use the `ToasterService` for your application
- Import `ToasterService` from `angular2-toaster` in your application code:

```ts
import {Component} from '@angular/core';
import {ToasterService} from 'angular2-toaster/index';

@Component({
    selector: 'app',
    providers: [ToasterService],
    template: `
        <div>Hello world</div>
        <button (click)="addToast()">Add Toast</button>
        <toaster [position]="'top-right'" [theme]="'bootstrap'" ></toaster>
    `
})
export class AppComponent {
    
    constructor(private _toaster: ToasterService) { 
    }
    
    addToast() {
        // See all possible types in one shot.
        // pass parameters as (title:string, message:string, show_close_button:boolean, timeout:number)
        this._toaster.success('title', 'message', true, 1000);
        this._toaster.error('title', 'message', true, 2000);
        this._toaster.info('title', 'message', true, 3000);
        this._toaster.warning('title', 'message', true, 4000);
        this._toaster.wait('title', 'message', true, 0);
    }
}
```
OR
- Add Service Globally in NgModule :
```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {ToasterComponent, ToastComponent, ToasterAppComponent, ToasterService} from 'angular2-toastr/index';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ToasterComponent, ToastComponent, ToasterAppComponent],
    providers: [ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

# Credits 
Inspired by [angular-toasty](https://github.com/teamfa/angular-toasty)

# License
 [MIT](/LICENSE)
