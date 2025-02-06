import type { NavItem } from "../models/nav-item";

interface Config {
    navItems: NavItem[];
}

export const config: Config = {
    navItems: [
        { name: 'home', href: '/' },
        // { name: 'portfolio', href: '/portfolio' },
        // { name: 'blog', href: '/blog' },
    ]
}