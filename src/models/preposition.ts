export const PrepositionSet = <const> ['before', 'after'];
export type Preposition = typeof PrepositionSet[number];
const prepositions: Record<string, { preposition: Preposition, value: string }> = {
    bachelor: { preposition: 'after', value: 'in' },
};
export function withPreposition(key: string): string {
    const p = prepositions[key.toLocaleLowerCase()];
    if (!p) return key;
    if (p.preposition === 'before') return `${p.value} ${key}`;
    return `${key} ${p.value}`;
}