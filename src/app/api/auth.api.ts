import { Injectable } from "@angular/core";
import { SigninInterface, SignupInterface } from "../interfaces/auth/auth.interface";
import { ApiService } from "../service/api.service";

@Injectable({ providedIn: 'root' })
export class AuthApi {

    constructor(private apiService: ApiService) {}

    /** SIGNUP **/

    signup(signupData: SignupInterface) {
        return this.apiService.post('auth/signup', signupData);
    }

    /** SIGNIN **/

    signin(signinData: SigninInterface) {
        return this.apiService.post(`auth/signin`, signinData)
    }
}