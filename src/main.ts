import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ToasterModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ToasterModule);