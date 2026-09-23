import { Url } from '../../../shared/domain/model/url.js';
import {StringValidator} from "../../../shared/domain/model/string-validator.js";

export class Source{
    constructor({id="", name="", description="", url="",
                category="", language="", country=""}) {
        if (!StringValidator.isNonEmptyString(id)) throw new Error("id must be a non-empty string");
        if (!StringValidator.isNonEmptyString(name)) throw new Error("name must be a non-empty string");
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url instanceof Url ? url : new Url(url);
        this.category = category;
        this.language = language;
        this.country = country;
        this.urlToLogo = "";
    }
}