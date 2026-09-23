export class Url{
    #value;

    static IsValidUrl(url) {
        if (typeof url !== 'string' && !(url instanceof String)) {
            return false;
        }
        if (URL.canParse){
            return URL.canParse(url);
        }
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
    constructor(value) {
        this.#value = Url.IsValidUrl(value) ? value : '';
        Object.freeze(this);
    }
    toString() {
        return this.#value;
    }
    isEmpty() {
        return this.#value === '';
    }
    valueOf() {
        return this.#value;
    }
    equals(other) {
        if (!(other instanceof Url)) {
            return false;
        }
        return this.#value === other.#value;
    }
}