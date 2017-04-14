import { ElementType } from "app/shared/element-type";

export class ServerElement {
  constructor(public type: string,
              public name: string,
              public content: string) { }
}