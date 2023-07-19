export interface AuthState {
    user: any;
    token: string;
}

export interface RootState {
    theme: object;
    auth: AuthState;
}
