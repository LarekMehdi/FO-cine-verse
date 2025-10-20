import { Injectable } from "@angular/core";
import { signupInterface } from "../interfaces/auth/auth.interface";
import { ApiService } from "../service/api.service";

@Injectable({ providedIn: 'root' })
export class AuthApi {

    constructor(private apiService: ApiService) {}

    /** SIGNUP **/

    signup(signupData: signupInterface) {
        return this.apiService.post('signup', signupData);
    }
}