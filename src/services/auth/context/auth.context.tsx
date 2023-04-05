import { createContext, useContext, useEffect, useReducer } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { AuthState, AuthProviderProps, AuthContextProps } from "./auth.types";
import { authReducer } from "./auth.reducer";
import { AuthLogin } from "../schemas/auth.schema";
export const AuthContext = createContext({} as AuthContextProps);

const authState: AuthState = { status: "checking", user: null };

export function AuthProvider({ children }: AuthProviderProps) {
    const [state, dispatch] = useReducer(authReducer, authState);
    const { data, status } = useSession();

    function onLogout() {
        signOut();
        dispatch({ type: "[auth]-logout" });
    }

    async function onSignIn({ email, password }: AuthLogin) {
        const data = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (data?.ok) {
            return true;
        }
        throw new Error("Correo o contaseña incorrecta");
    }
    useEffect(() => {
        if (status === "authenticated") {
            dispatch({ type: "[auth]-login", payload: data.user });
        } else {
            dispatch({ type: "[auth]-logout" });
        }
    }, [status, data]);
    return (
        <AuthContext.Provider value={{ state, onSignIn, onLogout }}>
            {children}
        </AuthContext.Provider>
    );
}
export const AuthContextState = () => useContext(AuthContext);
