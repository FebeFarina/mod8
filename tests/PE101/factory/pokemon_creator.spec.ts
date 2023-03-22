import "mocha";
import { expect } from "chai";
import { PokemonCreator } from "../../../src/PE101/factory/pokemon_creator";
import {FirePokemonCreator} from "../../../src/PE101/factory/fire_pokemon_creator";

describe("PokemonCreator", () => {
    it("Debería ser una clase", () => {
        expect(PokemonCreator).to.be.an("function");
    });
    it("Debería haber un método logic", () => {
        const pokemon = new FirePokemonCreator("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65});
        expect(pokemon.logic()).to.be.eq("Pokemon creado: Charmander de nivel 1")
    });
});