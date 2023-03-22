import "mocha";
import { expect } from "chai";
import { FirePokemon } from "../../../src/PE101/pokemon/fire_pokemon";

describe("FirePokemon", () => {
    it("Debería crear un pokemon de tipo fuego", () => {
        const firePokemon = new FirePokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(firePokemon).to.be.an.instanceOf(FirePokemon);
    });
    it("Debería tener un nombre", () => {
        const firePokemon = new FirePokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(firePokemon.getName()).to.be.equal("Charmander");
    });
    it("Debería tener estadísticas", () => {
        const firePokemon = new FirePokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(firePokemon.getStats()).to.be.deep.equal({ hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
    });
    it("Devbería tener un nivel", () => {
        const firePokemon = new FirePokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        expect(firePokemon.getLevel()).to.be.equal(1);
    });
    it("Debería subir de nivel", () => {
        const firePokemon = new FirePokemon("Charmander", 1, { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 });
        firePokemon.levelUp();
        expect(firePokemon.getLevel()).to.be.equal(2);
    });
});