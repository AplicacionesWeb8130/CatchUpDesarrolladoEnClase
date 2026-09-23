import {Source} from "../domain/model/source.entity.js";
import {NewsApi} from "../infrastructure/news-api.js";
import {SourceAssembler} from "../infrastructure/source.assembler.js";
import {reactive} from "vue";
import {ArticleAssembler} from "../infrastructure/article.assembler.js";
const newsApi = new NewsApi();
const sourceAssembler = new SourceAssembler();
export const newsStore = reactive({
    sources: [],
    articles: [],
    errors: [],
    currentSource: null,
    setCurrentSource(source){
        this.currentSource = source;
        this.loadArticlesForCurrentSource();
    },
    loadSources(){
        this.errors = [];
        newsApi.getSources()
            .then(response => {
                this.sources = sourceAssembler.toEntitiesFromResponse(response);
                if (this.sources.length > 0 && !this.currentSource ) {
                    this.setCurrentSource(this.sources[0]);
                }
            })
            .catch(error => {
                console.error("Error loading sources:", error);
                this.errors.push("Error loading sources: " + error.message);
                this.sources = [];
            });
    },
    loadArticlesForCurrentSource(){
        if (this.currentSource===null) {
            return;
        }

        newsApi.getArticlesForSourceId(this.currentSource.id).then(response => {
            const articleAssembler = new ArticleAssembler(this.currentSource);
            this.articles = articleAssembler.toEntitiesFromResponse(response);
        }).catch(message => {
            this.errors.push("Error loading articles: " + message);
            this.articles = [];
        });
    }
});