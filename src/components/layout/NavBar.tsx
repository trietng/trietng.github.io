import { Tab, TabGroup, TabList } from "@headlessui/react";
import type { NavBarProps } from "../../models/navBarProps";

export default function NavBar(props: NavBarProps) {
    return (
        <TabGroup
            className="md:block hidden"
            defaultIndex={props.currentIndex}
            id={props.id}
        >
            <TabList className="flex gap-x-2 rounded-full p-2 bg-white dark:bg-white/[0.025]">
                {props.navItems.map((item) => 
                    <Tab
                        as="a"
                        key={item.href}
                        className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-white data-[selected]:bg-amber-900 dark:data-[selected]:bg-white/10 data-[hover]:bg-amber-900/10 dark:data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-amber-900 dark:data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-black dark:data-[focus]:outline-white"
                        href={item.localeHref}
                    >
                        {item.name}
                    </Tab>
                )}
            </TabList>
        </TabGroup>
    )
}