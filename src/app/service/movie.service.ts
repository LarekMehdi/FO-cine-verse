import { Injectable } from "@angular/core";
import { MovieApi } from "../api/movie.api";

@Injectable()
export class MovieService {

    constructor(private movieApi: MovieApi) {}

    /** FIND ALL **/

    public findAll() {
        return this.movieApi.findAll();
    }
    
}