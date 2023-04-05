import {
    ChangeEvent,
    ForwardRefExoticComponent,
    RefAttributes,
    SVGProps,
} from "react";

export type IcoHeroicon = ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
>;
export type ArrayTheme<T> = {
    theme: T;
    Icon: IcoHeroicon;
    color?: string;
};
export type ThemeContextProps = {
    state: ThemeState;
    methods: {
        changeThemeMode(e: ChangeEvent<HTMLInputElement>): void;
    };
    extras: {
        arrayThemeMode: ArrayTheme<ThemeMode>[];
        checked: (theme: ThemeMode) => boolean;
    };
};

export type ThemeProviderProps = { children: JSX.Element | JSX.Element[] };

export type ThemeMode = "light" | "dark" | "default";
export type ThemeState = { themeMode: ThemeMode };

export type ThemeActions = {
    type: "[Theme]-changeThemeMode";
    payload: ThemeMode;
};
