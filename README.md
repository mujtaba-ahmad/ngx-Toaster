# Angular 2 Toaster
-Angular2 Toaster component is compatible with latest release of Angular 2.X.X.
-Used to show alerts and messages for your application.

## Usage
Follow these steps:

#### 1. Update the markup
- Import style into your web page. Choose one of the following files;
  - `style-default.css` - Contains DEFAULT theme
  - `style-bootstrap.css` - Contains Bootstrap 3 theme
  - `style-material.css` - Contains Material Design theme

- Add `<ng2-toaster></ng2-toaster>` tag in template of your application component.

- Select the Theme [`default`, `bootstrap`, `material`].

- Select the Position [`top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `bottom-center`]

- Assign them as shown below:

```ts
<ng2-toaster [position]=position [theme]=theme ></ng2-toaster>
```


#### 2. Import the `ToasterModule`
Import `ToasterModule.forRoot()` in the NgModule of your application. 
The `forRoot` method is a convention for modules that provide a singleton service.

```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
    imports: [
        BrowserModule,
        ToasterModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

#### 3. Use the `ToasterService` for your application
- Import `ToasterService` from `angular2-toaster` in your application code:

```ts
import {Component} from '@angular/core';
import {ToastyService} from 'angular2-toaster';

@Component({
    selector: 'app',
    template: `
        <div>Hello world</div>
        <button (click)="addToast()">Add Toast</button>
        <toaster [position]="top-right" [theme]="bootstrap" ></toaster>
    `
})
export class AppComponent {
    
    constructor(private _toaster: ToasterService) { 
    }
    
    addToast() {
        // Add see all possible types in one shot
        this._toaster.success('title', 'message', true, 1000);
        this._toaster.error('title', 'message', true, 2000);
        this._toaster.info('title', 'message', true, 3000);
        this._toaster.warning('title', 'message', true, 4000);
        this._toaster.wait('title', 'message', true, 0);
    }
}
```

# Credits 
Inspired by [angular-toasty](https://github.com/teamfa/angular-toasty)

# License
 [MIT](/LICENSE)
