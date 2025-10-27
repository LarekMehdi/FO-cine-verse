import { Injectable } from "@angular/core";
import { AuthApi } from "../api/auth.api";
import { AuthInterface, SigninInterface, SignupInterface } from "../interfaces/auth/auth.interface";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private authApi: AuthApi) {}

    /** SIGNUP **/

    signup(signupData: SignupInterface) {
        return this.authApi.signup(signupData);
    }

    /** SIGNIN **/

    signin(signinData: SigninInterface): Observable<AuthInterface> {
        return this.authApi.signin(signinData);
    }
}