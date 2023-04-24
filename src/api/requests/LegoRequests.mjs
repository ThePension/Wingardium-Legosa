import { LegoProperties } from "../utils/LegoProperties.mjs";

export class LegoRequests {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROTECTED                          *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @param {String} property
     * @param  {...any} args
     * @returns {String}
     */
    _url(property, ...args) {
        var url = LegoProperties.getURL(property);

        for (let i = 0; i < args.length; i++) {
            url = url.replace(`{${i}}`, args[i]);
        }

        return url;
    }
}
