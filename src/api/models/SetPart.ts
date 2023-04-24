import { property, optional, deserialize } from "class-converter";

import { Part } from "./Part";
import { Color } from "./Color";

export class SetPart {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    @property("id")
    @optional()
    private _id: number;
    @property("inv_part_id")
    @optional()
    private _invPartId: number;
    @property("part", Part)
    @optional()
    private _part: Part;
    @property("color", Color)
    @optional()
    private _color: Color;
    @property("set_num")
    @optional()
    private _setNum: string;
    @property("quantity")
    @optional()
    private _quantity: number;
    @property("is_spare")
    @optional()
    private _isSpare: boolean;
    @property("element_id")
    @optional()
    private _elementId: number;
    @property("num_sets")
    @optional()
    private _numSets: number;

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get id() {
        return this._id;
    }

    get invPartId() {
        return this._invPartId;
    }

    get part() {
        return this._part;
    }

    get color() {
        return this._color;
    }

    get setNum() {
        return this._setNum;
    }

    get quantity() {
        return this._quantity;
    }

    get isSpare() {
        return this._isSpare;
    }

    get elementId() {
        return this._elementId;
    }

    get numSets() {
        return this._numSets;
    }
}
