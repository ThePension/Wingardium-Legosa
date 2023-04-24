import { property } from "class-converter";

import { LegoGetRequest } from "../../http/LegoGetRequest";

import { LegoData } from "./LegoData";
import { Set } from "../Set";

export class SetData extends LegoData {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("results", Set)
    private _results: Set[];

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    async getNext() {
        if (this.next) {
            return await new LegoGetRequest<SetData>(
                this.next,
                SetData
            ).execute();
        }
    }

    async getPrevious() {
        if (this.previous) {
            return await new LegoGetRequest<SetData>(
                this.previous,
                SetData
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
