import { Pokemon } from "../pokemon/pokemon";
/**
 * Clase PokemonCreator
 */
export abstract class PokemonCreator {
    public abstract factoryMethod(): Pokemon;
}