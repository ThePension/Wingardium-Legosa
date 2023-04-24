import { deserialize, optional, property } from "class-converter";

export class Color {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("id")
    @optional()
    private _id: number;
    @property("color_id")
    @optional()
    private _color_id: number;
    @property("name")
    @optional()
    private _name: string;
    @property("color_name")
    @optional()
    private _color_name: string;
    @property("rgb")
    @optional()
    @deserialize((value) => `#${value}`)
    private _rgbColor: string;
    @property("is_trans")
    @optional()
    private _isTransparent: boolean;
    @property("num_sets")
    @optional()
    private _numSets: number;
    @property("num_set_parts")
    @optional()
    private _numSetPart: number;
    @property("part_img_url")
    @optional()
    private _partImgUrl: string;
    @property("elements")
    @optional()
    private _elements: string[];

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get id() {
        return this._color_id ?? this._id;
    }

    get name() {
        return this._color_name ?? this._name;
    }

    get rgbColor() {
        return this._rgbColor;
    }

    get isTransparent() {
        return this._isTransparent;
    }

    get numSets() {
        return this._numSets;
    }

    get numSetPart() {
        return this._numSetPart;
    }

    get partImgUrl() {
        return this._partImgUrl;
    }

    get elements() {
        return this._elements;
    }
}
