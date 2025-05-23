export const LangSet = <const> ['en', 'vi'];
export type Lang = typeof LangSet[number];
export const LangName: Record<Lang, string> = {
    en: 'English',
    vi: 'Tiếng Việt',
};
export const DEFAULT_LANG: Lang = LangSet[0];