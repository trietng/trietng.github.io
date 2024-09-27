import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
    title: string;
    className?: string;
}

export default function Section(props: SectionProps) {
    return (
        <Disclosure as="section" className={props.className}>
            <DisclosureButton className="w-full border-b border-b-amber-900 dark:border-b-white text-2xl text-left">
                {props.title}
                <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />    
            </DisclosureButton>
            <DisclosurePanel>
                {props.children}
            </DisclosurePanel>
        </Disclosure>
    );
}