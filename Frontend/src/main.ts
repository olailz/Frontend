import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

enableProdMode();
provideHttpClient(withFetch());//Modificacion
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
