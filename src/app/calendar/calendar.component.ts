import {Component, ViewChild, AfterViewInit, OnInit} from "@angular/core";
import {DayPilot, DayPilotCalendarComponent} from "@daypilot/daypilot-lite-angular";
import {DataService} from "./data.service";


@Component({
  selector: 'calendar-component',
  // template: ``,
  templateUrl: './calendar.component.html',
  styles: [
    `
      button{
        width: 32px;
        height: 32px;
        padding: 0px;
      }
    `
  ]
})
export class CalendarComponent implements AfterViewInit, OnInit {

  @ViewChild("calendar")
  calendar!: DayPilotCalendarComponent;

  events: any[] = [];
  backgroundUrl: string = "https://h2909571.stratoserver.net/HellebrekerPackages/ResourceCalendar/External/images/hellebrekers-logo.png";

  config: DayPilot.CalendarConfig = {
    viewType: "Resources",
    locale: "en-us",
    startDate: DayPilot.Date.today(),
    headerHeight: 30,
    cellHeight: 25,
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
  sizeIconClassMaximize: string = 'fa fa-window-maximize';
  sizeIconClassMin: string = 'fa fa-window-minimize';
  sizeIconClass: string = this.sizeIconClassMaximize;

  logoStyleDefault: any = `
        width: 32px;
        height: 32px;
  `;

  logoStyleMax: any = `
        width:  48px;
        height: 48px;
  `;

  logoStyle: any = this.logoStyleDefault;

  currentDay: DayPilot.Date = DayPilot.Date.today();

  constructor(private ds: DataService) {

  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.columns = result);
    const from = this.calendar.control.visibleStart();
    const to = this.calendar.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });


    //make top bar sticky
    let elements = document.getElementsByClassName("calendar_default_main");
    elements[0].children[0].classList.add("sticky-top");
  }

  toggleFullscreen() {

    // const element : HTMLElement | null = document.getElementById("content");
    const element =
      window.parent.document.getElementsByClassName("control-addin-container")[0];

    if (element) {
      if (element.classList.contains('fake-fullscreen')) {
        this.sizeIconClass = this.sizeIconClassMaximize;
        this.logoStyle = this.logoStyleDefault;
        element.classList.remove('fake-fullscreen');
        let test = document.exitFullscreen();
        console.log(test);
      } else {
        element.classList.add('fake-fullscreen');
        this.sizeIconClass = this.sizeIconClassMin;
        this.logoStyle = this.logoStyleMax;
        let test = document.documentElement.requestFullscreen();
        console.log(test);
      }
    }else{
      console.log("element not found");
    }
  }

  changeDate(date: DayPilot.Date) {
    this.currentDay = date;
    this.calendar.control.startDate = this.currentDay;
    this.calendar.control.update();
  }

  goDayForward() {
    this.changeDate(this.currentDay.addDays(1));
  }

  goDayBackward() {
    this.changeDate(this.currentDay.addDays(-1));
  }
}

