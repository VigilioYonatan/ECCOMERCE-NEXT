import { produce } from "immer";
import { ThemeActions, ThemeState } from "./theme.types";

export const themeReducer = (
    state: ThemeState,
    action: ThemeActions
): ThemeState => {
    switch (action.type) {
        case "[Theme]-changeThemeMode":
            return produce(state, (draft) => {
                draft.themeMode = action.payload;
            });

        default:
            return state;
    }
};
