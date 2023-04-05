import { ThemeContextState } from "../theme.context";
import { NotifyCard } from "~/components/dropdowns/Notify.dropdown";
export function NotifyThemeCard() {
    const { extras, methods } = ThemeContextState();

    return (
        <NotifyCard>
            <div className="">
                <p>Theme Mode</p>
                <div className="flex justify-center gap-3 mt-1">
                    {extras.arrayThemeMode.map(({ theme, Icon }) => (
                        <div key={theme} className="flex flex-col gap-1">
                            <Icon className="w-5 h-5" />
                            <input
                                type="radio"
                                name="theme"
                                className="cursor-pointer"
                                value={theme}
                                checked={extras.checked(theme)}
                                onChange={methods.changeThemeMode}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </NotifyCard>
    );
}
