import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "@daypilot/daypilot-lite-angular";
import {HttpClient} from "@angular/common/http";
import {EventModel, GroupModel} from "./models/event.model";
import {NgZone} from "@angular/core";
import EventData = DayPilot.EventData;
import AreaData = DayPilot.AreaData;
import Event = DayPilot.Event;
import {GlobalConstants} from "../../enviroments/angular-enviroment";
// import {EventData} from "@daypilot/daypilot-lite-angular/lib/core/daypilot-core";

@Injectable()
export class DataService {

  events: EventModel[] = [

  ];


  resources: GroupModel[] = [
  ];
  tries: number = 0;

  constructor(private http : HttpClient, private zone : NgZone, ){

    window.addEventListener('add_resource', (event: any) => {
      this.zone.run(() => {
        this.addResource(
          event['detail'].args[0].name,
          event['detail'].args[0].id,
        );
      });
    });

    window.addEventListener('add_new_event', (event: any) => {
      console.log( event['detail'].args[0].start);
      this.zone.run(() => {
        this.addEvent(
          event['detail'].args[0].start,
          event['detail'].args[0].end,
          event['detail'].args[0].id,
          event['detail'].args[0].text,
          {
              resource: event['detail'].args[0].resource,
              backColor:  event['detail'].args[0].backColor,
              html: event['detail'].args[0].html,
          }
        );
      });
    });

    //Example of how to add a resource and event
    if(!GlobalConstants.isBuildForBusinessCentral) {
      window.dispatchEvent(new CustomEvent('add_resource', {detail: {args: [{name: "GC", id: "GC"}]}}));
      window.dispatchEvent(new CustomEvent('add_resource', {detail: {args: [{name: "GC2", id: "GC2"}]}}));
      window.dispatchEvent(new CustomEvent('add_resource', {detail: {args: [{name: "GC3", id: "GC3"}]}}));
      window.dispatchEvent(new CustomEvent('add_resource', {detail: {args: [{name: "GC4", id: "GC4"}]}}));

      window.dispatchEvent(new CustomEvent('add_new_event', {
        detail: {
          args: [
            {
              start: DayPilot.Date.today().addHours(2),
              end: DayPilot.Date.today().addHours(10),
              id: "2",
              text: "Event 2",
              resource: "GC",
              backColor: "rgba(0,255,0,1)",
              cssClass: "block",
              html: `
              <div style="accent-color: green">Dit is een test </div>
              <h1>BYKASPOEH</h1>
              `
            }]
        }
      }));
    }


  }

  addResource(name: string, id: string) {
    let resource = new GroupModel(name, id);
    this.resources.push(resource);
  }

  addEvent(start: string | DayPilot.Date,
           end: string | DayPilot.Date,
           id: string,
           text: string,
           options?: {
             resource?: string,
             backColor?: string,
             barBackColor?: string,
             barColor?: string,
             barHidden?: boolean,
             borderColor?: string,
             cssClass?: string,
             fontColor?: string,
             html?: string,
             tags?: any
          }
  ) {
    console.log("Adding event");
    let event = new EventModel(start, end, id, text, options || {});
    this.events.push(event);
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });
  }

  getResources(): Observable<any[]> {
    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.resources);
      }, 200);
    });
  }

  getRandomColor(): string
  {
    let color = 'rgba(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' +  Math.floor(Math.random() * 255) + ', .5)';
    return color;
  }

}
