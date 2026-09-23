import {Source} from "../domain/model/source.entity.js";
import {LogoDevApi} from "../../shared/infrastructure/logo-dev-api.js";
export class SourceAssembler {
    #logoApi;
    constructor() {
        this.#logoApi = new LogoDevApi();
    }
    toEntitiesFromResponse(response) {
        if (response.data.status !=="ok")
        {
            console.error(`${response.data["status"]} ${response.data["message"]} ${response.data["code"]}`);
            return [];
        }
        const sourceResponse = response.data;

        return sourceResponse.sources.map((source) => {
            try{
                return this.toEntityFromResource(source);
            }
            catch (e) {
                console.error(`Error creating Source entity from resource: ${e.message}`);
                return null;
            }
        }
        ).filter((source) => source !== null);
    }
    toEntityFromResource(resource) {
        let source = new Source({...resource});
        source.urlToLogo = this.#logoApi.getUrlToLogo(source);
        return source;
    }

}