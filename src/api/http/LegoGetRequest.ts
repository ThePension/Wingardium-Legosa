import axios from "axios";
import { UriBuilder } from "uribuilder";
import { BasicClass, toClass } from "class-converter";

import { config } from "dotenv";

config();

export class LegoGetRequest<T> {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PRIVATE                           *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private static API_TOKEN = process.env.QUASAR_REBRICKABLE_API_TOKEN;

  private _urlBuilder: UriBuilder;
  private _intoClass: BasicClass;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                        CONSTRUCTORS                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(url: string, intoClass: BasicClass) {
    this._urlBuilder = UriBuilder.parse(url);
    this._intoClass = intoClass;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  addParam(name: string, value: string): LegoGetRequest<T> {
    this._urlBuilder.query[name] = value;
    return this;
  }

  async execute(): Promise<T> {
    const url = this._urlBuilder.toString();
    const reqInst = axios.create({
      headers: {
        Authorization: `key ${LegoGetRequest.API_TOKEN}`,
      },
    });

    const response = await reqInst.get(url);

    return toClass<T>(response.data, this._intoClass);
  }
}
