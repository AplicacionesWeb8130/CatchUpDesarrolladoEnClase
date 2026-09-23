import {Article} from "../domain/model/article.entity.js";

export class ArticleAssembler {
    #source;
    #sourceAssembler;
    constructor(source =null) {
        this.#source = source;
    }

    toEntitiesFromResource(resource) {
        let article = new Article(
            {
                ...resource, source: resource.source|| {name: 'Unknow source'}
            });

        article.source = this.#source && (this.#source.id === resource.source?.id
            || this.#source.name === resource.source?.name)
            ? this.#source
            : this.#sourceAssembler.toEntityFromResource(resource.source || {name: 'Unknow source'});
        return article;
    }
    toEntitiesFromResponse(response) {

        if (response.data.status !=="ok"){
            console.error(`${response.data["status"]} ${response.data["message"]} ${response.data["code"]}`);
        }
        const articlesResponse = response.data;

        return articlesResponse["articles"].map((article) => {
            try {
                return this.toEntitiesFromResource(article);
            } catch (e) {
                console.error(`Error creating Article entity from resource: ${e.message}`);
                return null;
            }
        }).filter((article) => article !== null);

    }

}
