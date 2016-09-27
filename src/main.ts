import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ToasterModule } from './toaster.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ToasterModule);