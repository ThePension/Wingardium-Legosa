import { property } from "class-converter";

import { LegoGetRequest } from "../../http/LegoGetRequest";

import { Part } from "../Part";
import { LegoData } from "./LegoData";

export class PartData extends LegoData {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("results", Part)
    private _results: Part[];

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    async getNext() {
        if (this.next) {
            return await new LegoGetRequest<PartData>(
                this.next,
                PartData
            ).execute();
        }
    }

    async getPrevious() {
        if (this.previous) {
            return await new LegoGetRequest<PartData>(
                this.previous,
                PartData
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
