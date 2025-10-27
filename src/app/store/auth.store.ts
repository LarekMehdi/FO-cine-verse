import { computed, Injectable, signal } from "@angular/core";
import { UserInterface } from "../interfaces/user/user.interface";
import { Role } from "../constants/role.constant";
import { AuthInterface } from "../interfaces/auth/auth.interface";
import { UtilMapper } from "../utils/mapper.util";

@Injectable({ providedIn: 'root'})
export class AuthStore {

    constructor(private utilMapper: UtilMapper) {}

    private tokenSignal = signal<string | null>(localStorage.getItem('accessToken'));
    private userSignal = signal<UserInterface | null>(this.__loadUser());

    readonly token = computed(() => this.tokenSignal());
    readonly user = computed(() => this.userSignal());
    readonly isAuthenticated = computed(() => !!this.tokenSignal());
    readonly isAdmin = computed(() => {
        const u = this.user();
        return !!u && u.role === Role.ADMIN;
    })

    private __loadUser(): UserInterface | null {
        const userJson = localStorage.getItem('user');
        return userJson ? JSON.parse(userJson) : null;
    }

    public login(authData: AuthInterface) {
        const aTkn: string = authData.accessToken;
        const u: UserInterface = this.utilMapper.mapAuthDataToUser(authData);

        localStorage.setItem('accessToken', aTkn);
        localStorage.setItem('user', JSON.stringify(u));
        this.tokenSignal.set(aTkn);
        this.userSignal.set(u);
    }

    public logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        this.tokenSignal.set(null);
        this.userSignal.set(null);
    }


}