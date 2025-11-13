import { Injectable } from "@angular/core";
import { ApiService } from "../service/api.service";

@Injectable()
export class MovieApi {

    constructor(private apiService: ApiService) {}

    /** FIND ALL **/

    public findAll() {
        return this.apiService.get(``);
    }


}