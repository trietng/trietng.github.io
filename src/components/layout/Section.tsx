import "../../styles/global.css" // something is not right with this import
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import type { PropsWithChildren } from "react";
import { TbChevronDown } from "react-icons/tb";

interface SectionProps extends PropsWithChildren {
    title: string;
    className?: string;
}

export default function Section(props: SectionProps) {
    return (
        <Disclosure as="section" className={props.className} defaultOpen>
            <DisclosureButton className="group w-full border-b border-b-amber-900 dark:border-b-white text-2xl flex justify-between">
                {props.title}
                <TbChevronDown size="2rem" className="cursor-pointer rounded-full transition-transform group-data-[open]:rotate-180 hover:bg-amber-900/10 dark:hover:bg-white/10"/>
            </DisclosureButton>
            <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                {props.children}
            </DisclosurePanel>
        </Disclosure>
    );
}