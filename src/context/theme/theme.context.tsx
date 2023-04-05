import {
    createContext,
    useReducer,
    useEffect,
    useContext,
    ChangeEvent,
} from "react";
import { themeReducer } from "./theme.reducer";
import {
    ArrayTheme,
    ThemeContextProps,
    ThemeMode,
    ThemeProviderProps,
    ThemeState,
} from "./theme.types";
import ComputerDesktopIcon from "@heroicons/react/24/solid/ComputerDesktopIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import cookie from "js-cookie";

export const ThemeContext = createContext({} as ThemeContextProps);
const themeState = {
    themeMode: "light",
} satisfies ThemeState;
const getThemeLocalStorage = (): ThemeState => {
    let themeMode: ThemeMode = "default";
    if (cookie.get("themeMode")) {
        themeMode = cookie.get("themeMode") as ThemeMode;
    }
    return { themeMode };
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [state, dispatch] = useReducer(
        themeReducer,
        themeState,
        getThemeLocalStorage
    );

    function changeThemeMode(e: ChangeEvent<HTMLInputElement>) {
        const theme = e.target.value as ThemeMode;
        if (theme === state.themeMode) return;
        if (theme === "default") {
            cookie.remove("themeMode");
            dispatch({ type: "[Theme]-changeThemeMode", payload: theme });
            return;
        }
        cookie.set("themeMode", theme);
        dispatch({ type: "[Theme]-changeThemeMode", payload: theme });
    }

    function lightModeElement() {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    function darkModeElement() {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    }

    useEffect(() => {
        if (state.themeMode === "light") {
            lightModeElement();
            return;
        }
        if (state.themeMode === "default") {
            if (
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                darkModeElement();
                return;
            }
            lightModeElement();
            return;
        }
        darkModeElement();
    }, [state]);

    const arrayThemeMode: ArrayTheme<ThemeMode>[] = [
        { theme: "dark", Icon: MoonIcon, color: "dark:text-white text-black" },
        { theme: "light", Icon: SunIcon, color: "text-yellow-600" },
        { theme: "default", Icon: ComputerDesktopIcon, color: "text-black" },
    ];

    function checked(theme: ThemeMode) {
        return state.themeMode === theme;
    }
    return (
        <ThemeContext.Provider
            value={{
                state,
                methods: { changeThemeMode },
                extras: {
                    arrayThemeMode,
                    checked,
                },
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export const ThemeContextState = () => useContext(ThemeContext);
