export interface AuthState {
    user: object;
    token: string;
}

export interface RootState {
    theme: object;
    auth: AuthState;
}
