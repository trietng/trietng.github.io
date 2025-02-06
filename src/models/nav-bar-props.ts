import type { NavItem } from "./nav-item";

export interface NavBarProps {
    pathname: string;
    lang: string;
    navItems: NavItem[];
    currentIndex: number;
    id?: string;
}