import type { AxiosInstance } from "axios";

interface SearchQuery {
    sport: string;
    distance: number;
    searchWord: string;
}

export class SearchService {
    constructor(private readonly client: AxiosInstance) {
    }

    private removeEmptyFields(data: SearchQuery) {
        for(const key in data) {
            const value = data[key as keyof SearchQuery]
            if(!value) {
                delete data[key as keyof SearchQuery]; 
            }
        }
    }

    async searchSportCourt(data: SearchQuery) {
        this.removeEmptyFields(data);
        await this.client.get('/courts', {params:  data});
    }
}