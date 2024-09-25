import type { NavItem } from "./navItem";

export interface NavBarProps {
    pathname: string;
    lang: string;
    navItems: NavItem[];
    currentIndex: number;
    id?: string;
}