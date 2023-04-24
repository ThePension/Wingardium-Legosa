import { ColorRequests } from "./requests/ColorRequests.mjs";
import { PartRequests } from "./requests/PartRequests.mjs";
import { SetRequests } from "./requests/SetRequests.mjs";

export default class LegoApi {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    #colors = new ColorRequests();
    #parts = new PartRequests();
    #sets = new SetRequests();

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get colors() {
        return this.#colors;
    }

    get parts() {
        return this.#parts;
    }

    get sets() {
        return this.#sets;
    }
}
