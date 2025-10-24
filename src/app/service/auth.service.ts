import { Injectable } from "@angular/core";
import { AuthApi } from "../api/auth.api";
import { SigninInterface, SignupInterface } from "../interfaces/auth/auth.interface";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private authApi: AuthApi) {}

    /** SIGNUP **/

    signup(signupData: SignupInterface) {
        return this.authApi.signup(signupData);
    }

    /** SIGNIN **/

    signin(signinData: SigninInterface) {
        return this.authApi.signin(signinData);
    }
}