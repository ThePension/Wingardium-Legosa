import { LegoGetRequest } from "../http/LegoGetRequest.js";
import { LegoRequests } from "./LegoRequests.mjs";

import { ColorData } from "../models/data/ColorData.js";

import { Color } from "../models/Color.js";

export class ColorRequests extends LegoRequests {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @returns {LegoGetRequest<ColorData>}
     */
    getAll() {
        return new LegoGetRequest(this._url("colors"), ColorData);
    }

    /**
     * @param {Number} id
     * @returns {LegoGetRequest<Color>}
     */
    getById(id) {
        return new LegoGetRequest(this._url("color.get", id), Color);
    }
}
