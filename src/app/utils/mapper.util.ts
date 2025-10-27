import { Injectable } from "@angular/core";
import { AuthInterface } from "../interfaces/auth/auth.interface";
import { UserInterface } from "../interfaces/user/user.interface";

@Injectable({providedIn: 'root'})
export class UtilMapper {

    public mapAuthDataToUser(authData: AuthInterface): UserInterface {
        const user: UserInterface = {
            id: authData.id,
            pseudo: authData.pseudo,
            email: authData.email,
            role: authData.role,
        }
        return user;
    }
}