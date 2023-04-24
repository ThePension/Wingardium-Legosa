import { property } from "class-converter";

import { LegoGetRequest } from "../../http/LegoGetRequest";

import { LegoData } from "./LegoData";
import { SetPart } from "../SetPart";

export class SetPartData extends LegoData {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("results", SetPart)
    private _results: SetPart[];

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    async getNext() {
        if (this.next) {
            return await new LegoGetRequest<SetPartData>(
                this.next,
                SetPartData
            ).execute();
        }
    }

    async getPrevious() {
        if (this.previous) {
            return await new LegoGetRequest<SetPartData>(
                this.previous,
                SetPartData
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
