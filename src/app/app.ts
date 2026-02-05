import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScheduleModule,
  EventSettingsModel,
  View,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  DragAndDropService, 
  ResizeService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ScheduleModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
  template: `
    <h2>Syncfusion Scheduler (Electron)</h2>

    <ejs-schedule
      width="100%"
      height="650px"
      [selectedDate]="selectedDate"
      [currentView]="currentView"
      [eventSettings]="eventSettings"

      [allowDragAndDrop]="true"
      [allowResizing]="true"
    >
      <e-views>
        <e-view option="Day"></e-view>
        <e-view option="Week"></e-view>
        <e-view option="WorkWeek"></e-view>
        <e-view option="Month"></e-view>
        <e-view option="Agenda"></e-view>
      </e-views>
    </ejs-schedule>
  `
})
export class App {
  public selectedDate: Date = new Date(2026, 1, 4); // Feb 4, 2026
  public currentView: View = 'Week';

  private data: object[] = [
    {
      Id: 1,
      Subject: 'Syncfusion Meeting',
      StartTime: new Date(2026, 1, 4, 10, 0),
      EndTime: new Date(2026, 1, 4, 11, 0)
    },
    {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2026, 1, 5, 14, 0),
      EndTime: new Date(2026, 1, 5, 15, 30)
    }
  ];

  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
  };
}