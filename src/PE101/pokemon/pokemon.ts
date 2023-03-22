export interface Pokemon {
    getName(): string;
    getStats(): { [key: string]: number };
    getLevel(): number;
    levelUp(): void;
}