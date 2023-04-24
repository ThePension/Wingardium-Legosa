import { property, optional } from "class-converter";

export class LegoData {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("count")
    private _count: number;
    @property("previous")
    @optional()
    private _previous: string;
    @property("next")
    @optional()
    private _next: string;

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get count(): number {
        return this._count;
    }

    get previous(): string {
        return this._previous;
    }

    get next(): string {
        return this._next;
    }
}
