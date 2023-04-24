import { LegoGetRequest } from "../http/LegoGetRequest.js";
import { LegoRequests } from "./LegoRequests.mjs";

import { ColorData } from "../models/data/ColorData.js";
import { PartData } from "../models/data/PartData.js";

import { Part } from "../models/Part.js";

export class PartRequests extends LegoRequests {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @returns {LegoGetRequest<PartData>}
     */
    getAll() {
        return new LegoGetRequest(this._url("parts"), PartData);
    }

    /**
     * @param {String} id
     * @returns {LegoGetRequest<Part>}
     */
    getById(id) {
        return new LegoGetRequest(this._url("part.get", id), Part);
    }

    /**
     * @param {String} id
     * @returns {LegoGetRequest<ColorData>}
     */
    getColorsOf(id) {
        return new LegoGetRequest(this._url("part.colors", id), ColorData);
    }
}
