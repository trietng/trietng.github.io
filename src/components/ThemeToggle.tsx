import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { $theme } from "../stores/theme";
import { useClientStore } from "../hooks/use-client-store";

export default function ThemeToggle() {
    const theme = useClientStore($theme);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
    }, [theme]);
    
    return (
        <Switch
            checked={theme === 'dark'}
            onChange={(checked) => $theme.set(checked ? 'dark' : 'light')}
            className="group inline-flex items-center rounded-full p-2 text-red-600 data-[checked]:text-yellow-300 hover:bg-black/10 dark:hover:bg-white/10"
        >
            {
            theme === 'dark' ? 
                <TbMoonFilled size="1.5rem"/> : (
            theme === 'light' ?
                <TbSunFilled size="1.5rem"/> :
                <div className="size-6"/>
            )}
        </Switch>
    );
}