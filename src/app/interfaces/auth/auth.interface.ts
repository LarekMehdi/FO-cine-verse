import { Role } from "../../constants/role.constant";

export interface SignupInterface {
    email: string;
    pseudo: string;
    password: string;
}

export interface SigninInterface {
    pseudo: string;
    password: string;
}

export interface AuthInterface {
    id: number;
    pseudo: string;
    email: string;
    role: Role;
    accessToken: string;
}

