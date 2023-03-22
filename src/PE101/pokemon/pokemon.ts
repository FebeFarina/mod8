/**
 * Interfaz que define los métodos que debe tener un pokemon
 */
export interface Pokemon {
    getName(): string;
    getStats(): { [key: string]: number };
    getLevel(): number;
    levelUp(): void;
}