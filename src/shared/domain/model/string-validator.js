export class StringValidator {
    static isString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    static isNonEmptyString(value) {
        return this.isString(value) && value.trim().length > 0;
    }
}