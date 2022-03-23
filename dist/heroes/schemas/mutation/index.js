"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const mutation = `
input HeroInput {
    id: ID
    name: String!
    slug: String
   
    intelligence: Int
    strength: Int
    speed: Int
    durability: Int
    power: Int
    combat: Int

    gender: String
    race : String
    height: [String]
    weight: [String]
    eyeColor: String
    hairColor: String

    fullName: String
    alterEgos: String
    aliases: [String]
    placeOfBirth: String
    firstAppearance: String
    publisher: String
    alignment: String

    occupation: String
    base: String

    groupAffiliation: String
    relatives: String

    xs: String
    sm: String
    md: String
    lg: String
}
type Mutation {
    createHero(data: HeroInput! ): Hero
}`;
var _default = mutation;
exports.default = _default;