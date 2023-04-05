import { AuthReducerActions, AuthState } from "./auth.types";

export const authReducer = (
    state: AuthState,
    action: AuthReducerActions
): AuthState => {
    switch (action.type) {
        case "[auth]-login":
            return { ...state, status: "authenticated", user: action.payload };
        case "[auth]-logout":
            return { ...state, status: "not-authenticated", user: null };

        default:
            return state;
    }
};
