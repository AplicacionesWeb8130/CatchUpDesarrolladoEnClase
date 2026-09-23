import {Source} from "./source.entity.js";
import {StringValidator} from "../../../shared/domain/model/string-validator.js";
import {DateTime} from "../../../shared/domain/model/date-time.js";
import {Url} from "../../../shared/domain/model/url.js";

export class Article{
    constructor ({author="", title="", description="", url="",
                 urlToImage="", source =null, publishedAt=""}) {

        if(!StringValidator.isNonEmptyString(title)) throw new Error("title must be a non-empty string");
        if(!source) throw new Error("source must be a non-empty string");
        let dateTime;
        try {
            dateTime = publishedAt instanceof DateTime ? publishedAt : new DateTime(publishedAt);
        } catch (e) {
            throw new Error("publishedAt must be a valid date");
        }
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url instanceof Url ? url : new Url(url);
        this.urlToImage = urlToImage instanceof Url ? urlToImage : new Url(urlToImage);
        if (this.urlToImage.isEmpty()){
            this.urlToImage = new Url("https>//placehold.co/600x400?text=No+Image");
        }
        this.source = source instanceof Source ? source : new Source(source);
        this.publishedAt = dateTime;
    }
    getFormatedPublishedAt() {
        return this.publishedAt.toLocaleString();
    }

}