import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "@daypilot/daypilot-lite-angular";
import {HttpClient} from "@angular/common/http";
import {EventModel, GroupModel} from "./models/event.model";
import EventData = DayPilot.EventData;
import AreaData = DayPilot.AreaData;
// import {EventData} from "@daypilot/daypilot-lite-angular/lib/core/daypilot-core";

@Injectable()
export class DataService {

  events: EventModel[] = [
    // new EventModel(1,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(4), "Event 1", "GA"),
    // new EventModel(2,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(0), "Event 2", "GB"),
    // new EventModel(3,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(3), "Event 3", "GC"),
    // new EventModel(4,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(1), "Event 4", "GD"),
    // new EventModel(5,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(4), "Event 5", "GE"),
    // new EventModel(6,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(5), "Event 6", "GF"),
    // new EventModel(7,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(6), "Event 7", "GG"),
    // new EventModel(8,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(7), "Event 8", "GH"),
    // new EventModel(9,  DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(8), "Event 9", "GI"),
    // new EventModel(10, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(9), "Event 10", "GJ"),
    // new EventModel(11, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(0), "Event 11", "GK"),
    // new EventModel(12, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(1), "Event 12", "GL"),
    // new EventModel(13, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(2), "Event 13", "GM"),
    // new EventModel(14, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(3), "Event 14", "GN"),
    // new EventModel(15, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(4), "Event 15", "GO"),
    // new EventModel(16, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(5), "Event 16", "GP"),
    // new EventModel(17, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(6), "Event 17", "GQ"),
    // new EventModel(18, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(7), "Event 18", "GR"),
    // new EventModel(19, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(8), "Event 19", "GS"),
    // new EventModel(20, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(9), "Event 20", "GT"),
    // new EventModel(21, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(0), "Event 21", "GU"),
    // new EventModel(22, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(1), "Event 22", "GV"),
    // new EventModel(23, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(2), "Event 23", "GW"),
    // new EventModel(24, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(3), "Event 24", "GX"),
    // new EventModel(25, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(4), "Event 25", "GY"),
    // new EventModel(26, DayPilot.Date.today().addHours(1), DayPilot.Date.today().addHours(5), "Event 26", "GZ"),

    // {
    //   id: 1,
    //   start: DayPilot.Date.today().addHours(12),
    //   end: DayPilot.Date.today().addHours(14),
    //   text: "Event 1",
    //   resource: "GA"
    // },
    // {
    //   id: 2,
    //   start: DayPilot.Date.today().addHours(9),
    //   end: DayPilot.Date.today().addHours(10),
    //   text: "Event 2",
    //   resource: "GB"
    // }
  ];


  resources: GroupModel[] = [
    new GroupModel("Group A", "GA"),
    new GroupModel("Group B", "GB"),
    new GroupModel("Group C", "GC"),
    new GroupModel("Group D", "GD"),
    new GroupModel("Group E", "GE"),
    new GroupModel("Group F", "GF"),
    new GroupModel("Group G", "GG"),
    new GroupModel("Group H", "GH"),
    new GroupModel("Group I", "GI"),
    new GroupModel("Group J", "GJ"),
    new GroupModel("Group K", "GK"),
    new GroupModel("Group L", "GL"),
    new GroupModel("Group M", "GM"),
    new GroupModel("Group N", "GN"),
    new GroupModel("Group O", "GO"),
    new GroupModel("Group P", "GP"),
    new GroupModel("Group Q", "GQ"),
    new GroupModel("Group R", "GR"),
    new GroupModel("Group S", "GS"),
    new GroupModel("Group T", "GT"),
    new GroupModel("Group U", "GU"),
    new GroupModel("Group V", "GV"),
    new GroupModel("Group W", "GW"),
    new GroupModel("Group X", "GX"),
    new GroupModel("Group Y", "GY"),
    new GroupModel("Group Z", "GZ"),

    //add more groups here
    new GroupModel("Group AA", "GAA"),
    new GroupModel("Group AB", "GAB"),
    new GroupModel("Group AC", "GAC"),
    new GroupModel("Group AD", "GAD"),
    new GroupModel("Group AE", "GAE"),
  ];
  tries: number = 0;

  constructor(private http : HttpClient){
    for (let i = 0; i < 24; i++) {
      this.tries ++;
      if (this.tries > 1000) {
        console.log("too many tries");
        break;
      }
      //Create 85 random events
      let start = DayPilot.Date.today().addHours(Math.floor(Math.random() * 24));
      let end = DayPilot.Date.today().addHours(Math.floor(Math.random() * 24));
      if (start > end) {
        let temp = start;
        start = end;
        end = temp;
      }

      //create random rgba colors
      let backColor = this.getRandomColor();
      let barBackColor =  this.getRandomColor();
      let barColor    =  this.getRandomColor();
      let borderColor =  this.getRandomColor();
      let fontColor   =  this.getRandomColor();


      let event = new EventModel(
        start,
        end,
        DayPilot.guid(),
        "test",
        this.resources[Math.floor(Math.random() * this.resources.length)].id,
        new Array<AreaData>(),
        backColor,
        barBackColor,
        barColor,
        false,
        borderColor,
        '',
        fontColor
      );
      this.events.push(event);
    }
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
