import { property, optional, deserialize } from "class-converter";
import moment = require("moment");

export class Set {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    @property("set_num")
    @optional()
    private _id: string;
    @property("name")
    @optional()
    private _name: string;
    @property("year")
    @optional()
    private _year: number;
    @property("theme_id")
    @optional()
    private _themeId: number;
    @property("num_parts")
    @optional()
    private _numParts: number;
    @property("set_img_url")
    @optional()
    private _setImgUrl: string;
    @property("set_url")
    @optional()
    private _setUrl: string;
    @property("last_modified_dt")
    @optional()
    @deserialize((value) => moment(value))
    private _lastModifiedAt: moment.Moment;

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /* * * * * * * * * * * * * * * *\
    |*           GETTERS           *|
    \* * * * * * * * * * * * * * * */

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get year() {
        return this._year;
    }

    get themeId() {
        return this._themeId;
    }

    get numParts() {
        return this._numParts;
    }

    get setImgUrl() {
        return this._setImgUrl;
    }

    get setUrl() {
        return this._setUrl;
    }

    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
}
