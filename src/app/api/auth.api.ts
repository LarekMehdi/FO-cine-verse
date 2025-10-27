import { Injectable } from "@angular/core";
import { AuthInterface, SigninInterface, SignupInterface } from "../interfaces/auth/auth.interface";
import { ApiService } from "../service/api.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthApi {

    constructor(private apiService: ApiService) {}

    /** SIGNUP **/

    signup(signupData: SignupInterface) {
        return this.apiService.post('auth/signup', signupData);
    }

    /** SIGNIN **/

    signin(signinData: SigninInterface): Observable<AuthInterface> {
        return this.apiService.post<AuthInterface>(`auth/signin`, signinData)
    }
}