import "mocha";
import { expect } from "chai";
import { FirePokemonCreator } from "../../../src/PE101/factory/fire_pokemon_creator";
import {FirePokemon} from "../../../src/PE101/pokemon/fire_pokemon";

describe("FirePokemonCreator", () => {
    it("Debería ser una clase", () => {
        expect(FirePokemonCreator).to.be.an("function");
    });
    it("Debería crear un pokemon de tipo fuego", () => {
        const firePokemonCreator = new FirePokemonCreator("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        const firePokemon = firePokemonCreator.factoryMethod();
        expect(firePokemon).to.be.an.instanceOf(FirePokemon);
    });
});