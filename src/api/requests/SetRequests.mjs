import { LegoGetRequest } from "../http/LegoGetRequest.js";
import { LegoRequests } from "./LegoRequests.mjs";

import { SetData } from "../models/data/SetData.js";

import { Set } from "../models/Set.js";
import { SetPartData } from "../models/data/SetPartData.js";

export class SetRequests extends LegoRequests {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @returns {LegoGetRequest<SetData>}
     */
    getAll() {
        return new LegoGetRequest(this._url("sets"), SetData);
    }

    /**
     * @param {String} id
     * @returns {LegoGetRequest<Set>}
     */
    getById(id) {
        return new LegoGetRequest(this._url("set.get", id), Set);
    }

    /**
     * @param {String} id
     * @returns {LegoGetRequest<SetPartData>}
     */
    getPartsOf(id) {
        return new LegoGetRequest(this._url("set.parts", id), SetPartData);
    }
}
