# Note
Use Master branch, for Installation of package.
# Angular 5 Toaster
Angular 5 Toaster component is compatible with latest release of Angular 5.X.X for showing alerts and messages for your application.

## Installation
 * Download dist folder
 * Install package by executing command 'npm install "download-path/dist/ngx-toaster-0.0.0.tgz"'

## Usage
Follow these steps:

### 1. Update the app.module.ts
Include ToasterModule in your app.module.ts file
```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';


  import { AppComponent } from './app.component';
  import { ToasterModule } from 'ngx-toaster';      <------

  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToasterModule                                   <------
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

```
### 2. Update Your Component:
* Add following tag in template of your component i.e; `app.component.html`.

```ts
<ngx-toaster [position]=position [theme]=theme (click)="popupPushNotification()"></ngx-toaster>
```

* Select the Theme [`default`, `bootstrap`, `material`].

* Select the Position [`top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `bottom-center`]

* Click Event is for demo purpose, so we can display all notifications.

* Assign them as shown below:

```ts
<ngx-toaster [position]="'top-right'" [theme]="'bootstrap'" (click)="popupPushNotification()"></ngx-toaster>
```

### 3. Import the ToasterService in Component
Import ToasterService in component of your application as shown below:

```ts
import { Component } from '@angular/core';
import { ToasterService } from 'ngx-toaster';     <------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

### 4. Use the ToasterService in Component

```ts
import { Component } from '@angular/core';
import { ToasterService } from 'ngx-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _toaster: ToasterService){}

  popupPushNotification(){
    this._toaster.warning('Warning', 'message', true, 1000);      <------
    this._toaster.info('Information', 'message3', true, 2000);    <------
    this._toaster.success('Success', 'message1', true, 3000);     <------
    this._toaster.error('Error', 'message2', true, 4000);         <------
    this._toaster.wait('Wait', 'message', true, 5000);            <------
  }

}

```

# Credits
Inspired by [angular-toasty](https://github.com/teamfa/angular-toasty)

# License
 [MIT](/LICENSE)
