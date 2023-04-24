export class LegoProperties {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                          PROPERTIES                         *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    static #API_URL = "https://rebrickable.com/api/v3";
    static #LEGO_URLS = {
        colors: `${this.#API_URL}/lego/colors`,
        "color.get": `${this.#API_URL}/lego/colors/{0}`,

        parts: `${this.#API_URL}/lego/parts`,
        "part.get": `${this.#API_URL}/lego/parts/{0}`,
        "part.colors": `${this.#API_URL}/lego/parts/{0}/colors`,

        sets: `${this.#API_URL}/lego/sets`,
        "set.get": `${this.#API_URL}/lego/sets/{0}`,
        "set.parts": `${this.#API_URL}/lego/sets/{0}/parts`,
    };

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
    |*                           PUBLIC                            *|
    \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @param {String} key
     * @returns {String}
     */
    static getURL(key) {
        return this.#LEGO_URLS[key];
    }
}
