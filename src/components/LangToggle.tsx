import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { TbChevronDown } from "react-icons/tb";
import { getRelativeLocaleUrl } from "astro:i18n";
import { LangName, LangSet, type Lang } from "../models/lang";
import { LangUtils } from "../utils/lang";

interface LangToggleProps {
    lang: Lang;
    pathname: string;
}

export default function LangToggle(props: LangToggleProps) {
    const [highlightSelected, setHighlightSelected] = useState(false);

    return (
        <Menu>
            <MenuButton className="w-36 inline-flex justify-between items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold bg-amber-900/5 dark:bg-white/5 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
                <div className="group inline-flex items-center gap-2">
                    <img src={`/icons/flags/${props.lang}.svg`} alt={props.lang} className="w-4 h-4 rounded-full" />
                    {LangName[props.lang]}
                </div>
                <TbChevronDown size="1rem"  className="text-amber-900 dark:text-white"/>
            </MenuButton>
            <MenuItems
                transition
                anchor="bottom end"
                className="w-36 origin-top-right rounded-xl border z-20 border-black/5 bg-amber-50 dark:border-white/5 dark:bg-neutral-700 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                onMouseEnter={() => setHighlightSelected(false)}
                onMouseLeave={() => setHighlightSelected(true)}
            >
                {LangSet.map((item) => 
                    <MenuItem key={item}>
                        <button className={
                            "group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:text-white data-[focus]:bg-amber-900 dark:data-[focus]:bg-white/10" +
                            ((highlightSelected && props.lang === item) ? ' bg-amber-900 text-white dark:bg-white/10' : '')
                        }
                            onClick={() => {
                                const url = 
                                item === props.lang ?
                                undefined :
                                getRelativeLocaleUrl(item, LangUtils.removeLocaleFromUrl(props.pathname));
                                if (url) window.location.href = url;
                            }}
                        >
                            <img src={`/icons/flags/${item}.svg`} alt={item} className="w-4 h-4" />
                            {LangName[item]}
                        </button>
                    </MenuItem>
                )}
            </MenuItems>
        </Menu>
    );
}