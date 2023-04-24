import { property } from "class-converter";

import { LegoGetRequest } from "../../http/LegoGetRequest";

import { LegoData } from "./LegoData";
import { Color } from "../Color";

export class ColorData extends LegoData {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  @property("results", Color)
  private _results: Color[];

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  async getNext() {
    if (this.next) {
      return await new LegoGetRequest<ColorData>(
        this.next,
        ColorData
      ).execute();
    }
  }

  async getPrevious() {
    if (this.previous) {
      return await new LegoGetRequest<ColorData>(
        this.previous,
        ColorData
      ).execute();
    }
  }

  /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

  get results() {
    return this._results;
  }
}
