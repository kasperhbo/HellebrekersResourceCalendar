import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotCalendarComponent} from "@daypilot/daypilot-lite-angular";
import {DataService} from "./data.service";

@Component({
  selector: 'calendar-component',
  template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,
  styles: [``]
})
export class CalendarComponent implements AfterViewInit {

  @ViewChild("calendar")
  calendar!: DayPilotCalendarComponent;

  events: any[] = [];

  config: DayPilot.CalendarConfig = {
    viewType: "Resources",
    locale: "en-us",
    headerHeight: 50,
    cellHeight: 24,

    businessBeginsHour: 0,
    businessEndsHour: 24,
    timeRangeSelectedHandling: "Enabled",
    onTimeRangeSelected: async (args) => {
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      const dp = args.control;
      dp.clearSelection();
      if (modal.canceled) { return; }
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result,
        resource: args.resource
      });
    },
    eventDeleteHandling: "Update",
    onEventDeleted: (args) => {
      console.log("Event deleted: " + args.e.text());
    },
    eventMoveHandling: "Update",
    onEventMoved: (args) => {
      console.log("Event moved: " + args.e.text());
    },
    eventResizeHandling: "Update",
    onEventResized: (args) => {
      console.log("Event resized: " + args.e.text());
    },
    eventClickHandling: "ContextMenu",
    contextMenu: new DayPilot.Menu({
      items: [
        { text: "Delete", onClick: (args) => { const dp = args.source.calendar; dp.events.remove(args.source); } }
      ]
    }),
  };

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.columns = result);
    const from = this.calendar.control.visibleStart();
    const to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

}

