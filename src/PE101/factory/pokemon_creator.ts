import { Pokemon } from "../pokemon/pokemon";
/**
 * Clase PokemonCreator
 */
export abstract class PokemonCreator {
    public abstract factoryMethod(): Pokemon;
    public logic(): string {
        const pokemon = this.factoryMethod();
        return `Pokemon creado: ${pokemon.getName()} de nivel ${pokemon.getLevel()}`;
    }
}