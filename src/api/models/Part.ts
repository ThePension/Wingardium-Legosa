import { property, optional } from "class-converter";

export class Part {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("part_num")
    private _partNum: string;
    @property("name")
    private _name: string;
    @property("part_cat_id")
    private _partCatId: number;
    @property("part_url")
    private _partUrl: string;
    @property("part_img_url")
    @optional()
    private _partImgUrl?: string;
    @property("quantity")
    @optional()
    private _quantity: number;
    @property("num_sets")
    @optional()
    private _numSets: number;

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get partNum() {
        return this._partNum;
    }

    get name() {
        return this._name;
    }

    get partCatId() {
        return this._partCatId;
    }

    get partUrl() {
        return this._partUrl;
    }

    get partImgUrl() {
        return this._partImgUrl;
    }

    get quantity() {
        return this._quantity;
    }

    get numSets() {
        return this._numSets;
    }
}
