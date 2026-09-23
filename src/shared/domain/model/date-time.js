export class DateTime
{
    #date;
    constructor(value){
        const date = new  Date(value);
        if (isNaN(date.getTime())) {
            throw new Error(`Invalid date: ${value}`);
        }
        this.#date = date;
        Object.freeze(this);
    }
    isFuture() {
        return this.#date > new Date();
    }
    format(locale = 'en-US', options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }) {
    }
    toDate(){
        return new Date(this.#date.getTime());
    }
    toISOString() {
        return this.#date.toISOString();
    }
    valueOf() {
        return this.#date.getTime();
    }
    static now() {
        return new DateTime(new Date());
    }
}