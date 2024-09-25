import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { $theme } from "../stores/theme";
import { useClientStore } from "../hooks/useClientStore";

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
                <MoonIcon className="h-6 w-6"/> : (
            theme === 'light' ?
                <SunIcon className="h-6 w-6"/> :
                <div className="h-6 w-6"/>
            )}
        </Switch>
    );
}