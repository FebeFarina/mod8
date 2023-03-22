import "mocha";
import { expect } from "chai";
import { GrassPokemon } from "../../../src/PE101/pokemon/grass_pokemon";

describe("grassPokemon", () => {
    it("Debería crear un pokemon de tipo fuego", () => {
        const grassPokemon = new GrassPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(grassPokemon).to.be.an.instanceOf(GrassPokemon);
    });
    it("Debería tener un nombre", () => {
        const grassPokemon = new GrassPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(grassPokemon.getName()).to.be.equal("Charmander");
    });
    it("Debería tener estadísticas", () => {
        const grassPokemon = new GrassPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(grassPokemon.getStats()).to.be.deep.equal({ hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
    });
    it("Devbería tener un nivel", () => {
        const grassPokemon = new GrassPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(grassPokemon.getLevel()).to.be.equal(1);
    });
    it("Debería subir de nivel", () => {
        const grassPokemon = new GrassPokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        grassPokemon.levelUp();
        expect(grassPokemon.getLevel()).to.be.equal(2);
    });
});