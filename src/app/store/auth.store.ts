import { computed, Injectable, signal } from "@angular/core";
import { UserInterface } from "../interfaces/user/user.interface";
import { Role } from "../constants/role.constant";

@Injectable({ providedIn: 'root'})
export class AuthStore {
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

    public login(accessToken: string, user: UserInterface) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        this.tokenSignal.set(accessToken);
        this.userSignal.set(user);
    }

    public logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        this.tokenSignal.set(null);
        this.userSignal.set(null);
    }


}