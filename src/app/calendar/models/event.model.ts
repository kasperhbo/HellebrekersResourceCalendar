import {DayPilot} from "@daypilot/daypilot-lite-angular";
import EventId = DayPilot.EventId;
import ResourceId = DayPilot.ResourceId;
import AreaData = DayPilot.AreaData;

export class EventModel{

  constructor(
    private start: string | DayPilot.Date,
    private end: string | DayPilot.Date,
    private id: EventId,
    private text: string,
    private resource?: ResourceId,
    private areas?: AreaData[],
    private backColor?: string,
    private barBackColor?: string,
    private barColor?: string,
    private barHidden?: boolean,
    private borderColor?: string,
    private cssClass?: string,
    private fontColor?: string,
    private html?: string,
    private tags?: any,
  ) {

  }

  // public id: number;
  // public start: DayPilot.Date;
  // public end: DayPilot.Date;
  // private text: string;
  // public resource: string;
  //
  // constructor(id: number, start: DayPilot.Date, end: DayPilot.Date, text: string, resource: string) {
  //   this.id = id;
  //   this.start = start;
  //   this.end = end;
  //   this.text = text;
  //   this.resource = resource;
  // }
}

export class GroupModel
{
    public name: string;
    public id: string;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }
}
