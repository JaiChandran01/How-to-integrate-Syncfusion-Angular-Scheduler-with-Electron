import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService
} from '@syncfusion/ej2-angular-schedule';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    // Scheduler view services (global)
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService
  ]
};