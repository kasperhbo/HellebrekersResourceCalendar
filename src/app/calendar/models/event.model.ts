import {DayPilot} from "@daypilot/daypilot-lite-angular";
import EventId = DayPilot.EventId;
import ResourceId = DayPilot.ResourceId;
import AreaData = DayPilot.AreaData;

export class EventModel{

  private resource?: ResourceId;
  private areas?: AreaData[];
  private backColor?: string;
  private barBackColor?: string;
  private barColor?: string;
  private barHidden?: boolean;
  private borderColor?: string;
  private cssClass?: string;
  private fontColor?: string;
  private html?: string;
  private tags?: any;

  constructor(
    private start: string | DayPilot.Date,
    private end: string | DayPilot.Date,
    private id: EventId,
    private text: string,
   options?: {
      resource?: ResourceId,
      areas?: AreaData[],
      backColor?: string,
      barBackColor?: string,
      barColor?: string,
      barHidden?: boolean,
      borderColor?: string,
      cssClass?: string,
      fontColor?: string,
      html?: string,
      tags?: any,
  }
  ) {
    if(options)
    {
      this.resource = options.resource;
      this.areas = options.areas;
      this.backColor = options.backColor;
      this.barBackColor = options.barBackColor;
      this.barColor = options.barColor;
      this.barHidden = options.barHidden;
      this.borderColor = options.borderColor;
      this.cssClass = options.cssClass;
      this.fontColor = options.fontColor;
      this.html = options.html;
      this.tags = options.tags;
    }

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
