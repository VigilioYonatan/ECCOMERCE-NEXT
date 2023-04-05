import { AuthLogin, AuthLogued } from "../schemas/auth.schema";

type AuthenticatedType = "authenticated" | "not-authenticated" | "checking";
export type AuthState = { status: AuthenticatedType; user: AuthLogued | null };
export type AuthProviderProps = { children: JSX.Element | JSX.Element[] };
export type AuthContextProps = {
    state: AuthState;
    onSignIn: (props: AuthLogin) => Promise<boolean>;
    onLogout: () => void;
};

export type AuthReducerActions =
    | { type: "[auth]-login"; payload: any }
    | { type: "[auth]-logout" };
