"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const enumFilter = `
    enum Filter {
        name
        appearance
        biography
        work
        connections
    }
`;
const superHero = `
    ${enumFilter}

    type Hero {
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
`;
var _default = superHero;
exports.default = _default;