import type { Preposition } from "./preposition";

export const LangSet = <const> ['en', 'vi'];
export type Lang = typeof LangSet[number];
export const LangName: Record<Lang, string> = {
    en: 'English',
    vi: 'Tiếng Việt',
};
export const DEFAULT_LANG: Lang = LangSet[0];
const prepositions: Record<string, { preposition: Preposition, value: string }> = {
    bachelor: { preposition: 'after', value: 'in' },
};
export function withPreposition(key: string): string {
    const p = prepositions[key.toLocaleLowerCase()];
    if (!p) return key;
    if (p.preposition === 'before') return `${p.value} ${key}`;
    return `${key} ${p.value}`;
}