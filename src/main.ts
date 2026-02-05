import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
console.log('ɵcmp exists?', (App as any).ɵcmp);
console.log('Root component is:', App);
bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
  