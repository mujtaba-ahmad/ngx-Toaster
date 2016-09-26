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

```ts
<toaster [position]=position [theme]=theme ></toaster>
```

- Select the Theme [`default`, `bootstrap`, `material`].

- Select the Position [`top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `bottom-center`]

- Assign them as shown below:
  
```ts
<toaster [position]="bootstrap" [theme]="top-right" ></toaster>
```
