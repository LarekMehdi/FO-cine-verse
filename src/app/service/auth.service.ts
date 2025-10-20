import { AuthApi } from "../api/auth-api";
import { signupInterface } from "../interfaces/auth/auth.interface";

export abstract class AuthService {

    /** SIGNUP **/

    static async signup(signupData: signupInterface) {
        return await AuthApi.signup(signupData);
    }
}