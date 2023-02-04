/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyAppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MyAppModule)
  .catch(err => console.error(err));
